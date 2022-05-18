import React from 'react'

const MM1Results = ({ data }) => {
    const { Lq, L, Wq, W } = data

    return (
        <div className='results'>
            <p>Average clients in the queue (L<sub>q</sub>): {Lq}</p>
            <p>Average clients in the system (L): {L}</p>
            <p>Wait time in queue (W<sub>q</sub>): {Wq}</p>
            <p>Average time in the system (W): {W}</p>
        </div>
    )
}

export default MM1Results