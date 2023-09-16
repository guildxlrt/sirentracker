import { Comment, CommentId, PostId, ReleaseId } from "Domain"
import { BasicDTO } from "../../assets"

// MAKE ORDER
interface INewCommentData {
	content: string
	admin_id: number | null
	artist_id: number | null
	fan_id: number | null
	release_id: number | null
	post_id: number | null
}

export class CreateCommentDTO extends BasicDTO<INewCommentData, boolean> {}

// DELETE ORDER
export class DeleteCommentDTO extends BasicDTO<CommentId, boolean> {}

// FIND BY RELEASE
export class FindCommentsByReleaseDTO extends BasicDTO<ReleaseId, Comment[]> {}

// FIND BY RELEASE
export class FindCommentsByPostDTO extends BasicDTO<PostId, Comment[]> {}
