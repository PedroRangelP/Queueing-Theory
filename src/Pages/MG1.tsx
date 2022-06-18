import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMG1 from '../utils/MG1'
import MG1Form from '../components/MG1Form'
import { ResultsType, ParamsType } from '../utils/types'

const MG1 = () => {
    const [results, setResults] = useState<ResultsType>({})

    const formChangeHandler = (params: ParamsType) => {
        const results = calculateMG1(params)
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
