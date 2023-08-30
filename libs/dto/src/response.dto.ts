export class ResponseDTO {
	status: number
	error: string | null
	data?: unknown | unknown[]

	constructor(status: number, error: string | null, data?: unknown | unknown[]) {
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
