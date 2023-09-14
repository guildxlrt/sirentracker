import { Fan, UserAuthId } from "Domain"
import { CreateUserDTO, ModifyUserDTO } from "../commons"

type FanData = Omit<Fan, "createdAt">
type Updates = Partial<Omit<Fan, "id" | "avatarUrl">>

export type FanIdDTO = Pick<Fan, "id">["id"]

// MODIFY FAN
export interface CleanFanDTO {
	name: string
	bio: string
	avatarUrl: string | null
	error?: string
}

export class ModifyFanDTO implements ModifyUserDTO {
	user: FanData
	updates: Updates
	avatarUrl: string | null
	avatar?: File | null

	constructor(user: FanData, updates: Updates, avatar?: File | null) {
		this.user = user
		this.updates = updates
		this.avatar = avatar
		this.avatarUrl = user.avatarUrl
	}

	verifyImgFormat(): void {
		//
		//

		return
	}

	treatingUsrData(): CleanFanDTO {
		const data = {
			name: this.user.name,
			bio: this.user.bio,
			avatarUrl: this.user.avatarUrl,
		}

		const { name, bio } = this.updates
		if (name) data.name = name
		if (bio) data.bio = bio
		if (this.avatar !== undefined) data.avatarUrl = this.avatarUrl

		return data
	}
}

// CREATE FAN
export interface CleanNewFanDTO {
	user_credential: UserAuthId
	name: string
	bio: string
	avatarUrl: string | null
	error?: string
}

export class CreateFanDTO extends CreateUserDTO {
	name: string
	bio: string

	constructor(
		email: string,
		password: string,
		confirmEmail: string,
		confirmPass: string,
		name: string,
		bio: string,
		avatar?: File
	) {
		super(email, password, confirmPass, confirmEmail, avatar)

		this.name = name
		this.bio = bio

		this.user_credential = null
		this.avatarUrl = null
	}
}
