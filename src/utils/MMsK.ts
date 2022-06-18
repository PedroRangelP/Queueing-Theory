import { summation, factorial } from './math'
import { body1, body2, calculateCost } from './model'
import { ParamsType, ProbabilitiesType } from './types'

const calculateMMsK = (params: ParamsType) => {
    console.log("Calculating MMsK")
    const { lambda, mu, s, k, Pn, Cw, Cs } = params
    const rho = lambda / (s! * mu)

    const P0_part1 = summation(0, s!, body1, {lambda: lambda, mu: mu})
    const P0_part2 = (Math.pow(lambda / mu, s!) / factorial(s!)) * summation(s! + 1, k!, body2, {lambda: lambda, mu: mu, s: s})
    const P0 = 1 / (P0_part1 + P0_part2)

    const Lq_part1 = (P0 * (Math.pow(lambda / mu, s!)) * rho) / (factorial(s!) * Math.pow(1 - rho, 2))
    const Lq_part2 = 1 - Math.pow(rho, k! - s!) - ((k! - s!) * Math.pow(rho, k! - s!) * (1 - rho))
    const Lq = Lq_part1 * Lq_part2

    const lambda_e = lambda * (1 - calculatePn(lambda, mu, s!, k!, P0))
    const Wq = Lq / lambda_e
    const W = Wq + (1 / mu)
    const L = lambda_e * W

    let probabilities: ProbabilitiesType = {}
    probabilities[0] = P0

    for(let i = 1; i <= Pn!; i++) {
        probabilities[i] = calculatePn(lambda, mu, s!, i, P0)
    }

    let totalCost;
    if (Cw! > 0 || Cs! > 0) totalCost = calculateCost(Lq, Cw!, 1, Cs!)

  return { Lq, L, Wq, W, rho, lambda_e, totalCost, probabilities }
}

const calculatePn = (lambda: number, mu: number, s: number, n: number, P0: number) => {
    return (Math.pow(lambda / mu, n) / (factorial(s) * Math.pow(s, n - s))) * P0
}

export default calculateMMsK