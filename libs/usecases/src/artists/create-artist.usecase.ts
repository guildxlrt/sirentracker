import { DatabaseServices } from "Infra-backend"
import { CreateArtistDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class CreateArtistUsecase extends BaseUsecase<CreateArtistDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateArtistDTO): Promise<boolean> {
		return await this.service.artist.create(params)
	}
}
