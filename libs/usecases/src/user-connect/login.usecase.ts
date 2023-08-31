import { DataServices } from "Infra-backend"
import { UserConnectDTO } from "Dto"
import { BaseUsecase } from "../base-usecase"

export class LoginUsecase implements BaseUsecase<UserConnectDTO, Credential> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(params: UserConnectDTO): Promise<Credential> {
		return await this.service.userConnect.login(params)
	}
}
