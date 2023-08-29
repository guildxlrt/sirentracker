import { infraBackend } from "./infra-backend"

describe("infraBackend", () => {
	it("should work", () => {
		expect(infraBackend()).toEqual("infra-backend")
	})
})
