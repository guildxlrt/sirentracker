import {
	FanImplement,
	ArtistImplement,
	ReleaseImplement,
	SongImplement,
	UserAuthImplement,
	OrderImplement,
	AdminImplement,
	PostImplement,
	CommentImplement,
} from "./implements"

const adminImplement = new AdminImplement()
const artistImplement = new ArtistImplement()
const releaseImplement = new ReleaseImplement()
const songImplement = new SongImplement()
const postImplement = new PostImplement()
const fanImplement = new FanImplement()
const orderImplement = new OrderImplement()
const userAuthImplement = new UserAuthImplement()
const commentImplement = new CommentImplement()

export const databaseServices = {
	admin: adminImplement,
	artist: artistImplement,
	release: releaseImplement,
	song: songImplement,
	post: postImplement,
	fan: fanImplement,
	order: orderImplement,
	userAuth: userAuthImplement,
	comment: commentImplement,
}

export type DatabaseServices = typeof databaseServices
