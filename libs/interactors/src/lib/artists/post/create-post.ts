import { DatabaseServices } from "Infra-backend"
import { CreatePostDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreatePostUsecase extends BaseUsecase<CreatePostDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreatePostDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.post.create(params)
	}
}
