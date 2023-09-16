import { AdminRepository } from "Domain"
import { CreateAdminDTO } from "Dto"

export class AdminImplement implements AdminRepository {
	async create(inputs: CreateAdminDTO): Promise<CreateAdminDTO> {
		inputs.putInStorage(true)

		return inputs
	}
}
