import { DatabaseServices } from "Infra-backend"
import { ResponseDTO, UserConnectDTO } from "Dto"
import { BaseUsecase } from "../../assets"

export class LoginUsecase extends BaseUsecase<UserConnectDTO, ResponseDTO<Credential>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: UserConnectDTO): Promise<ResponseDTO<Credential>> {
		return await this.service.userConnect.login(params)
	}
}
