import supertest from "supertest";
import app from "../..";

const request = supertest(app);

describe("Testing Resize Image API", (): void => {
    it("Endpoint: /api/processimg?name=fjord&width=500&height=500", async (): Promise<void> => {
		const response = await request.get("/api/processimg?name=fjord&width=500&height=500");
		expect(response.status).toBe(200);
	});
});