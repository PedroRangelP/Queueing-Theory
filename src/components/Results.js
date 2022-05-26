import React, { useContext } from 'react'

import Probabilities from './Probabilities'
import TimeContext from '../store/time-context'

const Results = ({ data={} }) => {
    const timeCtx = useContext(TimeContext)
    const unit = timeCtx.timeUnit

    const { Lq, L, Wq, W, rho, lambda_e, totalCost, probabilities} = data

    return (
        <div className="results-container">
            <div className='results'>
                <p>Average clients in the queue (L<sub>q</sub>): {Lq} { Lq && unit}</p>
                <p>Average clients in the system (L): {L} {L && 'Clients'}</p>
                <p>Wait time in queue (W<sub>q</sub>): {Wq} {Wq && unit}</p>
                <p>Average time in the system (W): {W} {W && unit}</p>
                {rho && <p>Rho (ρ): {rho}</p>}
                {lambda_e && <p>Effective arrival rate (λ<sub>e</sub>): {lambda_e}</p>}
                {totalCost && <p>Total cost (C<sub>T</sub>): {totalCost}</p>}
            </div>
            {probabilities && <Probabilities probabilities={probabilities} />}
        </div>
    )
}

export default Results