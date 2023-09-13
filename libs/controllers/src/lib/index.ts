import { AdminController } from "./admin.controller"
import { ArtistsController } from "./artist.controller"
import { CommentController } from "./comment.controller"
import { FanController } from "./fan.controller"
import { OrderController } from "./order.controller"
import { PostController } from "./post.controller"
import { ReleaseController } from "./release.controller"
import { SongController } from "./song.controller"
import { UserAuthController } from "./user-auth.controller"

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
