const request = require("supertest");
const app = require("../lib/server");
const http = request(app);

describe("Unit Tests for server", () => {
    test("GET /", async () => {
        const res = await http.get("/");

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/welcome/i);
    });
});
