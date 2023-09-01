import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class FetchAllReleasesUsecase extends BaseUsecase<void, ResponseDTO<Release[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.fetchAll()
	}
}
