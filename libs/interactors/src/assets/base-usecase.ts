import { DatabaseServices } from "Infra-backend"

export abstract class BaseUsecase<Input, Output> {
	readonly service: DatabaseServices

	constructor(service: DatabaseServices) {
		this.service = service
	}

	abstract execute(input: Input): Promise<Output>
}
