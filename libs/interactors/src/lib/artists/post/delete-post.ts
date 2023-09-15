import { DatabaseServices } from "Infra-backend"
import { DeletePostsDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class DeletePostUsecase extends BaseUsecase<DeletePostsDTO, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(dto: DeletePostsDTO): Promise<ResponseDTO<unknown>> {
		return await this.service.comment.delete(dto)
	}
}
