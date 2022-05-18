const calculateMM1 = (lambda, mu) => {
    console.log("Calculating MM1")

    const Lq = Math.pow(lambda, 2) / (mu * (mu - lambda))
    const L = lambda / (mu - lambda)
    const Wq = lambda / (mu * (mu - lambda))
    const W = 1 / (mu - lambda)

    return { Lq, L, Wq, W }
}

export default calculateMM1