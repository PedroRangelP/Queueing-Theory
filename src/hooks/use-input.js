import { useState } from 'react'

const useInput = () => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }
    
    const reset = () => {
        setValue('')
    }

    return { value, reset, onChange }
}

export default useInput
