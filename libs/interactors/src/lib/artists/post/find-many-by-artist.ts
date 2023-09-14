import { DatabaseServices } from "Infra-backend"
import { Post } from "Domain"
import { BaseUsecase } from "../../assets"
import { ArtistIdDTO, ResponseDTO } from "Dto"

export class FindPostsByArtistUsecase extends BaseUsecase<ArtistIdDTO, ResponseDTO<Post[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<ResponseDTO<Post[]>> {
		return await this.service.post.findManyByArtist(id)
	}
}
