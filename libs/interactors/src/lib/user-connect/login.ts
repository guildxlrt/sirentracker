import { DatabaseServices } from "Infra-backend"
import { ResponseDTO, LoginDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class LoginUsecase extends BaseUsecase<LoginDTO, ResponseDTO<Credential>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: LoginDTO): Promise<ResponseDTO<Credential>> {
		return await this.service.userConnect.login(params)
	}
}
