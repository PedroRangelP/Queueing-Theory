import { useState } from 'react'

const useInput = (validator, aux1=null, aux2=null) => {
    const [value, setValue] = useState('')
    const { isValid, msg } = validator(value, aux1, aux2)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('')
    }

    return { value, reset, onChange, isValid, msg }
}

export default useInput
