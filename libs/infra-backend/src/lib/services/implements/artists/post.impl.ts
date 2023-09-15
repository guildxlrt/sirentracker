import { Post, PostRepository } from "Domain"
import { ArtistIdDTO, CreatePostDTO, GetAllPostsDTO, PostIdDTO, ResponseDTO } from "Dto"

export class PostImplement implements PostRepository {
	async create(inputs: CreatePostDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async delete(id: PostIdDTO): Promise<ResponseDTO<unknown>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async get(id: PostIdDTO): Promise<ResponseDTO<Post>> {
		const dbRes: any = {}

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async getAll(inputs: GetAllPostsDTO): Promise<ResponseDTO<Post[]>> {
		const dbRes: Post[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByArtist(id: ArtistIdDTO): Promise<ResponseDTO<Post[]>> {
		const dbRes: Post[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}
