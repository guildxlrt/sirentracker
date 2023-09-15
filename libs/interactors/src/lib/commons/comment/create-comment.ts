import { DatabaseServices } from "Infra-backend"
import { CreateCommentDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class CreateCommentUsecase extends BaseUsecase<CreateCommentDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateCommentDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.comment.create(params)
	}
}
