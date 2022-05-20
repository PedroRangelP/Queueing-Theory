import { useState } from 'react'

const useInput = (validator) => {
    const [value, setValue] = useState('')
    const { isValid, msg } = validator(value)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('')
    }

    return { value, reset, onChange, isValid, msg }
}

export default useInput
