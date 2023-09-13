import { DatabaseServices } from "Infra-backend"
import { Post } from "Domain"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class GetAllPostsUsecase extends BaseUsecase<void, ResponseDTO<Post[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<ResponseDTO<Post[]>> {
		return await this.service.post.getAll()
	}
}
