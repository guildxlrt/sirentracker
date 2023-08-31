import { DatabaseServices } from "Infra-backend"
import { UserConnectDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class LoginUsecase extends BaseUsecase<UserConnectDTO, Credential> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(params: UserConnectDTO): Promise<Credential> {
		return await this.service.userConnect.login(params)
	}
}
