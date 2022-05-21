const isNotNegative = (value) => {
    if (Number(value) < 0) return validation(false, 'Please enter positive numbers')

    return validation()
}

const isValidInput = (value) => {
    if (value.trim() === '') return validation(false, 'Fill this field')

    return isNotNegative(value)
}

const isInteger = (value) => {
    if (!Number.isInteger(Number(value))) return validation(false, 'Must be an integer')

    return isValidInput(value)
}

const validation = (isValid=true, msg='') => {
    return { isValid: isValid, msg: msg }
}

export {
    isNotNegative,
    isValidInput,
    isInteger,
}