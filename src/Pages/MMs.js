import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMs from '../utils/MMs'
import MMsForm from '../components/MMsForm'

const MMs = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, s, Pn) => {
        const results = calculateMMs(Number(lambda), Number(mu), Number(s), Pn)
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
