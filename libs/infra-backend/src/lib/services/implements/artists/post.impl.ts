import { Post, PostRepository } from "Domain"
import {
	CreatePostDTO,
	DeletePostsDTO,
	FindPostsByArtistDTO,
	GetAllPostsDTO,
	GetPostDTO,
} from "Dto"

export class PostImplement implements PostRepository {
	async create(inputs: CreatePostDTO): Promise<CreatePostDTO> {
		inputs.putInStorage(true)

		return inputs
	}

	async delete(inputs: DeletePostsDTO): Promise<DeletePostsDTO> {
		inputs.putInStorage()

		return inputs
	}

	async get(inputs: GetPostDTO): Promise<GetPostDTO> {
		const dbRes: any = {}

		inputs.putInStorage(dbRes)

		return inputs
	}

	async getAll(inputs: GetAllPostsDTO): Promise<GetAllPostsDTO> {
		const dbRes: Post[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}

	async findManyByArtist(inputs: FindPostsByArtistDTO): Promise<FindPostsByArtistDTO> {
		const dbRes: Post[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}
}
