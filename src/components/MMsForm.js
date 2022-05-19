import React, { useEffect } from 'react'
import useInput from '../hooks/use-input'
import Input from './Input'

const MMsForm = ({ onChange }) => {
    // value, reset, onChange
    const lambdaInput = useInput()
    const muInput = useInput()
    const sInput = useInput()

    useEffect(() => {
        onChange(lambdaInput.value, muInput.value, sInput.value)
    }, [lambdaInput.value, muInput.value, sInput.value])
    
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
        </form>
    )
}

export default MMsForm