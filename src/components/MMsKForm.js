import React, { useEffect } from 'react'
import { isNotNegative } from '../utils/validator'
import useInput from '../hooks/use-input'
import Input from './Input'

const MMsKForm = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput(isNotNegative)
    const muInput = useInput(isNotNegative)
    const sInput = useInput(isNotNegative)
    const kInput = useInput(isNotNegative)

    useEffect(() => {
        onChange(lambdaInput.value, muInput.value, sInput.value, kInput.value)
    }, [lambdaInput.value, muInput.value, sInput.value, kInput.value])
    
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
            <Input
                label='Servers (s)'
                id='s'
                type='number'
                value={sInput.value}
                onChange={sInput.onChange}
            />
            <Input
                label='Server limit (K)'
                id='k'
                type='number'
                value={kInput.value}
                onChange={kInput.onChange}
            />
        </form>
    )
}

export default MMsKForm