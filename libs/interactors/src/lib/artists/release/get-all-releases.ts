import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../../../assets"
import { GetAllReleasesDTO, ResponseDTO } from "Dto"

export class GetAllReleasesUsecase extends BaseUsecase<GetAllReleasesDTO, ResponseDTO<Release[]>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetAllReleasesDTO): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.getAll(inputs)
	}
}
