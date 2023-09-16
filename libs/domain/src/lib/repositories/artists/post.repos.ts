import { BaseReposArtistItem, BaseReposRemovableItem, InputsLayer } from "../../../assets"
import { ArtistId, Post, PostId } from "../../entities"

export abstract class PostRepository implements BaseReposArtistItem<Post>, BaseReposRemovableItem {
	abstract create(inputs: InputsLayer<unknown, boolean>): Promise<InputsLayer<unknown, boolean>>

	abstract delete(inputs: InputsLayer<PostId, unknown>): Promise<InputsLayer<PostId, unknown>>

	abstract get(inputs: InputsLayer<PostId, Post>): Promise<InputsLayer<PostId, Post>>

	abstract getAll(inputs: InputsLayer<unknown, Post[]>): Promise<InputsLayer<unknown, Post[]>>

	abstract findManyByArtist(
		inputs: InputsLayer<ArtistId, Post[]>
	): Promise<InputsLayer<ArtistId, Post[]>>
}
