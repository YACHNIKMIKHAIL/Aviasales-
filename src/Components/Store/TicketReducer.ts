export type SegmentsType = {
    // Код города (iata)
    origin: string
    // Код города (iata)
    destination: string
    // Дата и время вылета туда
    date: string
    // Массив кодов (iata) городов с пересадками
    stops: string[]
    // Общее время перелёта в минутах
    duration: number
}
export type ItemsType = {
    carrier: string
    price: number
    segments: Array<SegmentsType>
}
export type InitTicketsType = {
    items: Array<ItemsType>
    fiveToRender: number
}

const initState: InitTicketsType = {
    items: [] as Array<ItemsType>,
    fiveToRender: 5
}


export const ticketReducer = (
    state = initState,
    action: ActionsType
): InitTicketsType => {
    switch (action.type) {
        case 'SET_TICKETS': {
            debugger

            // const mappedTickeds = action.tickets.map(m => {
            //     let render = 1
            //     if (render >= state.fiveToRender) {
            //         return
            //     }
            //     return ({...m})
            // })
            // return {...state,...mappedTickeds}



            return {...state, items: [...state.items, ...action.tickets.slice(0, state.fiveToRender)]}



            // let onlyFive = []
            // for (let i = 0; i < state.fiveToRender; i++) {
            //     onlyFive.push(action.tickets[i])
            // }
            // return {
            //     ...state,
            //     fiveToRender:state.fiveToRender+action.s,
            //     items: [ ...onlyFive,...state.items,]
            // }

            // return {
            //     ...state,
            //     fiveToRender: state.fiveToRender + action.s,
            //     items: [...action.tickets.slice(state.fiveToRender)]
            // }

            // let slicer = 5
            // let newState = {...state, items: [...state.items,...action.tickets.slice(0, slicer)]}
            // slicer = slicer+action.s
            // return newState
        }
        case
        'SET_POOR'
        : {
            return {...state, items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price ? 1 : -1)}
        }
        case
        'SET_FASTS'
        : {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
        }
        case 'SET_OPTIMAL'
        : {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
        }

        case 'SET_MAX'
        : {
            debugger
            return {
                ...state, fiveToRender: action.count
            }
        }
        default:
            return state
    }
}
type ActionsType =
    setTicketsACType
    | setPoorTicketsACType
    | setFastsTicketsACType
    | setOptimalTicketsACType
    | setMaxCountACType

export type setTicketsACType = ReturnType<typeof setTicketsAC>
export const setTicketsAC = (tickets: Array<ItemsType>) => ({
    type: 'SET_TICKETS', tickets

} as const)

export type setPoorTicketsACType = ReturnType<typeof setPoorTicketsAC>
export const setPoorTicketsAC = () => ({
    type: 'SET_POOR',
} as const)

export type setFastsTicketsACType = ReturnType<typeof setFastsTicketsAC>
export const setFastsTicketsAC = () => ({
    type: 'SET_FASTS',
} as const)

export type setOptimalTicketsACType = ReturnType<typeof setOptimalTicketsAC>
export const setOptimalTicketsAC = () => ({
    type: 'SET_OPTIMAL',
} as const)

export type setMaxCountACType = ReturnType<typeof setMaxCountAC>
export const setMaxCountAC = (count: number) => ({
    type: 'SET_MAX', count
} as const)
