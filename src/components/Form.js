import React from 'react'

const Form = () => {
    return (
        <div className='model-inputs'>
            <div className='form-control'>
                <label htmlFor='lambda'>Lambda</label>
                <input id='lambda' type='number' />
            </div>
            <div className='form-control'>
                <label htmlFor='mu'>Mu</label>
                <input id='mu' type='number' />
            </div>
            <div className='form-control'>
                <label htmlFor='cw'>Cw</label>
                <input id='cw' type='number' />
            </div>
            <div className='form-control'>
                <label htmlFor='cs'>Cs</label>
                <input id='cs' type='number' />
            </div>
        </div>
    )
}

export default Form
