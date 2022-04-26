const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");

const explorersInNode = ExplorerService.filterByMission(explorers, "node");
console.log(explorersInNode);
const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(
    explorers,
    "node"
);
console.log(amountOfExplorersInNode);
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(
    explorers,
    "node"
);
console.log(usernamesInNode);

const explorer1 = { name: "Explorer1", score: 1 };
FizzbuzzService.applyValidationInExplorer(explorer1);

const explorer3 = { name: "Explorer3", score: 3 };
FizzbuzzService.applyValidationInExplorer(explorer3);

const explorer5 = { name: "Explorer5", score: 5 };
FizzbuzzService.applyValidationInExplorer(explorer5);

const explorer15 = { name: "Explorer15", score: 15 };
FizzbuzzService.applyValidationInExplorer(explorer15);
