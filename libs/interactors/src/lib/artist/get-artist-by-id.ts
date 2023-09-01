import { DatabaseServices } from "Infra-backend"
import { ArtistIdDTO, ResponseDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../../assets"

export class GetArtistByIdUsecase extends BaseUsecase<ArtistIdDTO, ResponseDTO<Artist>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<ResponseDTO<Artist>> {
		return await this.service.artist.getById(id)
	}
}
