import { Fan, FanRepository } from "Domain"
import { FanIdDTO, CreateFanDTO, ModifyFanDTO, EmailDTO } from "Dto"

export class FanImplement implements FanRepository {
	async create(params: CreateFanDTO): Promise<boolean> {
		return true
	}

	async getById(params: FanIdDTO): Promise<Fan> {
		const dbRes: any = {}

		return dbRes
	}

	async getByEmail(params: EmailDTO): Promise<Fan> {
		const dbRes: any = {}

		return dbRes
	}

	async modify(params: ModifyFanDTO): Promise<boolean> {
		return false
	}
}
