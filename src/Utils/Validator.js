let ValidationType = {
    NotNullOrUndefined: 0,
    NotNullOrEmpty: 1,
    IsString: 2,
    IsNumber: 3,
    IsArray: 4,
    IsObject: 5,
    MinLength: 6,
    MaxLength: 7
}

class Validator {

    constructor(validationType, args) {
        this.validationType = validationType;
        this.args = args;
    }

    isValid(input, validationType = this.validationType) {

        switch(validationType) {
            case ValidationType.NotNullOrUndefined:
                return this.computeNotNullOrUndefined(input);

            case ValidationType.NotNullOrEmpty:
                return this.computeNotNullOrEmpty(input);

            case ValidationType.MaxLength:
                return this.computeMaxLength(input);

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

    computeMinLength(input) {

    }

    computeMaxLength(input) {
        return input.length <= this.args
    }
}

export default Validator;

export {
    ValidationType
}
