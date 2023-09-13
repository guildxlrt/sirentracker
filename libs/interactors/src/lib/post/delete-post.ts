import { DatabaseServices } from "Infra-backend"
import { PostIdDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class DeletePostUsecase extends BaseUsecase<PostIdDTO, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: PostIdDTO): Promise<ResponseDTO<unknown>> {
		return await this.service.comment.delete(id)
	}
}
