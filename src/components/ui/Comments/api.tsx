import { IComment } from '.'

export const getComments: () => Promise<IComment[]> = async () => {
  return [
    {
      id: '1',
      body: 'First comment',
      username: 'Jack',
      userId: '1',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '2',
      body: 'Second comment',
      username: 'John',
      userId: '2',
      parentId: null,
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '3',
      body: 'First comment first child',
      username: 'John',
      userId: '2',
      parentId: '1',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
    {
      id: '4',
      body: 'Second comment second child',
      username: 'John',
      userId: '2',
      parentId: '2',
      createdAt: '2021-08-16T23:00:33.010+02:00',
    },
  ]
}

export const createComment: (
  text: string,
  parentId: null | string,
) => Promise<IComment> = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'John',
    createdAt: new Date().toISOString(),
  }
}

export const updateComment: (text: any) => Promise<{
  text: string
}> = async text => {
  return { text }
}

export const deleteComment: () => Promise<{}> = async () => {
  return {}
}
