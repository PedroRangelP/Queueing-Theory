import React from 'react'

const Input = ({ label, id, type, value, onChange, isValid, msg }) => {
    return (
        <div className='form-control'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} />
            {!isValid && <p className='error-msg'>{msg}</p>}
        </div>
    )
}

export default Input