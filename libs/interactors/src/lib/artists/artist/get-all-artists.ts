import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { BaseUsecase } from "../../../assets"
import { GetAllArtistsDTO, ResponseDTO } from "Dto"

export class GetAllArtistsUsecase extends BaseUsecase<GetAllArtistsDTO, ResponseDTO<Artist[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetAllArtistsDTO): Promise<ResponseDTO<Artist[]>> {
		return await this.service.artist.getAll(inputs)
	}
}
