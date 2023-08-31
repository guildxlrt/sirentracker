import { DatabaseServices } from "Infra-backend"
import { ReleaseIdDTO } from "Dto"
import { Release } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetReleaseUsecase extends BaseUsecase<ReleaseIdDTO, Release> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ReleaseIdDTO): Promise<Release> {
		return await this.service.release.get(id)
	}
}
