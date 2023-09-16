import { DatabaseServices } from "Infra-backend"
import { CreatePostDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class CreatePostUsecase extends BaseUsecase<CreatePostDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreatePostDTO): Promise<CreatePostDTO> {
		return await this.service.post.create(params)
	}
}
