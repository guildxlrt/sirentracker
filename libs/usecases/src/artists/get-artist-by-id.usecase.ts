import { DataServices } from "Infra-backend"
import { ArtistIdDTO } from "Dto"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetArtistByIdUsecase implements BaseUsecase<ArtistIdDTO, Artist> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(id: ArtistIdDTO): Promise<Artist> {
		return await this.service.artist.getById(id)
	}
}
