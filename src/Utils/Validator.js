let ValidationType = {
    NotNullOrUndefined: 0,
    NotNullOrEmpty: 1,
    IsString: 2,
    IsNumber: 3,
    IsArray: 4,
    IsObject: 5,
}

class Validator {

    constructor(validationType) {
        this.validationType = validationType;
    }

    isValid(input, validationType = this.validationType) {

        switch(validationType) {
            case ValidationType.NotNullOrUndefined:
                return this.computeNotNullOrUndefined(input);

            case ValidationType.NotNullOrEmpty:
                return this.computeNotNullOrEmpty(input);

            default:
                return false;
        }

    }

    computeNotNullOrUndefined(input) {
        return input != null;
    }

    computeNotNullOrEmpty(input) {

        let typeOfInput = typeof(input),
            isNotNull = this.computeNotNullOrUndefined(),
            convertedInput;

        if(typeOfInput === "string" || Array.isArray(input)) {
            convertedInput = input;
        }
        else if(typeOfInput === "object" && isNotNull) {
            convertedInput = Object.keys(input);
        }

        return isNotNull || input.length != 0;
    }
}

export default Validator;

export {
    ValidationType
}
