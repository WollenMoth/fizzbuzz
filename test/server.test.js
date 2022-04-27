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

    test("GET /v1/explorers/amount/:mission", async () => {
        const mission = "node";
        const res = await http.get(`/v1/explorers/amount/${mission}`);

        expect(res.status).toBe(200);
        expect(res.body.mission).toBe(mission);
        expect(res.body.quantity).toBeDefined();
    });

    test("GET /v1/explorers/usernames/:mission", async () => {
        const mission = "node";
        const res = await http.get(`/v1/explorers/usernames/${mission}`);

        expect(res.status).toBe(200);
        expect(res.body.mission).toBe(mission);
        expect(res.body.explorers.length).toBeDefined();
    });

    test("GET /v1/fizzbuzz/:score", async () => {
        const score = 15;
        const res = await http.get(`/v1/fizzbuzz/${score}`);

        expect(res.status).toBe(200);
        expect(res.body.score).toBe(score);
        expect(res.body.trick).toBe("FIZZBUZZ");
    });
});
