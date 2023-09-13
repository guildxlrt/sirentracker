import { IResponse } from "../../assets"

export abstract class UserAuthRepository {
	abstract signUp(params: any): Promise<IResponse<number>>

	abstract login(params: any): Promise<IResponse<Credential>>

	abstract logout(): Promise<IResponse<unknown>>

	abstract changeEmail(params: any): Promise<IResponse<boolean>>

	abstract changePass(params: any): Promise<IResponse<boolean>>
}
