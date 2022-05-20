const round = (num) => {
    // Rounds the number two decimal places
    const roundedNum = Math.round((num + Number.EPSILON) * 1000) / 1000
    return roundedNum
}

const summation = (idx, limit, lambda, mu) => {
    let table = []

    for (let i = idx; i <= limit; i++) {
        let body = Math.pow(lambda / mu, i) / factorial(i)

        if (i === idx) table[i] = body
        else table[i] = table[i-1] + body

        if (i === limit) return table[i]
    }
}

const summationK = (idx, limit, lambda, mu, s) => {
    let table = []

    for (let i = idx; i <= limit; i++) {
        let body = Math.pow((lambda / (s * mu)), i - s)

        if (i === idx) table[i] = body
        else table[i] = table[i-1] + body

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
    summation,
    summationK,
    factorial
}

