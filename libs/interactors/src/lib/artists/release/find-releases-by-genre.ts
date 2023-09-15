import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../../../assets"
import { FindReleasesByGenreDTO, ResponseDTO } from "Dto"

export class FindReleasesByGenreUsecase extends BaseUsecase<
	FindReleasesByGenreDTO,
	ResponseDTO<Release[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(genre: FindReleasesByGenreDTO): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.findManyByGenre(genre)
	}
}
