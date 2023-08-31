export interface UserConnectRepository {
	signup(params: any): Promise<boolean>

	login(params: any): Promise<Credential>

	logout(): Promise<void>

	emailUpdate(params: any): Promise<boolean>

	passUpdate(params: any): Promise<boolean>
}
