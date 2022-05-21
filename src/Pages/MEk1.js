import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMEk1 from '../utils/MEk1'
import MEk1Form from '../components/MEk1'

const MEk1 = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, k, Pn, Cw, Cs) => {
        const results = calculateMEk1(Number(lambda), Number(mu), Number(k), Number(Pn), Number(Cw), Number(Cs))
        setResults(results)
    }

    return (
        <>
            <MEk1Form onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MEk1
