import { calculateCost } from './model'
import { ProbabilitiesType, ParamsType } from './types'

const calculateMEk1 = (params: ParamsType) => {
    console.log("Calculating MG1")
    const { lambda, mu, k, Pn, Cw, Cs } = params

    const rho = lambda / mu
    const P0 = 1 - rho
    const Lq = ((1 + k!) / (2 * k!)) * (Math.pow(lambda, 2) / (mu * (mu - lambda)))
    const Wq = Lq / lambda
    const W = Wq + (1 / mu)
    const L = lambda * W

    let probabilities: ProbabilitiesType = {}
    probabilities[0] = P0

    for(let i = 1; i <= Pn!; i++) {
        probabilities[i] = Math.pow(rho, i) * P0
    }

    let totalCost;
    if (Cw! > 0 || Cs! > 0) totalCost = calculateCost(Lq, Cw!, 1, Cs!)

    return { Lq, L, Wq, W, rho, totalCost, probabilities }
}

export default calculateMEk1