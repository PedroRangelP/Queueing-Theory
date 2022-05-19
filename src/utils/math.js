const round = (num) => {
    // Rounds the number two decimal places
    const roundedNum = Math.round((num + Number.EPSILON) * 100) / 100
    return roundedNum
}

const summation = (idx, limit, lambda, mu) => {
    let table = []

    for (let i = idx; i <= limit; i++) {
        let body = Math.pow(lambda / mu, i) / factorial(i)

        if (i === 0) table.push(body)
        else table.push(table[i-1] + body)

        if (i === limit) return table[i]
    }
}

const factorial = (n) => {
    let table = []

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) table.push(1)
        else table.push(table[i-1] * i)
        
        if (i === n) return table[i]
    }
}

export {
    round,
    summation,
    factorial
}

