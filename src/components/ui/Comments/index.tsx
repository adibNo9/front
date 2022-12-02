import { useState, useEffect, FC } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from './api'
import styles from './styles.module.css'

export interface IComment {
  id: string
  body: string
  username: string
  userId: string
  parentId: null | string
  createdAt: string
}

export interface ActiveComment {
  id: string
  type: string
}

export type replyFn = (id: string) => IComment[]

export type deleteFn = (id: string) => void

export type addCommentFn = (text?: any, id?: any) => void

const Comments: FC<{ currentUserId: string }> = ({ currentUserId }) => {
  const [backendComments, setBackendComments] = useState<IComment[]>([])
  const [activeComment, setActiveComment] = useState<null | ActiveComment>(null)
  const rootComments = backendComments.filter(
    backendComment => backendComment.parentId === null,
  )
  const getReplies: replyFn = commentId =>
    backendComments
      .filter(backendComment => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      )
  const addComment: addCommentFn = (text, parentId) => {
    createCommentApi(text, parentId).then(comment => {
      setBackendComments([comment, ...backendComments])
      setActiveComment(null)
    })
  }

  const updateComment: addCommentFn = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map(backendComment => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text }
        }
        return backendComment
      })
      setBackendComments(updatedBackendComments)
      setActiveComment(null)
    })
  }
  const deleteComment: deleteFn = commentId => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          backendComment => backendComment.id !== commentId,
        )
        setBackendComments(updatedBackendComments)
      })
    }
  }

  useEffect(() => {
    getCommentsApi().then(data => {
      setBackendComments(data)
    })
  }, [])

  return (
    <div className={styles['comments']}>
      <h3 className={styles['comments-title']}>Comments</h3>
      <div className={styles['comment-form-title']}>Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className={styles['comments-container']}>
        {rootComments.map(rootComment => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments
