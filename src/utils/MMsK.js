import {summation, factorial} from './math'
import {body1, body2, calculateCost} from './model'

const calculateMMsK = (lambda, mu, s, K, Pn=0, Cw=0, Cs=0) => {
    console.log("Calculating MMsK")

    const rho = lambda / (s * mu)

    const P0_part1 = summation(0, s, body1, {lambda: lambda, mu: mu})
    const P0_part2 = (Math.pow(lambda / mu, s) / factorial(s)) * summation(s + 1, K, body2, {lambda: lambda, mu: mu, s: s})
    const P0 = 1 / (P0_part1 + P0_part2)

    const Lq_part1 = (P0 * (Math.pow(lambda / mu, s)) * rho) / (factorial(s) * Math.pow(1 - rho, 2))
    const Lq_part2 = 1 - Math.pow(rho, K - s) - ((K - s) * Math.pow(rho, K - s) * (1 - rho))
    const Lq = Lq_part1 * Lq_part2

    const lambda_e = lambda * (1 - calculatePn(lambda, mu, s, K, P0))
    const Wq = Lq / lambda_e
    const W = Wq + (1 / mu)
    const L = lambda_e * W

    let probabilities = {}
    probabilities[0] = P0

    for(let i = 1; i <= Pn; i++) {
        probabilities[i] = calculatePn(lambda, mu, s, i, P0)
    }

    let totalCost;
    if (Cw > 0 || Cs > 0) totalCost = calculateCost(Lq, Cw, 1, Cs)

  return { Lq, L, Wq, W, rho, lambda_e, totalCost, probabilities }
}

const calculatePn = (lambda, mu, s, n, P0) => {
    return (Math.pow(lambda / mu, n) / (factorial(s) * Math.pow(s, n - s))) * P0
}

export default calculateMMsK