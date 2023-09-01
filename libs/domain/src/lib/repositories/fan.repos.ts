import { BaseReposResponse, BaseReposUser } from "../../assets"
import { Fan, FanId, UserConnectEmail } from "../entities"

export abstract class FanRepository implements BaseReposUser<Fan> {
	abstract create(data: any): Promise<BaseReposResponse<boolean>>

	abstract modify(data: any): Promise<BaseReposResponse<boolean>>

	abstract getById(id: FanId): Promise<BaseReposResponse<Fan>>

	abstract getByEmail(email: UserConnectEmail): Promise<BaseReposResponse<Fan>>
}
