import { DatabaseServices } from "Infra-backend"
import { ReleaseIdDTO, ResponseDTO } from "Dto"
import { Release } from "Domain"
import { BaseUsecase } from "../../../assets"

export class GetReleaseUsecase extends BaseUsecase<ReleaseIdDTO, ResponseDTO<Release>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(id: ReleaseIdDTO): Promise<ResponseDTO<Release>> {
		return await this.service.release.get(id)
	}
}
