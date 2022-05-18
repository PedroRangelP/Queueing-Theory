import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMM1 from '../utils/MM1'
import Form from '../components/Form'

const MM1 = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu) => {
        const results = calculateMM1(lambda, mu)
        setResults(results)
    }

    return (
        <>
            <Form onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MM1