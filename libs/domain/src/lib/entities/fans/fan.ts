import { BaseEntity } from "libs/domain/src/assets"
import { UserAuthId } from "../commons"

export class Fan extends BaseEntity {
	user_credential: UserAuthId
	name: string
	bio: string
	avatarUrl: string | null

	constructor(
		id: number,
		createdAt: Date,
		user_credential: number,
		name: string,
		bio: string,
		avatarUrl: string | null
	) {
		super(id, createdAt)

		this.user_credential = user_credential
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
	}
}

export type FanId = Pick<Fan, "id">["id"]
