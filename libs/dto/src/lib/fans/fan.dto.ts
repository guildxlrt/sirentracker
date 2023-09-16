import { Fan, FanId } from "Domain"
import { BasicDTO, NewUserMethods, UserMethods } from "../../assets"
import validator from "validator"
import { ErrorMsg } from "Shared-utils"
import { UserEmail } from "../commons"

export type FanIdDTO = Pick<Fan, "id">["id"]

// CREATE FAN
interface INewFanData {
	email: string
	password: string
	confirmEmail: string
	confirmPass: string

	name: string
	bio: string
	avatar?: File
}

export class CreateFanDTO extends BasicDTO<INewFanData, boolean> implements NewUserMethods {
	validAuths(): void {
		const { email, password, confirmEmail, confirmPass } = this.data

		const validEmail = validator.isEmail(email)
		const validPass = validator.isStrongPassword(password)

		if (!validEmail) throw new ErrorMsg(400, "invalid email format")

		if (email !== confirmEmail) throw new ErrorMsg(400, "emails don't match")

		if (validPass) throw new ErrorMsg(400, "weak Password")
		if (password !== confirmPass) throw new ErrorMsg(400, "passwords don't match")
		else return
	}

	verifyImgFormat(): void {
		const { avatar } = this.data

		console.log(avatar)

		return
	}
}

// MODIFY FAN
interface FanData {
	name: string
	bio: string
	avatar?: File | null
}
interface IFanData {
	user: FanData
	storage: boolean
}

export class ModifyFanDTO extends BasicDTO<IFanData, boolean> implements UserMethods {
	verifyImgFormat(): void {
		const { avatar } = this.data.user

		console.log(avatar)

		return
	}
}

// FAN BY ID
export class GetFanByIdDTO extends BasicDTO<FanId, Fan> {}

// FAN BY EMAIL
export class GetFanByEmailDTO extends BasicDTO<UserEmail, Fan> {}
