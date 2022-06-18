import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { TimeContextProvider } from './store/time-context'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
    <TimeContextProvider>
        {/* <BrowserRouter basename='/Queueing-Theory'> */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </TimeContextProvider>
)
