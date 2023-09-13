import { Comment, CommentRepository } from "Domain"
import { CommentIdDTO, CreateCommentDTO, PostIdDTO, ReleaseIdDTO, ResponseDTO } from "Dto"

export class CommentImplement implements CommentRepository {
	async create(params: CreateCommentDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async delete(id: CommentIdDTO): Promise<ResponseDTO<unknown>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async findManyByRelease(id: ReleaseIdDTO): Promise<ResponseDTO<Comment[]>> {
		const dbRes: Comment[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByPost(id: PostIdDTO): Promise<ResponseDTO<Comment[]>> {
		const dbRes: Comment[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}
