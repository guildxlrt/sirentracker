import { ArtistId, Post } from "Domain"

type INewPost = Omit<Post, "id" | "createdAt" | "imageUrl">

export class CreatePostDTO implements INewPost {
	artist_id: number
	title: string
	content: string
	private readonly image?: File

	constructor(artist_id: ArtistId, title: string, content: string, image?: File) {
		this.artist_id = artist_id
		this.title = title
		this.content = content
		this.image = image
	}

	imageIsValid() {
		if (this.image) return true
		else return false
	}
}

export type PostIdDTO = Pick<Post, "id">["id"]
