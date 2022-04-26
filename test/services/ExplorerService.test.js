const ExplorerService = require("../../lib/services/ExplorerService.js");

describe("Unit Tests for ExplorerService", () => {
    const explorers = [
        { githubUsername: "wollenmoth", mission: "node" },
        { githubUsername: "fer", mission: "java" },
        { githubUsername: "carlo", mission: "node" },
    ];

    test("Filter explorers by mission", () => {
        const filteredExplorers = ExplorerService.filterByMission(
            explorers,
            "node"
        );
        expect(filteredExplorers).toStrictEqual([
            { githubUsername: "wollenmoth", mission: "node" },
            { githubUsername: "carlo", mission: "node" },
        ]);
    });

    test("Get amount of explorers by mission", () => {
        const amountOfExplorers = ExplorerService.getAmountOfExplorersByMission(
            explorers,
            "node"
        );
        expect(amountOfExplorers).toBe(2);
    });

    test("Get explorers usernames by mission", () => {
        const usernames = ExplorerService.getExplorersUsernamesByMission(
            explorers,
            "node"
        );
        expect(usernames).toStrictEqual(["wollenmoth", "carlo"]);
    });
});
