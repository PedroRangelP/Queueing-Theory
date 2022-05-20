import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMs from '../utils/MMs'
import MMsForm from '../components/MMsForm'

const MMs = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, s, Pn, Cw, Cs) => {
        const results = calculateMMs(Number(lambda), Number(mu), Number(s), Number(Pn), Number(Cw), Number(Cs))
        setResults(results)
    }

    return (
        <>
            <MMsForm onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MMs
