const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader", () => {
    test("Read a JSON file", () => {
        const explorers = Reader.readJsonFile("explorers.json");

        expect(explorers.length).toBe(15);
    });
});
