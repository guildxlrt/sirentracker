import { FanImplementation } from "./fan.impl"
import { ArtistImplementation } from "./artist.impl"
import { ReleaseImplementation } from "./release.impl"
import { SongImplementation } from "./song.impl"

const fanImplementation = new FanImplementation()
const artistImplementation = new ArtistImplementation()
const releaseImplementation = new ReleaseImplementation()
const songImplementation = new SongImplementation()

export const dataServices = {
	fan: fanImplementation,
	artist: artistImplementation,
	release: releaseImplementation,
	song: songImplementation,
}

export type DataServices = typeof dataServices
