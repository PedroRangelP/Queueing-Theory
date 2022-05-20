import { factorial } from './math'

const summationBody1 = (params, n) => {
    return Math.pow(params.lambda / params.mu, n) / factorial(n)
}

const summationBody2 = (params, n) => {
    return Math.pow((params.lambda / (params.s * params.mu)), n - params.s)
}

const calculateCost = (Lq, Cw, s, Cs) => {
    return (Lq * Cw) + (s * Cs)
}

export {
    summationBody1 as body1,
    summationBody2 as body2,
    calculateCost
}