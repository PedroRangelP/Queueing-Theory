import { factorial } from './math'
import { ParamsType, ParamsStringType } from './types'

const summationBody1 = (params: ParamsType, n: number) => {
    return Math.pow(params.lambda / params.mu, n) / factorial(n)
}

const summationBody2 = (params: ParamsType, n: number) => {
    return Math.pow((params.lambda / (params.s! * params.mu)), n - params.s!)
}

const calculateCost = (Lq: number, Cw: number, s: number, Cs: number) => {
    return (Lq * Cw) + (s * Cs)
}

const paramsToNumber = (params: ParamsStringType) => {
    let converted: ParamsType = {
        lambda: Number(params.lambda),
        mu: Number(params.mu),
        s: Number(params.s),
        k: Number(params.k),
        sigma: Number(params.sigma),
        Pn: Number(params.Pn),
        Cs: Number(params.Cs),
        Cw: Number(params.Cw),
    }

    return converted
}

export {
    summationBody1 as body1,
    summationBody2 as body2,
    calculateCost,
    paramsToNumber
}