import { GenreType } from "Shared-utils"

export interface InputsLayer<D, S> {
	readonly data: D
	storage?: S
	error?: string
}

export interface BaseReposUser<T> {
	create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	modify(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	getById(inputs: InputsLayer<number, T>): Promise<IResponse<T>>

	getByEmail(inputs: InputsLayer<string, T>): Promise<IResponse<T>>
}

export interface BaseReposArtistItem<T> {
	get(inputs: InputsLayer<number, T>): Promise<IResponse<T>>

	getAll(inputs: InputsLayer<unknown, T[]>): Promise<IResponse<T[]>>

	findManyByArtist(inputs: InputsLayer<number, T[]>): Promise<IResponse<T[]>>
}

export interface BaseReposGenred<T> {
	getAll(inputs: InputsLayer<unknown, T[]>): Promise<IResponse<T[]>>

	findManyByGenre(inputs: InputsLayer<GenreType, T[]>): Promise<IResponse<T[]>>
}

export interface BaseReposRemovableItem {
	create(inputs: InputsLayer<unknown, boolean>): Promise<IResponse<boolean>>

	delete(inputs: InputsLayer<number, unknown>): Promise<IResponse<unknown>>
}

export interface IResponse<T> {
	status: number
	error: string | null
	data?: T
}
