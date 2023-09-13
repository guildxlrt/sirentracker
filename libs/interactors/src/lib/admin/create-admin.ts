import { DatabaseServices } from "Infra-backend"
import { CleanNewAdminDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateAdminUsecase extends BaseUsecase<CleanNewAdminDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CleanNewAdminDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.admin.create(params)
	}
}
