import { DatabaseServices } from "Infra-backend"
import { Comment } from "Domain"
import { BaseUsecase } from "../../assets"
import { PostIdDTO, ResponseDTO } from "Dto"

export class FindCommentsByPostUsecase extends BaseUsecase<PostIdDTO, ResponseDTO<Comment[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: PostIdDTO): Promise<ResponseDTO<Comment[]>> {
		return await this.service.comment.findManyByPost(id)
	}
}
