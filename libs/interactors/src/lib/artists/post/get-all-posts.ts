import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../../assets"
import { GetAllPostsDTO } from "Dto"

export class GetAllPostsUsecase extends BaseUsecase<GetAllPostsDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetAllPostsDTO): Promise<GetAllPostsDTO> {
		return await this.service.post.getAll(inputs)
	}
}
