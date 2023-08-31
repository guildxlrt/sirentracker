export abstract class UserConnectRepository {
	abstract signup(params: any): Promise<boolean>

	abstract login(params: any): Promise<Credential>

	abstract logout(): Promise<void>

	abstract updateEmail(params: any): Promise<boolean>

	abstract updatePass(params: any): Promise<boolean>
}
