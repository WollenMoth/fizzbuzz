const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit Tests for FizzbuzzService", () => {
    test("Return Fizzbuzz if number is divisible by 3 and 5", () => {
        const number = 15;
        const validation = FizzbuzzService.applyValidationInNumber(number);

        expect(validation).toBe("FIZZBUZZ");
    });

    test("Return Fizz if number is divisible by 3", () => {
        const number = 3;
        const validation = FizzbuzzService.applyValidationInNumber(number);

        expect(validation).toBe("FIZZ");
    });

    test("Return Buzz if number is divisible by 5", () => {
        const number = 5;
        const validation = FizzbuzzService.applyValidationInNumber(number);

        expect(validation).toBe("BUZZ");
    });

    test("Return number if number is not divisible by 3 or 5", () => {
        const number = 7;
        const validation = FizzbuzzService.applyValidationInNumber(number);

        expect(validation).toBe(7);
    });

    test("Assign Fizzbuzz if score is divisible by 3 and 5", () => {
        const explorer = { score: 15 };

        FizzbuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("FIZZBUZZ");
    });

    test("Assign Fizz if score is divisible by 3", () => {
        const explorer = { score: 3 };

        FizzbuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("FIZZ");
    });

    test("Assign Buzz if score is divisible by 5", () => {
        const explorer = { score: 5 };

        FizzbuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe("BUZZ");
    });

    test("Assign score if score is not divisible by 3 or 5", () => {
        const explorer = { score: 7 };

        FizzbuzzService.applyValidationInExplorer(explorer);

        expect(explorer.trick).toBe(7);
    });
});
