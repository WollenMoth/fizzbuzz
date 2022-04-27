const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "FizzBuzz API Welcome!" });
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorers = ExplorerController.getExplorersByMission(mission);
    res.status(200).json(explorers);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const quantity = ExplorerController.getExplorersAmountByMission(mission);
    res.status(200).json({ mission, quantity });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorers =
        ExplorerController.getExplorersUsernamesByMission(mission);
    res.status(200).json({ mission, explorers });
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = Number(req.params.score);
    const trick = ExplorerController.getValidation(score);
    res.status(200).json({ score, trick });
});

module.exports = app;
