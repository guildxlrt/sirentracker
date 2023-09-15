import { DatabaseServices } from "Infra-backend"
import { Comment } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindCommentsByPostDTO, ResponseDTO } from "Dto"

export class FindCommentsByPostUsecase extends BaseUsecase<
	FindCommentsByPostDTO,
	ResponseDTO<Comment[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindCommentsByPostDTO): Promise<ResponseDTO<Comment[]>> {
		return await this.service.comment.findManyByPost(id)
	}
}
