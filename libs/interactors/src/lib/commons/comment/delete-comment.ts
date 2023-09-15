import { DatabaseServices } from "Infra-backend"
import { DeleteCommentDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class DeleteCommentUsecase extends BaseUsecase<DeleteCommentDTO, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: DeleteCommentDTO): Promise<ResponseDTO<unknown>> {
		return await this.service.comment.delete(id)
	}
}
