const round = (num) => {
    // Rounds the number two decimal places
    const roundedNum = Math.round((num + Number.EPSILON) * 100) / 100
    return roundedNum
}

export default round