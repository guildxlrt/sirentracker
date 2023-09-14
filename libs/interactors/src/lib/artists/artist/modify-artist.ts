import { DatabaseServices } from "Infra-backend"
import { CleanArtistDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ModifyArtistUsecase extends BaseUsecase<CleanArtistDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanArtistDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.artist.modify(params)
	}
}
