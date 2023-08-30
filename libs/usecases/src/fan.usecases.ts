import { DataServices } from "Infra-backend"
import { FanIdDTO, CreateFanDTO, ModifyFanDTO, FanEmailDTO } from "Dto"
import { Fan, FanRepository } from "Domain"

export class FanUsecases implements FanRepository {
	private readonly service: DataServices

	constructor(service: DataServices) {
		this.service = service
	}

	async create(data: CreateFanDTO): Promise<boolean> {
		return await this.service.fan.create(data)
	}

	async getById(id: FanIdDTO): Promise<Fan | null> {
		return await this.service.fan.getById(id)
	}

	async getByEmail(email: FanEmailDTO): Promise<Fan | null> {
		return await this.service.fan.getByEmail(email)
	}

	async modify(data: ModifyFanDTO): Promise<boolean> {
		return await this.service.fan.modify(data)
	}

	async delete(data: FanIdDTO): Promise<boolean> {
		return await this.service.fan.delete(data)
	}
}
