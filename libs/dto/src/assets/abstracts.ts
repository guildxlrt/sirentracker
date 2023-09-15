export abstract class BasicDTO<D, S> {
	data: D
	storage?: S
	error?: string

	constructor(data: D) {
		this.data = data
		this.storage = undefined
		this.error = undefined
	}
}

export abstract class NewUserMethods {
	validAuths(): void {}
	verifyImgFormat(): void {}
}

export abstract class UserMethods {
	verifyImgFormat(): void {}
}
