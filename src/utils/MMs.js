import {round, summation, factorial} from './math'

const calculateMMs = (lambda, mu, s) => {
  console.log("Calculating MMs")

  const ro = lambda / (s * mu)
  const P0_part1 = summation(0, s-1, lambda, mu)
  const P0_part2 = (Math.pow(lambda / mu, s) / factorial(Number(s))) * (1 / (1 - (lambda / (s * mu))))

  const P0 = 1 / (P0_part1 + P0_part2)
  const Lq = round((P0 * (Math.pow(lambda / mu, s)) * ro) / (factorial(Number(s)) * Math.pow(1 - ro, 2)))
  const L = round(Lq + (lambda / mu))
  const Wq = round(Lq / lambda)
  const W = round(Wq + (1 / mu))

  return { Lq, L, Wq, W }
}

export default calculateMMs