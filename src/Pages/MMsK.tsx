import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMsK from '../utils/MMsK'
import MMsKForm from '../components/MMsKForm'
import { ParamsType, ResultsType } from '../utils/types'

const MMsK = () => {
    const [results, setResults] = useState<ResultsType>({})

    const formChangeHandler = (params: ParamsType) => {
        const results = calculateMMsK(params)
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
