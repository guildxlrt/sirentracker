import { BaseEntity } from "../../assets"
import { UserConnectId } from "./user-connect"

export class Fan extends BaseEntity {
	user_credential: UserConnectId
	name: string
	bio: string
	avatarUrl: string

	constructor(
		id: number,
		createdAt: Date,
		updatedAt: Date,
		user_credential: number,
		name: string,
		bio: string,
		avatarUrl: string
	) {
		super(id, createdAt, updatedAt)

		this.user_credential = user_credential
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
	}
}

export type FanId = Pick<Fan, "id">["id"]
