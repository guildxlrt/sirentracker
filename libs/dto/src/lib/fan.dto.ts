import { Fan } from "Domain"

type NewData = Omit<Fan, "id" | "avatarUrl">
type FanData = Omit<Fan, "avatarUrl">
type Updates = Partial<Omit<Fan, "id" | "avatarUrl">>

export interface CreateFanDTO {
	data: NewData
	avatar?: File
}

export interface ModifyFanDTO {
	data: FanData
	updates: Updates
	avatar?: File
}

export type FanIdDTO = Pick<Fan, "id">["id"]
