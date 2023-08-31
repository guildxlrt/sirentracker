import { DatabaseServices } from "Infra-backend"

import { BaseUsecase } from "../base-usecase"

export class LogoutUsecase extends BaseUsecase<void, void> {
	constructor(service: DatabaseServices) {
		super(service)
	}

	async execute(): Promise<void> {
		return await this.service.userConnect.logout()
	}
}
