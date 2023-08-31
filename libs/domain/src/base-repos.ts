import { GenreType } from "Shared-utils"

export interface BaseRepositoryUser<T> {
	create(data: any): Promise<boolean>

	modify(data: any): Promise<boolean>

	getById(id: number): Promise<T>

	getByEmail(id: string): Promise<T>
}

export interface BaseRepositorySearch<T> {
	getAll(): Promise<T[]>

	findManyByGenre(genre: GenreType): Promise<T[]>
}
