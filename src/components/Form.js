import React from 'react'
import useInput from '../hooks/use-input'
import Input from './Input'

const Form = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput()
    const muInput = useInput()

    return (
        <form className='model-inputs' onChange={() => onChange(lambdaInput.value, muInput.value)}>
            <Input
                label='Expected clients (λ)'
                id='lambda'
                type='number'
                value={lambdaInput.value}
                onChange={lambdaInput.onChange}
            />
            <Input
                label='Service rate (μ)'
                id='mu'
                type='number'
                value={muInput.value}
                onChange={muInput.onChange}
            />
        </form>
    )
}

export default Form
