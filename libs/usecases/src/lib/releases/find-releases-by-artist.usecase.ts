import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../../assets"
import { ArtistIdDTO, ResponseDTO } from "Dto"

export class FindReleasesByArtistUsecase extends BaseUsecase<ArtistIdDTO, ResponseDTO<Release[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ArtistIdDTO): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.findManyByArtist(id)
	}
}
