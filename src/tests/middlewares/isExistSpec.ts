import supertest from "supertest";
import app from "../..";

const request = supertest(app);

describe("Testing images Existance", (): void => {

    it("Endpoint: /api/processimg?name=fjorda", async (): Promise<void> => {
		const response = await request.get("/api/processimg?name=fjorda");
		expect(response.status).toBe(400);
		expect(response.text).toBe("ERROR!! image: fjorda is not found.");
	});

});