import { Fan } from "../entities"

export interface FanRepository {
	create(data: any): Promise<boolean>

	modify(data: any): Promise<boolean>

	getById(id: number): Promise<Fan>

	getByEmail(id: string): Promise<Fan>
}
