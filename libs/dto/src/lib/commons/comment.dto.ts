import { CommentId, OrderId, PostId, ReleaseId } from "Domain"
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

export class CreateCommentDTO implements BasicDTO<INewCommentData, boolean> {
	data: INewCommentData
	storage?: boolean
	error?: string

	constructor(data: INewCommentData) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// DELETE ORDER
export class DeleteCommentDTO implements BasicDTO<CommentId, unknown> {
	data: CommentId
	storage?: unknown
	error?: string

	constructor(data: OrderId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND BY RELEASE
export class FindCommentsByReleaseDTO implements BasicDTO<ReleaseId, unknown> {
	data: ReleaseId
	storage?: unknown
	error?: string

	constructor(data: ReleaseId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND BY RELEASE
export class FindCommentsByPostDTO implements BasicDTO<PostId, unknown> {
	data: PostId
	storage?: unknown
	error?: string

	constructor(data: PostId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}
