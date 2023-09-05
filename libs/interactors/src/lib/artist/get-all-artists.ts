import { DatabaseServices } from "Infra-backend"
import { Artist } from "Domain"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class GetAllArtistsUsecase extends BaseUsecase<void, ResponseDTO<Artist[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<ResponseDTO<Artist[]>> {
		return await this.service.artist.getAll()
	}
}
