import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../../assets"
import { FindCommentsByPostDTO } from "Dto"

export class FindCommentsByPostUsecase extends BaseUsecase<FindCommentsByPostDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindCommentsByPostDTO): Promise<FindCommentsByPostDTO> {
		return await this.service.comment.findManyByPost(id)
	}
}
