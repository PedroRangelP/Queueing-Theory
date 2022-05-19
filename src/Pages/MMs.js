import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMs from '../utils/MMs'
import MMsForm from '../components/MMsForm'

const MMs = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu, s) => {
        const results = calculateMMs(lambda, mu, s)
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
