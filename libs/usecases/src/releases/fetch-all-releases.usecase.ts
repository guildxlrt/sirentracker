import { DataServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class FetchAllReleasesUsecase implements BaseUsecase<void, Release[]> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(): Promise<Release[]> {
		return await this.service.release.getAll()
	}
}
