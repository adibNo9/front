import Form from '@components/form/components/form'
import { FC, FormEvent, useState } from 'react'
import { addCommentFn } from '.'
import styles from './styles.module.css'

interface ICommnetFrom {
  handleSubmit: addCommentFn
  submitLabel: string
  hasCancelButton?: boolean
  handleCancel?: () => void
  initialText?: string
}

const CommentForm: FC<ICommnetFrom> = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = '',
}) => {
  const [text, setText] = useState(initialText)
  const isTextareaDisabled = text.length === 0
  const onSubmit: (event: FormEvent) => void = event => {
    event.preventDefault()
    handleSubmit(text, null)
    setText('')
  }

  const submitHnadler = () => {
    handleSubmit(text, null)
  }

  const Schema = [
    {
      id: 'group-1',
      type: 'group',
      className: 'w-full',
      elements: [
        {
          id: '1',
          name: 'comment',
          value: text,
          type: 'textarea',
          label: 'دیدگاه خود را بنویسید',
        },
      ],
    },
  ]

  return (
    <>
      <Form
        schema={Schema}
        onSubmit={submitHnadler}
        primaryButton={submitLabel}
        buttonClass={styles['comment-form-button comment-form-cancel-button']}
      />
      {/* <form onSubmit={onSubmit}>
        <textarea
          className={styles['comment-form-textarea']}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className={styles['comment-form-button']}
          disabled={isTextareaDisabled}
        >
          {submitLabel}
        </button>
        {hasCancelButton && (
          <button
            type="button"
            className={styles['comment-form-button comment-form-cancel-button']}
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </form> */}
    </>
  )
}

export default CommentForm
