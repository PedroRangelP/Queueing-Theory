import React, { useState } from 'react'

import calculateMM1 from '../utils/MM1'
import MM1Form from '../components/MM1Form'
import MM1Results from '../components/MM1Results'

const MM1 = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu) => {
        const results = calculateMM1(lambda, mu)
        setResults(results)
    }

    return (
        <>
            <MM1Form onChange={formChangeHandler} />
            <MM1Results data={results} />
        </>
    )
}

export default MM1