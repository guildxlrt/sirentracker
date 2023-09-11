import { DatabaseServices } from "Infra-backend"

import { BaseUsecase } from "../../assets"
import { ResponseDTO } from "Dto"

export class LogoutUsecase extends BaseUsecase<void, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<ResponseDTO<unknown>> {
		return await this.service.userConnect.logout()
	}
}
