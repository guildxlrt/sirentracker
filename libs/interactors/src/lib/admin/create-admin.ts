import { DatabaseServices } from "Infra-backend"
import { CreateAdminDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class CreateAdminUsecase extends BaseUsecase<CreateAdminDTO> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: CreateAdminDTO): Promise<CreateAdminDTO> {
		return await this.service.admin.create(params)
	}
}
