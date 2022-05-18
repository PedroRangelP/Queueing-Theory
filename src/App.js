import React, { useState } from 'react'
import Form from './components/Form'
import Layout from './components/Layout'
import Results from './components/Results'
import calculateMM1 from './utils/MM1'

// import './reset.css'
import './styles.css'

const App = () => {
    const [results, setResults] = useState({})

    const formChangeHandler = (lambda, mu) => {
        const results = calculateMM1(lambda, mu)
        setResults(results)
    }

    return (
        <Layout>
            <h1>Queueing Theory</h1>
            <Form onChange={formChangeHandler}/>
            <Results data={results} />
        </Layout>
    )
}

export default App