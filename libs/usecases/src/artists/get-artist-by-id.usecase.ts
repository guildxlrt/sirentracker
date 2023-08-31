import { DatabaseServices } from "Infra-backend"
import { ArtistIdDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetArtistByIdUsecase extends BaseUsecase<ArtistIdDTO, Artist> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<Artist> {
		return await this.service.artist.getById(id)
	}
}
