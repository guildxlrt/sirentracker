export interface IError {
	readonly name: string
	readonly message: string
	readonly stack: string | unknown
}

export class AppError implements IError {
	readonly location: string
	readonly name: string
	readonly message: string
	readonly stack: string | unknown

	constructor(error: any, location: string) {
		this.location = `Error in ${location}`
		this.name = error.name
		this.message = error.message
		this.stack = error.stack
	}
}
