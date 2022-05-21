import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMG1 from '../utils/MG1'
import MG1Form from '../components/MG1Form'

const MG1 = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, sigma, Pn, Cw, Cs) => {
        const results = calculateMG1(Number(lambda), Number(mu), Number(sigma), Number(Pn), Number(Cw), Number(Cs))
        setResults(results)
    }

    return (
        <>
            <MG1Form onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MG1
