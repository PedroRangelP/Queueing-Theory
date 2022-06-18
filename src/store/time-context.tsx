import React, { useState } from 'react'

type TimeContextObj = {
    timeUnit: string
    setTimeUnit: React.Dispatch<React.SetStateAction<string>>
}

const TimeContext = React.createContext<TimeContextObj>({
    timeUnit: '',
    setTimeUnit: () => {}
})

export const TimeContextProvider = (props: { children?: React.ReactNode }) => {
    const [timeUnit, setTimeUnit] = useState<string>('hours')

    const contextValue: TimeContextObj = {
        timeUnit: timeUnit,
        setTimeUnit: setTimeUnit
    }

    return (
        <TimeContext.Provider value={contextValue}>
            {props.children}
        </TimeContext.Provider>
    )
}

export default TimeContext
