import { AdminController } from "./admins"
import { ArtistsController, PostController, ReleaseController, SongController } from "./artists"
import { CommentController, UserAuthController } from "./commons"
import { FanController, OrderController } from "./fans"

const adminController = new AdminController()
const artistController = new ArtistsController()
const releaseController = new ReleaseController()
const songController = new SongController()
const postController = new PostController()
const fanController = new FanController()
const orderController = new OrderController()
const userAuthController = new UserAuthController()
const commentController = new CommentController()

export const controllers = {
	admin: adminController,
	artist: artistController,
	release: releaseController,
	song: songController,
	post: postController,
	fan: fanController,
	order: orderController,
	userAuth: userAuthController,
	comment: commentController,
}
