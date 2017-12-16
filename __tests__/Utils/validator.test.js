import Validator, { ValidationType } from "../../src/Utils/Validator";

describe('Validator', () => {

    let validator,
        validationType;

    beforeAll(() => {
        validator = new Validator();
    });

    it('can check if input not null or undefined', () => {
        let testValues = [{
                valueToTest: null,
                shouldExpect: false
            },
            {
                valueToTest: undefined,
                shouldExpect: false
            },
            {
                valueToTest: "",
                shouldExpect: true
            },
            {
                valueToTest: "test",
                shouldExpect: true
            },
            {
                valueToTest: [],
                shouldExpect: true
            },
            {
                valueToTest: {},
                shouldExpect: true
            }
        ];

        validationType = ValidationType.NotNullOrUndefined;

        for(let testValue of testValues) {
            let input = testValue.valueToTest,
                result = validator.isValid(input, validationType);

            if(testValue.shouldExpect) {
                if(!result) {
                    console.log('Input is not valid when it should be', input);
                }

                expect(result).toBeTruthy();
            }
            else {
                if(result) {
                    console.log('Input is valid when it should not be', input);
                }

                expect(result).toBeFalsy();
            }
        }
    });
});
