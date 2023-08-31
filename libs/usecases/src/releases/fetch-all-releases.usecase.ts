import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../base-usecase"

export class FetchAllReleasesUsecase extends BaseUsecase<void, Release[]> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<Release[]> {
		return await this.service.release.getAll()
	}
}
