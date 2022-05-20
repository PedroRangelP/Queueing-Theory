const round = (num) => {
    // Rounds the number two decimal places
    const roundedNum = Math.round((num + Number.EPSILON) * 1000) / 1000
    return roundedNum
}

const summation = (idx, limit, body, params) => {
    let table = []

    for (let i = idx; i <= limit; i++) {
        let b = body(params, i)

        if (i === idx) table[i] = b
        else table[i] = table[i-1] + b

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
    factorial
}

