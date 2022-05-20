import React, { useEffect } from 'react'
import { isValidInput } from '../utils/validator'
import useInput from '../hooks/use-input'
import Input from './Input'

const MMsKForm = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput(isValidInput)
    const muInput = useInput(isValidInput)
    const sInput = useInput(isValidInput)
    const kInput = useInput(isValidInput)

    useEffect(() => {
        const isValid = lambdaInput.isValid && muInput.isValid && sInput.isValid && kInput.isValid

        if (isValid) onChange(lambdaInput.value, muInput.value, sInput.value, kInput.value)
    }, [lambdaInput.value, muInput.value, sInput.value, kInput.value])
    
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
            <Input
                label='Server limit (K)'
                id='k'
                type='number'
                value={kInput.value}
                onChange={kInput.onChange}
                isValid={kInput.isValid}
                msg={kInput.msg}
            />
        </form>
    )
}

export default MMsKForm