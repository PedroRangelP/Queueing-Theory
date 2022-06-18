export type ParamsType = {
    lambda: number
    mu: number
    s?: number
    k?: number
    sigma?: number
    Pn?: number
    Cw?: number
    Cs?: number
}

export type ParamsStringType = {
    lambda: string
    mu: string
    s?: string
    k?: string
    sigma?: string
    Pn?: string
    Cw?: string
    Cs?: string
}

export type FormPropsType = { 
    onChange: (params: ParamsType) => void 
}

export type BodyType = (params: ParamsType, n: number) => number

export type ProbabilitiesType = { 
    [key: string]: number 
}

export type ResultsType = {
    Lq?: number
    L?: number
    Wq?: number
    W?: number
    rho?: number
    lambda_e?: number
    totalCost?: number
    probabilities?: ProbabilitiesType 
}

export type ValidatorType = (value: string, aux1?: string, aux2?: string) => {
    msg: string
    isValid: boolean
}