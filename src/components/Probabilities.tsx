import React from 'react'
import { ProbabilitiesType } from '../utils/types'

const Probabilities = (props: { probabilities: ProbabilitiesType }) => {
    const { probabilities } = props

    return (
        <div className='probabilities'>
            <table>
                <thead>
                    <tr>
                        <th>
                            P<sub>n</sub>
                        </th>
                        <th>Probability</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(probabilities).map((pn) => (
                        <tr key={pn}>
                            <td>
                                P<sub>{pn}</sub>
                            </td>
                            <td>{probabilities[pn]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Probabilities