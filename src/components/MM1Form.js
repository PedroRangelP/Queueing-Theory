import React, { useEffect } from 'react'
import { isNotNegative } from '../utils/validator'
import useInput from '../hooks/use-input'
import Input from './Input'

const MM1Form = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput(isNotNegative)
    const muInput = useInput(isNotNegative)

    useEffect(() => {
        onChange(lambdaInput.value, muInput.value)
    }, [lambdaInput.value, muInput.value])
    
    return (
        <form className='model-inputs'>
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

export default MM1Form
