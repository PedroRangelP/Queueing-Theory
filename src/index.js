import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Selector from './components/Selector'
import Layout from './components/Layout'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <BrowserRouter basename='/Queueing-Theory'>
        <Layout>
            <h1 className='title'>Queueing Theory</h1>
            <Selector />
            <App />
        </Layout>
    </BrowserRouter>
)
