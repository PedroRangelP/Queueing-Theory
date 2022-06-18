import React from 'react'

const TimeSelect = (props: { onSelect: (select: string) => void, value: string }) => {
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.onSelect(event.target.value)
    }

    return (
        <select name='time-select' className='time-select' value={props.value} onChange={handleSelect}>
            <option value='seconds'>Seconds</option>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
        </select>
    )
}

export default TimeSelect