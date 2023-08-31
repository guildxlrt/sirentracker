import { DataServices } from "Infra-backend"
import { CreateArtistDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class CreateArtistUsecase implements BaseUsecase<CreateArtistDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: CreateArtistDTO): Promise<boolean> {
		return await this.service.artist.create(params)
	}
}
