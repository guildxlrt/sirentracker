import { BaseEntity } from "../../assets"

export class UserConnect extends BaseEntity {
	email: string
	password: string

	constructor(id: number, createdAt: Date, updatedAt: Date, email: string, password: string) {
		super(id, createdAt, updatedAt)

		this.email = email
		this.password = password
	}
}

export type UserConnectId = Pick<UserConnect, "id">["id"]
export type UserConnectEmail = Pick<UserConnect, "email">["email"]
