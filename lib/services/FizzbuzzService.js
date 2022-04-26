class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        const { score } = explorer;

        if (score % 3 === 0 && score % 5 === 0) explorer.trick = "FIZZBUZZ";
        else if (score % 3 === 0) explorer.trick = "FIZZ";
        else if (score % 5 === 0) explorer.trick = "BUZZ";
        else explorer.trick = score;
    }
}

module.exports = FizzbuzzService;
