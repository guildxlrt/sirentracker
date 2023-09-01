import { DatabaseServices } from "Infra-backend"
import { CreateArtistDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateArtistUsecase extends BaseUsecase<CreateArtistDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateArtistDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.artist.create(params)
	}
}
