import { Fan } from "Domain"

type FanData = Omit<Fan, "avatarUrl">
type Updates = Partial<Omit<Fan, "id" | "avatarUrl">>

export interface ModifyFanDTO {
	data: FanData
	updates: Updates
	avatar?: File
}

export type FanIdDTO = Pick<Fan, "id">["id"]
