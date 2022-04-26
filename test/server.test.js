const request = require("supertest");
const app = require("../lib/server");
const http = request(app);

describe("Unit Tests for server", () => {
    test("GET /", async () => {
        const res = await http.get("/");

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/welcome/i);
    });

    test("GET /v1/explorers/:mission", async () => {
        const mission = "node";
        const res = await http.get(`/v1/explorers/${mission}`);

        expect(res.status).toBe(200);
        expect(
            res.body.every((explorer) => explorer.mission === mission)
        ).toBeTruthy();
    });
});
