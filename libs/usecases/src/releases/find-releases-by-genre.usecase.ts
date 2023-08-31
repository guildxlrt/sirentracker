import { DataServices } from "Infra-backend"
import { Release } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../base-usecase"

export class FindReleasesByGenreUsecase implements BaseUsecase<GenreType, Release[]> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(genre: GenreType): Promise<Release[]> {
		return await this.service.release.findManyByGenre(genre)
	}
}
