import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../base-usecase"
import { ArtistIdDTO } from "Dto"

export class FindReleasesByArtistUsecase extends BaseUsecase<ArtistIdDTO, Release[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<Release[]> {
		return await this.service.release.findManyByArtist(id)
	}
}
