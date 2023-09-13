import { error } from "console"
import { BaseEntity } from "../../assets"
import { AdminId } from "./admin"
import { ArtistId } from "./artist"
import { FanId } from "./fan"
import { ReleaseId } from "./release"

export class Comment extends BaseEntity {
	content: string
	admin_id: AdminId | null
	artist_id: ArtistId | null
	fan_id: FanId | null

	release_id: ReleaseId | null
	post_id: ReleaseId | null

	constructor(
		id: number,
		createdAt: Date,
		content: string,
		admin_id: AdminId | null,
		artist_id: ArtistId | null,
		fan_id: FanId | null,
		release_id: ReleaseId | null,
		post_id: ReleaseId | null
	) {
		super(id, createdAt)

		this.content = content

		if (
			!artist_id ||
			!admin_id ||
			!fan_id ||
			typeof artist_id !== ("number" || "null") ||
			typeof admin_id !== ("number" || "null") ||
			typeof fan_id !== ("number" || "null")
		)
			throw error(
				"an ID is missing or is not at the good format (it must be a number or null)"
			)
		else if ((artist_id && admin_id) || (artist_id && fan_id) || (admin_id && fan_id))
			throw error("only one ID could be submitted, others must be null")
		else {
			this.admin_id = admin_id
			this.artist_id = artist_id
			this.fan_id = fan_id
		}

		if (
			!release_id ||
			!post_id ||
			typeof release_id !== ("number" || "null") ||
			typeof post_id !== ("number" || "null")
		)
			throw error(
				"an ID is missing or is not at the good format (it must be a number or null)"
			)
		else if (release_id && post_id)
			throw error("only one ID could be submitted, others must be null")
		else {
			this.release_id = release_id
			this.post_id = post_id
		}
	}
}

export type CommentId = Pick<Comment, "id">["id"]
