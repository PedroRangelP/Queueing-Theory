import { useState } from 'react'
import { ValidatorType } from '../utils/types'

const useInput = (validator: ValidatorType, aux1?: string, aux2?: string) => {
    const [value, setValue] = useState<string>('')
    const { isValid, msg } = validator(value, aux1, aux2)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('')
    }

    return { value, reset, onChange, isValid, msg }
}

export default useInput
