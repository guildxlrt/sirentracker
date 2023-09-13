import { BaseEntity } from "../../assets"
import { ArtistId } from "./artist"

export class Post extends BaseEntity {
	artist_id: ArtistId
	title: string
	content: string
	imageUrl?: string

	constructor(
		id: number,
		createdAt: Date,

		artist_id: ArtistId,
		title: string,
		content: string,
		imageUrl?: string
	) {
		super(id, createdAt)

		this.artist_id = artist_id
		this.title = title
		this.content = content
		this.imageUrl = imageUrl
	}
}

export type PostId = Pick<Post, "id">["id"]
