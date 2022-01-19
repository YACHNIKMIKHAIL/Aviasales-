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
    render:Array<ItemsType>
    items: Array<ItemsType>
    fiveToRender: number
}

const initState: InitTicketsType = {
    render:[] as Array<ItemsType>,
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
            return {...state, render:[...action.tickets],
                items: [...state.items, ...action.tickets.slice(0, state.fiveToRender)],fiveToRender:state.fiveToRender+5}

        }
        case 'SHOW_FIVE': {
            debugger
             return {...state, items: [...state.render.slice(0, state.fiveToRender)],fiveToRender:state.fiveToRender+5}
        }
        case 'SET_POOR': {
            return {...state, items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price ? 1 : -1)}
        }
        case 'SET_FASTS': {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
        }
        case 'SET_OPTIMAL': {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
        }

        case 'SET_MAX': {
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
    | showFiveACType

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

export type showFiveACType = ReturnType<typeof showFiveAC>
export const showFiveAC = () => ({
    type: 'SHOW_FIVE'
} as const)
