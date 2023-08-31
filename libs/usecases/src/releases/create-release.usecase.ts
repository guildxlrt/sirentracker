import { DataServices } from "Infra-backend"
import { CreateReleaseDTO } from "Dto"

import { BaseUsecase } from "../base-usecase"

export class CreateReleaseUsecase implements BaseUsecase<CreateReleaseDTO, boolean> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: CreateReleaseDTO): Promise<boolean> {
		return await this.service.release.create(params)
	}
}
