import { DatabaseServices } from "Infra-backend"
import { CommentIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class DeleteCommentUsecase extends BaseUsecase<CommentIdDTO, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: CommentIdDTO): Promise<ResponseDTO<unknown>> {
		return await this.service.comment.delete(id)
	}
}
