import { InputsLayer } from "Domain"

interface IError {
	status: number
	message: string
}

export abstract class BasicDTO<D, S> implements InputsLayer<D, S> {
	data: D
	storage?: S
	error?: IError

	constructor(data: D) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}

	putInStorage(storage: S): void {
		this.storage = storage
		return
	}

	putInError(status: number, message: string): void {
		this.error = { status: status, message: message }
		return
	}
}

export abstract class NewUserMethods {
	validAuths(): void {}
	verifyImgFormat(): void {}
}

export abstract class UserMethods {
	verifyImgFormat(): void {}
}
