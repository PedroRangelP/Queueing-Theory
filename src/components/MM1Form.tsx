import React, { useEffect } from 'react'

import { isNotNegative, isValidInput, isValidLambdaMu } from '../utils/validator'
import { ParamsStringType, FormPropsType } from '../utils/types'
import { paramsToNumber } from '../utils/model'
import useInput from '../hooks/use-input'
import Input from './Input'

const MM1Form = (props: FormPropsType) => {
    const lambdaInput = useInput(isValidInput)
    const muInput = useInput(isValidLambdaMu, lambdaInput.value)
    const pnInput = useInput(isNotNegative)
    const cwInput = useInput(isNotNegative)
    const csInput = useInput(isNotNegative)

    useEffect(() => {
        const isValid = lambdaInput.isValid && muInput.isValid
                        && pnInput.isValid && cwInput.isValid && csInput.isValid

        const params: ParamsStringType = {
            lambda: lambdaInput.value, 
            mu: muInput.value, 
            Pn: pnInput.value, 
            Cw: cwInput.value, 
            Cs: csInput.value
        }
        
        if (isValid) props.onChange(paramsToNumber(params))
    }, [lambdaInput.value, muInput.value, pnInput.value, cwInput.value, csInput.value])
    
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
                label='Number of probabilities (Pn)'
                id='pn'
                type='number'
                value={pnInput.value}
                onChange={pnInput.onChange}
                isValid={pnInput.isValid}
                msg={pnInput.msg}
            />
            <Input
                label='Waiting time cost (Cw)'
                id='cw'
                type='number'
                value={cwInput.value}
                onChange={cwInput.onChange}
                isValid={cwInput.isValid}
                msg={cwInput.msg}
            />
            <Input
                label='Service cost (Cs)'
                id='cs'
                type='number'
                value={csInput.value}
                onChange={csInput.onChange}
                isValid={csInput.isValid}
                msg={csInput.msg}
            />
        </form>
    )
}

export default MM1Form
