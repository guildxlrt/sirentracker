export class ResponseDTO<T> {
	status: number
	error: string | null
	data?: T

	constructor(status: number, error: string | null, data?: T) {
		this.status = status
		this.error = error
		this.data = data
	}
}

export class VoidResDTO {
	status: number
	error: string | null

	constructor(status: number, error: string | null) {
		this.status = status
		this.error = error
	}
}
