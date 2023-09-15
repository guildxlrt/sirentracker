import { DatabaseServices } from "Infra-backend"

import { BaseUsecase } from "../../../assets"
import { LogoutDTO, ResponseDTO } from "Dto"

export class LogoutUsecase extends BaseUsecase<LogoutDTO, ResponseDTO<unknown>> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(inputs: LogoutDTO): Promise<ResponseDTO<unknown>> {
		return await this.service.userAuth.logout(inputs)
	}
}
