import { DataServices } from "Infra-backend"
import { ReleaseIdDTO } from "Dto"
import { Release } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class GetReleaseUsecase implements BaseUsecase<ReleaseIdDTO, Release> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(id: ReleaseIdDTO): Promise<Release> {
		return await this.service.release.get(id)
	}
}
