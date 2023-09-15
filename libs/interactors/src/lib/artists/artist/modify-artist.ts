import { DatabaseServices } from "Infra-backend"
import { ModifyArtistDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../../assets"

export class ModifyArtistUsecase extends BaseUsecase<ModifyArtistDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ModifyArtistDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.artist.modify(params)
	}
}
