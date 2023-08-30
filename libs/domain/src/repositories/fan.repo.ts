import { Fan } from "../entities"

export interface FanRepository {
	create(data: any): Promise<boolean>

	getById(id: number): Promise<Fan | null>

	getByEmail(id: string): Promise<Fan | null>

	modify(data: any): Promise<boolean>

	delete(id: number): Promise<boolean>
}
