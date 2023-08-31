import { DataServices } from "Infra-backend"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class FetchAllArtistsUsecase implements BaseUsecase<void, Artist[]> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(): Promise<Artist[]> {
		return await this.service.artist.getAll()
	}
}
