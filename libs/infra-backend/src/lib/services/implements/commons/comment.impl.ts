import { Comment, CommentRepository } from "Domain"
import {
	CreateCommentDTO,
	DeleteCommentDTO,
	FindCommentsByPostDTO,
	FindCommentsByReleaseDTO,
} from "Dto"

export class CommentImplement implements CommentRepository {
	async create(inputs: CreateCommentDTO): Promise<CreateCommentDTO> {
		inputs.putInStorage(true)

		return inputs
	}

	async delete(inputs: DeleteCommentDTO): Promise<DeleteCommentDTO> {
		inputs.putInStorage(true)

		return inputs
	}

	async findManyByRelease(inputs: FindCommentsByReleaseDTO): Promise<FindCommentsByReleaseDTO> {
		const dbRes: Comment[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}

	async findManyByPost(inputs: FindCommentsByPostDTO): Promise<FindCommentsByPostDTO> {
		const dbRes: Comment[] = []

		inputs.putInStorage(dbRes)

		return inputs
	}
}
