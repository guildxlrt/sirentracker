import { BaseEntity } from "../base-entity"

export class UserConnect extends BaseEntity {
	email: string
	password: string

	constructor(id: number, createdAt: Date, updatedAt: Date, email: string, password: string) {
		super(id, createdAt, updatedAt)

		this.email = email
		this.password = password
	}
}

export type UserCredId = Pick<UserConnect, "id">["id"]
