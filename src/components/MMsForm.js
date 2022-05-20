import React, { useEffect } from 'react'
import { isValidInput } from '../utils/validator'
import useInput from '../hooks/use-input'
import Input from './Input'

const MMsForm = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput(isValidInput)
    const muInput = useInput(isValidInput)
    const sInput = useInput(isValidInput)

    // const isNotNegative = (...values) {

    // }

    // if()

    useEffect(() => {
        const isValid = lambdaInput.isValid && muInput.isValid && sInput.isValid

        if (isValid) onChange(lambdaInput.value, muInput.value, sInput.value)
    }, [lambdaInput.value, muInput.value, sInput.value])
    
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
            <Input
                label='Servers (s)'
                id='s'
                type='number'
                value={sInput.value}
                onChange={sInput.onChange}
                isValid={sInput.isValid}
                msg={sInput.msg}
            />
        </form>
    )
}

export default MMsForm