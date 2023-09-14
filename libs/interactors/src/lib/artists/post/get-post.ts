import { DatabaseServices } from "Infra-backend"
import { ResponseDTO, PostIdDTO } from "Dto"
import { Post } from "Domain"
import { BaseUsecase } from "../../assets"

export class GetPostUsecase extends BaseUsecase<PostIdDTO, ResponseDTO<Post>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: PostIdDTO): Promise<ResponseDTO<Post>> {
		return await this.service.post.get(id)
	}
}
