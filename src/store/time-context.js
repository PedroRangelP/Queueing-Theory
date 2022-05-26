import React, { useState } from 'react'


const TimeContext = React.createContext({
    timeUnit: '',
    setTimeUnit: () => {}
})

export const TimeContextProvider = (props) => {
    const [timeUnit, setTimeUnit] = useState('hours')

    const contextValue = {
        timeUnit,
        setTimeUnit
    }

    return (
        <TimeContext.Provider value={contextValue}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContext
