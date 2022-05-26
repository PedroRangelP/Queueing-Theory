const isNotNegative = (value) => {
    if (Number(value) < 0) return validation(false, 'Please enter positive numbers')

    return validation()
}

const isValidInput = (value) => {
    if (value.trim() === '') return validation(false, 'Required field')

    return isNotNegative(value)
}

const isInteger = (value) => {
    if (!Number.isInteger(Number(value))) return validation(false, 'Must be an integer')

    return isValidInput(value)
}

const isValidLambdaMu = (mu, lambda) => {
    if (lambda !== '' && mu !== '')
        if (Number(lambda) >= Number(mu)) return validation(false, 'Must be greater than (λ)')

    return isValidInput(mu)
}

const isValidLambdaMuS = (s, mu, lambda) => {
    console.log((Number(s) * Number(mu)) >= Number(lambda))
    if (s !== '' && lambda !== '' && mu !== '')
        if ((Number(s) * Number(mu)) <= Number(lambda)) return validation(false, '(s*μ) must be greater than (λ)')

    return isValidInput(s)
}

const isValidSK = (K, s) => {
    if (s !== '' && K !== '')
        if (Number(s) >= Number(K)) return validation(false, "Must be greater than (s)")

    return isValidInput(K)
}

const validation = (isValid=true, msg='') => {
    return { isValid: isValid, msg: msg }
}

export {
    isNotNegative,
    isValidInput,
    isInteger,
    isValidLambdaMu,
    isValidLambdaMuS,
    isValidSK
}