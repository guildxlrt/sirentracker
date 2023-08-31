import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class FetchAllArtistsUsecase extends BaseUsecase<void, Artist[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<Artist[]> {
		return await this.service.artist.getAll()
	}
}
