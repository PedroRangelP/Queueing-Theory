import { useState } from 'react'

const useInput = (validator, aux=null) => {
    const [value, setValue] = useState('')
    const { isValid, msg } = validator(value, aux)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('')
    }

    return { value, reset, onChange, isValid, msg }
}

export default useInput
