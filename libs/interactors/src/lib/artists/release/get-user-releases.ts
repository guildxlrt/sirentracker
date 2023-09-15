import { DatabaseServices } from "Infra-backend"
import { Release } from "Domain"
import { BaseUsecase } from "../../../assets"
import { GetUserReleasesDTO, ResponseDTO } from "Dto"

export class GetUserReleasesUsecase extends BaseUsecase<
	GetUserReleasesDTO,
	ResponseDTO<Release[]>
> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: GetUserReleasesDTO): Promise<ResponseDTO<Release[]>> {
		return await this.service.release.getUserReleases(inputs)
	}
}
