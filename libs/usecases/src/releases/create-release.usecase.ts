import { DatabaseServices } from "Infra-backend"
import { CreateReleaseDTO } from "Dto"

import { BaseUsecase } from "../base-usecase"

export class CreateReleaseUsecase extends BaseUsecase<CreateReleaseDTO, boolean> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateReleaseDTO): Promise<boolean> {
		return await this.service.release.create(params)
	}
}
