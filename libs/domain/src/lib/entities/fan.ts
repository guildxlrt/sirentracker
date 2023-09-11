import { BaseEntity } from "../../assets"
import { UserConnectId } from "./user-auth"

export class Fan extends BaseEntity {
	user_credential: UserConnectId
	name: string
	bio: string
	avatarUrl: string

	constructor(
		id: number,
		createdAt: Date,
		user_credential: number,
		name: string,
		bio: string,
		avatarUrl: string
	) {
		super(id, createdAt)

		this.user_credential = user_credential
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
	}
}

export type FanId = Pick<Fan, "id">["id"]
