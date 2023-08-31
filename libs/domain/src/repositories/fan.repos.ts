import { BaseRepositoryUser } from "../base-repos"
import { Fan, FanId, UserConnectEmail } from "../entities"

export abstract class FanRepository implements BaseRepositoryUser<Fan> {
	abstract create(data: any): Promise<boolean>

	abstract modify(data: any): Promise<boolean>

	abstract getById(id: FanId): Promise<Fan>

	abstract getByEmail(email: UserConnectEmail): Promise<Fan>
}
