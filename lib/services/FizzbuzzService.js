class FizzbuzzService {
    static applyValidationInNumber(number) {
        if (number % 3 === 0 && number % 5 === 0) return "FIZZBUZZ";
        else if (number % 3 === 0) return "FIZZ";
        else if (number % 5 === 0) return "BUZZ";
        else return number;
    }

    static applyValidationInExplorer(explorer) {
        const { score } = explorer;

        explorer.trick = this.applyValidationInNumber(score);
    }
}

module.exports = FizzbuzzService;
