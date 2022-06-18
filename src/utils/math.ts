import { BodyType, ParamsType } from './types'

const summation = (idx: number, limit: number, body: BodyType, params: ParamsType) => {
    let table: number[] = []

    for (let i = idx; i <= limit; i++) {
        let b = body(params, i)

        if (i === idx) table[i] = b
        else table[i] = table[i-1] + b

        if (i === limit) return table[i]
    }

    return 0
}

const factorial = (n: number) => {
    if(n > 10000) {
        return Infinity
    }

    let table: number[] = []

    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) table.push(1)
        else table.push(table[i-1] * i)
        
        if (i === n) return table[i]
    }

    return 0
}

export {
    summation,
    factorial,
}

