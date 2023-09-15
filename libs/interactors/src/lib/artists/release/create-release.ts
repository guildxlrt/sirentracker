import { DatabaseServices } from "Infra-backend"
import { CreateReleaseDTO, ResponseDTO } from "Dto"

import { BaseUsecase } from "../../../assets"

export class CreateReleaseUsecase extends BaseUsecase<CreateReleaseDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateReleaseDTO): Promise<ResponseDTO<boolean>> {
		const validCover: boolean = params.coverIsValid()
		const validSongs: boolean = params.songsAreValid()

		if (validCover && validSongs) return await this.service.release.create(params)
		else throw Error("invalid datas")
	}
}
