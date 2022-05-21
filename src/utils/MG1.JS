import {calculateCost} from './model'

const calculateMG1 = (lambda, mu, sigma=0, Pn=0, Cw=0, Cs=0) => {
    console.log("Calculating MG1")

    const rho = lambda / mu
    const P0 = 1 - rho
    const Lq = sigma === 0 
        ? Math.pow(rho, 2) / (2 * (1 - rho))
        : (Math.pow(lambda, 2) * Math.pow(sigma, 2) + Math.pow(rho, 2)) / (2 * (1 - rho))
    
    const L = rho + Lq
    const Wq = Lq / lambda
    const W = Wq + (1 / mu)

    let probabilities = {}
    probabilities[0] = P0

    for(let i = 1; i <= Pn; i++) {
        probabilities[i] = Math.pow(rho, i) * P0
    }

    let totalCost;
    if (Cw > 0 || Cs > 0) totalCost = calculateCost(Lq, Cw, 1, Cs)

    return { Lq, L, Wq, W, rho, totalCost, probabilities }
}

export default calculateMG1