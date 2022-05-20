import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMsK from '../utils/MMsK'
import MMsKForm from '../components/MMsKForm'

const MMsK = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, s, K, Pn, Cw, Cs) => {
        const results = calculateMMsK(Number(lambda), Number(mu), Number(s), Number(K), Number(Pn), Number(Cw), Number(Cs))
        setResults(results)
    }

    return (
        <>
            <MMsKForm onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MMsK
