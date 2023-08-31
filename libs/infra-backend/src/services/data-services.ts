import {
	FanImplement,
	ArtistImplement,
	ReleaseImplement,
	SongImplement,
	UserConnectImplement,
} from "./implements"

const fanImplement = new FanImplement()
const artistImplement = new ArtistImplement()
const releaseImplement = new ReleaseImplement()
const songImplement = new SongImplement()
const userConnectImplement = new UserConnectImplement()

export const dataServices = {
	userConnect: userConnectImplement,
	fan: fanImplement,
	artist: artistImplement,
	release: releaseImplement,
	song: songImplement,
}

export type DataServices = typeof dataServices
