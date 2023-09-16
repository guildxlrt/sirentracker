import { FanRepository } from "Domain"
import { CreateFanDTO, GetFanByEmailDTO, ModifyFanDTO, GetFanByIdDTO } from "Dto"

export class FanImplement implements FanRepository {
	async create(inputs: CreateFanDTO): Promise<CreateFanDTO> {
		inputs.putInStorage(true)

		return inputs
	}

	async modify(inputs: ModifyFanDTO): Promise<ModifyFanDTO> {
		inputs.putInStorage(true)

		return inputs
	}

	async getById(inputs: GetFanByIdDTO): Promise<GetFanByIdDTO> {
		const dbRes: any = {}

		inputs.putInStorage(dbRes)

		return inputs
	}

	async getByEmail(inputs: GetFanByEmailDTO): Promise<GetFanByEmailDTO> {
		const dbRes: any = {}

		inputs.putInStorage(dbRes)

		return inputs
	}
}
