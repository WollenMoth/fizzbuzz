const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController", () => {
    test("Get explorers by mission", () => {
        const filteredExplorers =
            ExplorerController.getExplorersByMission("node");

        expect(filteredExplorers).toBeDefined();
        expect(
            filteredExplorers.every((explorer) => explorer.mission === "node")
        ).toBeTruthy();
    });

    test("Get amount of explorers by mission", () => {
        const amountOfExplorers =
            ExplorerController.getExplorersAmountByMission("node");

        expect(amountOfExplorers).toBeDefined();
    });

    test("Get explorers usernames by mission", () => {
        const usernames =
            ExplorerController.getExplorersUsernamesByMission("python");

        expect(usernames.length).toBeDefined();
    });
});
