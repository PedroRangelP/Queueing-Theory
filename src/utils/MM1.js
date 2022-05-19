import {round} from './math'

const calculateMM1 = (lambda, mu) => {
    console.log("Calculating MM1")

    const Lq = round(Math.pow(lambda, 2) / (mu * (mu - lambda)))
    const L = round(lambda / (mu - lambda))
    const Wq = round(lambda / (mu * (mu - lambda)))
    const W = round(1 / (mu - lambda))

    return { Lq, L, Wq, W }
}

export default calculateMM1