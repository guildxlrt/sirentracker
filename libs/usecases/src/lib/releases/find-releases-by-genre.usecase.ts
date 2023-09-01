import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { GenreType } from "Shared-utils"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class FindReleasesByGenreUsecase extends BaseUsecase<GenreType, ResponseDTO<Release[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(genre: GenreType): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.findManyByGenre(genre)
	}
}
