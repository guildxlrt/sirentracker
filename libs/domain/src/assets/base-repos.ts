import { GenreType } from "Shared-utils"

export interface BaseReposUser<T> {
	create(data: unknown): Promise<BaseReposResponse<boolean>>

	modify(data: unknown): Promise<BaseReposResponse<boolean>>

	getById(id: number): Promise<BaseReposResponse<T>>

	getByEmail(id: string): Promise<BaseReposResponse<T>>
}

export interface BaseReposSearch<T> {
	fetchAll(): Promise<BaseReposResponse<T[]>>

	findManyByGenre(genre: GenreType): Promise<BaseReposResponse<T[]>>
}

export interface BaseReposResponse<T> {
	status: number
	error: string | null
	data?: T
}
