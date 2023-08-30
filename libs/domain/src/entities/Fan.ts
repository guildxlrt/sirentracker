export class Fan {
	id: number
	email: string
	name: string
	bio: string
	avatarUrl: string

	constructor(id: number, email: string, name: string, bio: string, avatarUrl: string) {
		this.id = id
		this.email = email
		this.name = name
		this.bio = bio
		this.avatarUrl = avatarUrl
	}
}
