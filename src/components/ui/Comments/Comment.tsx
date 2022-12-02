import { Dispatch, FC, SetStateAction } from 'react'
import CommentForm from './CommentForm'
import { Avatar } from '@mui/material'
import avatar from '@assets/images/avatar.png'
import styles from './styles.module.css'

import { IComment, addCommentFn, ActiveComment, deleteFn } from '.'

export interface ICommentFc {
  comment: IComment
  replies: IComment[]
  setActiveComment: Dispatch<SetStateAction<ActiveComment | null>>
  activeComment: null | ActiveComment
  updateComment: addCommentFn
  deleteComment: deleteFn
  addComment: addCommentFn
  parentId?: null | string
  currentUserId: string
}

const Comment: FC<ICommentFc> = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'editing'
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying'
  const fiveMinutes = 300000
  const timePassed =
    new Date().getTime() - new Date(comment.createdAt).getTime() > fiveMinutes
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed
  const canReply = Boolean(currentUserId)
  const canEdit = currentUserId === comment.userId && !timePassed
  const replyId = parentId ? parentId : comment.id
  const createdAt = new Date(comment.createdAt).toLocaleDateString()

  return (
    <div key={comment.id} className={styles['comment']}>
      <div className={styles['comment-image-container']}>
        <Avatar alt="avatar" src={avatar.src} />
      </div>
      <div className={styles['comment-right-part']}>
        <div className={styles['comment-content']}>
          <div className={styles['comment-author']}>{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && (
          <div className={styles['comment-text']}>{comment.body}</div>
        )}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={text => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null)
            }}
          />
        )}
        <div className={styles['comment-actions']}>
          {canReply && (
            <div
              className={styles['comment-action']}
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'replying' })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className={styles['comment-action']}
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'editing' })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className={styles['comment-action']}
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={text => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className={styles['replies']}>
            {replies.map(reply => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comment
