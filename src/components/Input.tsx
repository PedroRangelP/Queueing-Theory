import React from 'react'

type InputProps = { 
    label: string
    id: string
    type: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    isValid: boolean
    msg: string 
}

const Input = (props: InputProps) => {
    return (
        <div className='form-control'>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} value={props.value} onChange={props.onChange} />
            {!props.isValid && <p className='error-msg'>{props.msg}</p>}
        </div>
    )
}

export default Input