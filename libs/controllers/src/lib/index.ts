import { ArtistsController } from "./artist.controller"
import { FanController } from "./fan.controller"
import { OrderController } from "./order.controller"
import { ReleaseController } from "./release.controller"
import { SongsController } from "./song.controller"
import { UserAuthController } from "./user-auth.controller"

const userAuthController = new UserAuthController()
const artistController = new ArtistsController()
const fanController = new FanController()
const releaseController = new ReleaseController()
const songsController = new SongsController()
const orderController = new OrderController()

export const controllers = {
	userAuth: userAuthController,
	artist: artistController,
	fan: fanController,
	release: releaseController,
	song: songsController,
	order: orderController,
}
