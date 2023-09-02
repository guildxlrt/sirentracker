import { GenreType } from "Shared-utils"

export interface ParamsId {
	Params: {
		id: number
	}
}

export interface ParamsGenre {
	Params: {
		genre: GenreType
	}
}

export interface ParamsEmail {
	Params: {
		email: string
	}
}
