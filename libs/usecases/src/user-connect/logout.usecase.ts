import { DataServices } from "Infra-backend"

import { BaseUsecase } from "../base-usecase"

export class LogoutUsecase implements BaseUsecase<void, void> {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async execute(): Promise<void> {
		return await this.service.userConnect.logout()
	}
}
