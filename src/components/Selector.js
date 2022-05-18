import React from 'react'

const Selector = ({ options, onSelect, active }) => {
    const handleSelection = (event) => {
        const selection = event.target.textContent
        onSelect(selection)
    }

    const optionValues = Object.values(options)
    const optionItems = optionValues.map((option) => (
        <li
            onClick={handleSelection}
            key={option}
            className={active === option ? 'active' : '' }
        >
            {option}
        </li>
    ))

    return <ul className='selector'>{optionItems}</ul>
}

export default Selector
