import { DatabaseServices } from "Infra-backend"
import { DeletePostsDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class DeletePostUsecase extends BaseUsecase<DeletePostsDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: DeletePostsDTO): Promise<DeletePostsDTO> {
		return await this.service.post.delete(inputs)
	}
}
