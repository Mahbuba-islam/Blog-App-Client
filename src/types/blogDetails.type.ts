
interface Comment {
     id: string
  content: string
  authorId: string
  createdAt: string

}


 export interface BlogDetailsTypes{
    post:{
    id: string
    title: string
    content: string
    thumbanail: string | null
    isFeatured: boolean
    status: string
    tags: string[]
    views: number
    createdAt: string
    updated: string
    comments: Comment[]
    _count: { comments: number }
  }
  className?: string

}