import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMM1 from '../utils/MM1'
import MM1Form from '../components/MM1Form'
import { ParamsType, ResultsType } from '../utils/types'

const MM1 = () => {
    const [results, setResults] = useState<ResultsType>({})

    const formChangeHandler = (params: ParamsType) => {
        const results = calculateMM1(params)
        setResults(results)
    }

    return (
        <>
            <MM1Form onChange={formChangeHandler} />
            <Results data={results} />
        </>
    )
}

export default MM1