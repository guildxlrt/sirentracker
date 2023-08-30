import { Fan, FanRepository } from "Domain"
import { FanIdDTO, CreateFanDTO, ModifyFanDTO, FanEmailDTO } from "Dto"

export class FanImplementation implements FanRepository {
	async create(params: CreateFanDTO): Promise<boolean> {
		return true
	}

	async getById(params: FanIdDTO): Promise<Fan | null> {
		return null
	}

	async getByEmail(params: FanEmailDTO): Promise<Fan | null> {
		return null
	}

	async modify(params: ModifyFanDTO): Promise<boolean> {
		return false
	}

	async delete(params: FanIdDTO): Promise<boolean> {
		return true
	}
}
