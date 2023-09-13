import { GenreType } from "Shared-utils"

export interface BaseReposUser<T> {
	create(data: unknown): Promise<IResponse<boolean>>

	modify(data: unknown): Promise<IResponse<boolean>>

	getById(id: number): Promise<IResponse<T>>

	getByEmail(id: string): Promise<IResponse<T>>
}

export interface BaseReposArtistItem<T> {
	get(id: number): Promise<IResponse<T>>

	getAll(): Promise<IResponse<T[]>>

	findManyByArtist(id: number): Promise<IResponse<T[]>>
}

export interface BaseReposGenred<T> {
	getAll(): Promise<IResponse<T[]>>

	findManyByGenre(genre: GenreType): Promise<IResponse<T[]>>
}

export interface BaseReposRemovableItem {
	create(params: any): Promise<IResponse<boolean>>

	delete(id: number): Promise<IResponse<unknown>>
}

export interface IResponse<T> {
	status: number
	error: string | null
	data?: T
}
