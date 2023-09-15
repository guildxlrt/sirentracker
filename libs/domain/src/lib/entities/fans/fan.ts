import { BaseEntity } from "libs/domain/src/assets"
import { UserAuthId } from "../commons"

export class Fan extends BaseEntity {
	user_auth_id: UserAuthId
	name: string
	bio: string
	avatarUrl: string | null

	constructor(
		id: number,
		createdAt: Date,
		user_auth_id: number,
		name: string,
		bio: string,
		avatarUrl: string | null
	) {
		super(id, createdAt)

		this.user_auth_id = user_auth_id
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
	}
}

export type FanId = Pick<Fan, "id">["id"]
