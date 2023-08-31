import { DatabaseServices } from "Infra-backend"
import { ModifyArtistDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class ModifyArtistUsecase extends BaseUsecase<ModifyArtistDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: ModifyArtistDTO): Promise<boolean> {
		return await this.service.artist.modify(params)
	}
}
