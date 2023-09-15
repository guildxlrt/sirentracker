import { DatabaseServices } from "Infra-backend"
import { Post } from "Domain"
import { BaseUsecase } from "../../../assets"
import { GetAllPostsDTO, ResponseDTO } from "Dto"

export class GetAllPostsUsecase extends BaseUsecase<GetAllPostsDTO, ResponseDTO<Post[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetAllPostsDTO): Promise<ResponseDTO<Post[]>> {
		return await this.service.post.getAll(inputs)
	}
}
