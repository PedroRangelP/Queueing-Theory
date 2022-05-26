import React from 'react'

const TimeSelect = ({ onSelect, value }) => {
    const handleSelect = (event) => {
        onSelect(event.target.value)
    }

    return (
        <select name='time-select' className='time-select' value={value} onChange={handleSelect}>
            <option value=''>Time measure</option>
            <option value='seconds'>Seconds</option>
            <option value='minutes'>Minutes</option>
            <option value='hours'>Hours</option>
        </select>
    )
}

export default TimeSelect