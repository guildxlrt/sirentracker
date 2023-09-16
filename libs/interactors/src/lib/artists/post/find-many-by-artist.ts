import { DatabaseServices } from "Infra-backend"
import { BaseUsecase } from "../../../assets"
import { FindPostsByArtistDTO } from "Dto"

export class FindPostsByArtistUsecase extends BaseUsecase<FindPostsByArtistDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: FindPostsByArtistDTO): Promise<FindPostsByArtistDTO> {
		return await this.service.post.findManyByArtist(id)
	}
}
