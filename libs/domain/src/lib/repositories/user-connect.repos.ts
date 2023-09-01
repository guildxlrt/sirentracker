import { BaseReposResponse } from "../../assets"

export abstract class UserConnectRepository {
	abstract signup(params: any): Promise<BaseReposResponse<boolean>>

	abstract login(params: any): Promise<BaseReposResponse<Credential>>

	abstract logout(): Promise<BaseReposResponse<unknown>>

	abstract changeEmail(params: any): Promise<BaseReposResponse<boolean>>

	abstract changePass(params: any): Promise<BaseReposResponse<boolean>>
}
