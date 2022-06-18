import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMEk1 from '../utils/MEk1'
import MEk1Form from '../components/MEk1Form'
import { ResultsType, ParamsType } from '../utils/types'

const MEk1 = () => {
    const [results, setResults] = useState<ResultsType>({})

    const formChangeHandler = (params: ParamsType) => {
        const results = calculateMEk1(params)
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
