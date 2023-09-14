import { DatabaseServices } from "Infra-backend"
import { CreateAdminDTO, ResponseDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateAdminUsecase extends BaseUsecase<CreateAdminDTO, ResponseDTO<boolean>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateAdminDTO): Promise<ResponseDTO<boolean>> {
		return await this.service.admin.create(params)
	}
}
