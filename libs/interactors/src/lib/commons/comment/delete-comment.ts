import { DatabaseServices } from "Infra-backend"
import { DeleteCommentDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class DeleteCommentUsecase extends BaseUsecase<DeleteCommentDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: DeleteCommentDTO): Promise<DeleteCommentDTO> {
		return await this.service.comment.delete(id)
	}
}
