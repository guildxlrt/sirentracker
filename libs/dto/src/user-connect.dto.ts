import { UserConnect } from "Domain"

export type EmailDTO = string

export type UserConnectDTO = Omit<UserConnect, "id">

export type SignupCleanDTO = Pick<UserConnect, "email" | "password">
export interface SignupUncleanDTO {
	email: {
		field: string
		confirm: string
	}
	password: {
		field: string
		confirm: string
	}
}

export type EmailCleanDTO = string
export interface EmailUncleanDTO {
	email: string
	confirm: string
}

export type PassCleanDTO = string
export interface PassUncleanDTO {
	password: string
	confirm: string
}
