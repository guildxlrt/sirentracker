import {
	FanImplement,
	ArtistImplement,
	ReleaseImplement,
	SongImplement,
	UserConnectImplement,
	OrderImplement,
} from "./implements"

const userConnectImplement = new UserConnectImplement()
const fanImplement = new FanImplement()
const artistImplement = new ArtistImplement()
const releaseImplement = new ReleaseImplement()
const songImplement = new SongImplement()
const orderImplement = new OrderImplement()

export const databaseServices = {
	userConnect: userConnectImplement,
	fan: fanImplement,
	artist: artistImplement,
	release: releaseImplement,
	song: songImplement,
	order: orderImplement,
}

export type DatabaseServices = typeof databaseServices
