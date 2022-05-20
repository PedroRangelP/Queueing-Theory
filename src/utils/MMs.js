import {summation, factorial} from './math'

const calculateMMs = (lambda, mu, s, Pn=0) => {
    console.log("Calculating MMs")

    const rho = lambda / (s * mu)

    const P0_part1 = summation(0, s-1, lambda, mu)
    const P0_part2 = (Math.pow(lambda / mu, s) / factorial(s)) * (1 / (1 - (lambda / (s * mu))))
    const P0 = 1 / (P0_part1 + P0_part2)

    const Lq = (P0 * (Math.pow(lambda / mu, s)) * rho) / (factorial(s) * Math.pow(1 - rho, 2))
    const L = Lq + (lambda / mu)
    const Wq = Lq / lambda
    const W = Wq + (1 / mu)

    let probabilities = {}
    probabilities[0] = P0

    for(let i = 1; i <= Pn; i++) {
        probabilities[i] = calculatePn(lambda, mu, s, i, P0)
    }

    return { Lq, L, Wq, W, rho, probabilities }
}

const calculatePn = (lambda, mu, s, n, P0) => {
    if (n <= s) {
        return (Math.pow(lambda / mu, n) / factorial(n)) * P0
    }

    return (Math.pow(lambda / mu, n) / (factorial(s) * Math.pow(s, n - s))) * P0
}

export default calculateMMs