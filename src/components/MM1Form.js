import React, { useEffect } from 'react'
import { isValidInput } from '../utils/validator'
import useInput from '../hooks/use-input'
import Input from './Input'

const MM1Form = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput(isValidInput)
    const muInput = useInput(isValidInput)

    useEffect(() => {
        const isValid = lambdaInput.isValid && muInput.isValid

        if (isValid) onChange(lambdaInput.value, muInput.value)
    }, [lambdaInput.value, muInput.value])
    
    return (
        <form className='model-inputs'>
            <Input
                label='Expected clients (λ)'
                id='lambda'
                type='number'
                value={lambdaInput.value}
                onChange={lambdaInput.onChange}
                isValid={lambdaInput.isValid}
                msg={lambdaInput.msg}
            />
            <Input
                label='Service rate (μ)'
                id='mu'
                type='number'
                value={muInput.value}
                onChange={muInput.onChange}
                isValid={muInput.isValid}
                msg={muInput.msg}
            />
        </form>
    )
}

export default MM1Form
