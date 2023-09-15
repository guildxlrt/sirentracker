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

export class CreatePostDTO implements BasicDTO<NewPost, boolean> {
	readonly data: NewPost
	storage?: boolean
	error?: string

	constructor(data: NewPost) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	mediaIsValid() {
		const { media } = this.data

		if (media && media?.type && media?.file) return true
		else return false
	}
}

// DELETE POST
export class DeletePostsDTO implements BasicDTO<PostId, void> {
	readonly data: PostId
	storage?: void
	error?: string

	constructor(data: PostId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET POST
export class GetPostsDTO implements BasicDTO<PostId, Post> {
	readonly data: PostId
	storage?: Post
	error?: string

	constructor(data: PostId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// GET ALL
export class GetAllPostsDTO implements BasicDTO<void, Post[]> {
	readonly data: void
	storage?: Post[]
	error?: string

	constructor(data: void) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

// FIND MANY BY ARTIST
export class FindPostsByArtistDTO implements BasicDTO<ArtistId, Post[]> {
	readonly data: ArtistId
	storage?: Post[]
	error?: string

	constructor(data: ArtistId) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}
