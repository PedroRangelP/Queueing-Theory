import React from 'react'
import Probabilities from './Probabilities'

const Results = ({ data={} }) => {
    const { Lq, L, Wq, W, rho, lambda_e, totalCost, probabilities} = data

    return (
        <div className="results-container">
            <div className='results'>
                <p>Average clients in the queue (L<sub>q</sub>): {Lq}</p>
                <p>Average clients in the system (L): {L}</p>
                <p>Wait time in queue (W<sub>q</sub>): {Wq}</p>
                <p>Average time in the system (W): {W}</p>
                {rho && <p>Rho (ρ): {rho}</p>}
                {lambda_e && <p>Effective arrival rate (λ<sub>e</sub>): {lambda_e}</p>}
                {totalCost && <p>Total cost (C<sub>T</sub>): {totalCost}</p>}
            </div>
            {probabilities && <Probabilities probabilities={probabilities} />}
        </div>
    )
}

export default Results