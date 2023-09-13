import { Comment } from "Domain"

type INewPost = Omit<Comment, "id" | "createdAt">

export class CreateCommentDTO implements INewPost {
	content: string
	admin_id: number | null
	artist_id: number | null
	fan_id: number | null
	release_id: number | null
	post_id: number | null

	constructor(
		content: string,
		admin_id: number | null,
		artist_id: number | null,
		fan_id: number | null,
		release_id: number | null,
		post_id: number | null
	) {
		this.content = content
		this.admin_id = admin_id
		this.artist_id = artist_id
		this.fan_id = fan_id
		this.release_id = release_id
		this.post_id = post_id
	}
}

export type CommentIdDTO = Pick<Comment, "id">["id"]
