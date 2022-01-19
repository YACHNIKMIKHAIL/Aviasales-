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
}

const initState: InitTicketsType = {
    items: [] as Array<ItemsType>
}

export const ticketReducer = (
    state = initState,
    action: ActionsType
): InitTicketsType => {
    switch (action.type) {
        case 'SET_TICKETS': {
            let onlyFive = []
            for (let i = 0; i < 5; i++) {
                onlyFive.push(action.tickets[i])
            }
            return {
                ...state,
                items: [...state.items, ...onlyFive]
            }
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
                items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration || a.segments[1].duration > b.segments[1].duration ? 1 : -1)
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
