import React from 'react'

const Input = ({ label, id, type = 'text', value, onChange }) => {
    return (
        <div className='form-control'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} />
        </div>
    )
}

export default Input