const isNotNegative = (value: string) => {
    if (Number(value) < 0) return validation(false, 'Please enter positive numbers')

    return validation()
}

const isValidInput = (value: string) => {
    if (value.trim() === '') return validation(false, 'Required field')

    return isNotNegative(value)
}

const isInteger = (value: string) => {
    if (!Number.isInteger(Number(value))) return validation(false, 'Must be an integer')

    return isValidInput(value)
}

const isValidLambdaMu = (value: string, aux1?: string) => {
    const mu = value
    const lambda = aux1
    
    if (lambda !== '' && mu !== '')
        if (Number(lambda) >= Number(mu)) return validation(false, 'Must be greater than (λ)')

    return isValidInput(value)
}

const isValidLambdaMuS = (value: string, aux1?: string, aux2?: string) => {
    const s = value
    const mu = aux1
    const lambda = aux2
    
    if (s !== '' && lambda !== '' && mu !== '')
        if ((Number(s) * Number(mu)) <= Number(lambda)) return validation(false, '(s*μ) must be greater than (λ)')

    return isValidInput(s)
}

const isValidSK = (value: string, aux1?: string) => {
    const K = value
    const s = aux1

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