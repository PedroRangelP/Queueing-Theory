import { calculateCost } from './model'
import { ProbabilitiesType } from './types'
import { ParamsType } from './types'

const calculateMM1 = (params: ParamsType) => {
    console.log("Calculating MM1")
    const { lambda, mu, Pn, Cw, Cs } = params

    const Lq = Math.pow(lambda, 2) / (mu * (mu - lambda))
    const L = lambda / (mu - lambda)
    const Wq = lambda / (mu * (mu - lambda))
    const W = 1 / (mu - lambda)

    const rho = lambda / mu

    let probabilities: ProbabilitiesType = {}

    const P0 = 1 - rho;
    probabilities[0] = P0

    for(let i = 1; i <= Pn!; i++) {
        probabilities[i] = Math.pow(rho, i) * P0
    }

    let totalCost;
    if (Cw! > 0 || Cs! > 0) totalCost = calculateCost(Lq, Cw!, 1, Cs!)


    return { Lq, L, Wq, W, rho, totalCost, probabilities }
}

export default calculateMM1