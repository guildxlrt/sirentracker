import { Fan, FanRepository } from "Domain"
import { FanIdDTO, CreateFanDTO, ModifyFanDTO, EmailDTO } from "Dto"

export class FanImplement implements FanRepository {
	async create(params: CreateFanDTO): Promise<boolean> {
		return true
	}

	async modify(params: ModifyFanDTO): Promise<boolean> {
		return false
	}

	async getById(id: FanIdDTO): Promise<Fan> {
		const dbRes: any = {}

		return dbRes
	}

	async getByEmail(email: EmailDTO): Promise<Fan> {
		const dbRes: any = {}

		return dbRes
	}
}
