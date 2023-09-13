import { DatabaseServices } from "Infra-backend"
import { CleanNewArtistDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateArtistUsecase extends BaseUsecase<CleanNewArtistDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanNewArtistDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.artist.create(params)
	}
}
