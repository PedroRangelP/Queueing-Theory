import React, { useState } from 'react'
import './reset.css'
import './styles.css'

import Selector from './components/Selector'
import Form from './components/Form'
import Layout from './components/Layout'
import Results from './components/Results'
import calculateMM1 from './utils/MM1'

const selectorOptions = { MM1: 'M/M/1', MMs: 'M/M/S', MMsK: 'M/M/s/K', MG1: 'M/G/1'}

const App = () => {
    const [results, setResults] = useState({})
    const [selection, setSelection] = useState('')

    const formChangeHandler = (lambda, mu) => {
        const results = calculateMM1(lambda, mu)
        setResults(results)
    }

    const selectionHandler = (selection) => {
        setSelection(selection)
    }
    console.log(`Selection: ` + selection)

    return (
        <Layout>
            <h1 className='title'>Queueing Theory</h1>
            <Selector options={selectorOptions} onSelect={selectionHandler} />
            <Form onChange={formChangeHandler} />
            <Results data={results} />
        </Layout>
    )
}

export default App