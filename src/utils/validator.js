let validity = { isValid: true, msg: '' }

const isNotNegative = (num) => {
    const valid = num < 0
    validity.isValid = valid
    
    if(!valid)
        validity.msg = 'Please enter non negative numbers'

    return validity
}

const validNum = (ans) => {
    return !isNaN(ans) && isFinite(ans)
}

export {
    isNotNegative,
    validNum
}