import { ArtistId, Post } from "Domain"
import { IMedia } from "Shared-utils"

type INewPost = Omit<Post, "id" | "createdAt" | "imageUrl" | "videoUrl">

export class CreatePostDTO implements INewPost {
	artist_id: number
	title: string
	text: string
	private readonly media?: IMedia

	constructor(artist_id: ArtistId, title: string, text: string, media?: IMedia) {
		this.artist_id = artist_id
		this.title = title
		this.text = text
		this.media = media
	}

	mediaIsValid() {
		if (this.media && this.media?.type && this.media?.file) return true
		else return false
	}
}

export type PostIdDTO = Pick<Post, "id">["id"]
