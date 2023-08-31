import { DataServices } from "Infra-backend"
import { ModifyArtistDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class ModifyArtistUsecase implements BaseUsecase<ModifyArtistDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: ModifyArtistDTO): Promise<boolean> {
		return await this.service.artist.modify(params)
	}
}
