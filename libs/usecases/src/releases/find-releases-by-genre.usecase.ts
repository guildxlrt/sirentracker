import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../base-usecase"

export class FindReleasesByGenreUsecase extends BaseUsecase<GenreType, Release[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(genre: GenreType): Promise<Release[]> {
		return await this.service.release.findManyByGenre(genre)
	}
}
