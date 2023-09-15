import { Comment, CommentRepository } from "Domain"
import {
	CreateCommentDTO,
	DeleteCommentDTO,
	FindCommentsByPostDTO,
	FindCommentsByReleaseDTO,
	ResponseDTO,
} from "Dto"

export class CommentImplement implements CommentRepository {
	async create(inputs: CreateCommentDTO): Promise<ResponseDTO<boolean>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async delete(inputs: DeleteCommentDTO): Promise<ResponseDTO<unknown>> {
		const res = new ResponseDTO(200, null, true)

		return res
	}

	async findManyByRelease(inputs: FindCommentsByReleaseDTO): Promise<ResponseDTO<Comment[]>> {
		const dbRes: Comment[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}

	async findManyByPost(inputs: FindCommentsByPostDTO): Promise<ResponseDTO<Comment[]>> {
		const dbRes: Comment[] = []

		const res = new ResponseDTO(200, null, dbRes)

		return res
	}
}
