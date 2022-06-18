import React, { useState } from 'react'

import Results from '../components/Results'
import calculateMMs from '../utils/MMs'
import MMsForm from '../components/MMsForm'
import { ParamsType, ResultsType } from '../utils/types'

const MMs = () => {
    const [results, setResults] = useState<ResultsType>({})

    const formChangeHandler = (params: ParamsType) => {
        const results = calculateMMs(params)
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
