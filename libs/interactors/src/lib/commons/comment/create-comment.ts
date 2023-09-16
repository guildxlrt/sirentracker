import { DatabaseServices } from "Infra-backend"
import { CreateCommentDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class CreateCommentUsecase extends BaseUsecase<CreateCommentDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: CreateCommentDTO): Promise<CreateCommentDTO> {
		return await this.service.comment.create(inputs)
	}
}
