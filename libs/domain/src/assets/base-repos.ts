import { GenreType } from "Shared-utils"

export interface BaseReposUser<T> {
	create(data: unknown): Promise<IResponse<boolean>>

	modify(data: unknown): Promise<IResponse<boolean>>

	getById(id: number): Promise<IResponse<T>>

	getByEmail(id: string): Promise<IResponse<T>>
}

export interface BaseReposSearch<T> {
	fetchAll(): Promise<IResponse<T[]>>

	findManyByGenre(genre: GenreType): Promise<IResponse<T[]>>
}

export interface IResponse<T> {
	status: number
	error: string | null
	data?: T
}
