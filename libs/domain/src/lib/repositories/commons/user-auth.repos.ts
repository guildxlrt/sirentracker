import { IResponse, InputsLayer } from "../../../assets"

export abstract class UserAuthRepository {
	abstract login(inputs: InputsLayer<unknown, Credential>): Promise<IResponse<Credential>>

	abstract logout(inputs: InputsLayer<unknown, unknown>): Promise<IResponse<unknown>>

	abstract changeEmail(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	abstract changePass(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>
}
