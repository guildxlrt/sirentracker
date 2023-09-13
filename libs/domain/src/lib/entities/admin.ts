import { BaseEntity } from "../../assets"

export class Admin extends BaseEntity {
	name: string

	constructor(id: number, createdAt: Date, name: string) {
		super(id, createdAt)
		this.name = name
	}
}

export type AdminId = Pick<Admin, "id">["id"]
