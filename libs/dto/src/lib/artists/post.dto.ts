import { IMedia } from "Shared-utils"
import { BasicDTO } from "../../assets"
import { ArtistId, Post, PostId } from "Domain"

// CREATE POST
interface NewPost {
	artist_id: number
	title: string
	text: string
	media?: IMedia
}

export class CreatePostDTO extends BasicDTO<NewPost, boolean> {
	mediaIsValid() {
		const { media } = this.data

		if (media && media?.type && media?.file) return true
		else return false
	}
}

// DELETE POST
export class DeletePostsDTO extends BasicDTO<PostId, void> {}

// GET POST
export class GetPostDTO extends BasicDTO<PostId, Post> {}

// GET ALL
export class GetAllPostsDTO extends BasicDTO<void, Post[]> {}

// FIND MANY BY ARTIST
export class FindPostsByArtistDTO extends BasicDTO<ArtistId, Post[]> {}
