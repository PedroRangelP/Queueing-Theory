import React from 'react'

const Selector = ({ options, onSelect }) => {
    const handleSelection = (event) => {
        const selection = event.target.textContent
        onSelect(selection)
    }

    const optionValues = Object.values(options)
    const optionItems = optionValues.map(option => <li onClick={handleSelection} key={option}>{option}</li>)

    return (
        <ul className='selector'>
            {optionItems}
        </ul>
    )
}

export default Selector