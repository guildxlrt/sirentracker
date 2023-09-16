import { DatabaseServices } from "Infra-backend"
import { GetPostDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class GetPostUsecase extends BaseUsecase<GetPostDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: GetPostDTO): Promise<GetPostDTO> {
		return await this.service.post.get(id)
	}
}
