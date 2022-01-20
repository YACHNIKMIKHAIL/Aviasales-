import {pbkdf2Sync} from "crypto";

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
export type FiltersType = {
    POOR: boolean
    FASTS: boolean
    OPTIMAL: boolean
}
export type StopsType = {
    all: boolean,
    null: boolean,
    one: boolean,
    two: boolean,
    three: boolean
}
export type InitTicketsType = {
    render: Array<ItemsType>
    items: Array<ItemsType>
    fiveToRender: number
    filters: FiltersType
    stops: StopsType
}

const initState: InitTicketsType = {
    render: [] as Array<ItemsType>,
    items: [] as Array<ItemsType>,
    fiveToRender: 5,
    filters: {
        POOR: false,
        FASTS: false,
        OPTIMAL: false
    },
    stops: {
        all: false,
        null: false,
        one: false,
        two: false,
        three: false
    }
}


export const ticketReducer = (
    state = initState,
    action: ActionsType
): InitTicketsType => {
    switch (action.type) {
        case 'SET_TICKETS': {
            debugger
            return {
                ...state,
                render: [...action.tickets],
                items: [...state.items, ...action.tickets.slice(0, state.fiveToRender)],
                fiveToRender: state.fiveToRender + 5
            }

        }
        case 'SHOW_FIVE': {
            debugger
            return {
                ...state,
                items: [...state.render.slice(0, state.fiveToRender)],
                fiveToRender: state.fiveToRender + 5
            }
        }
        case 'SET_POOR': {
            return {
                ...state, filters: {...state.filters, POOR: !state.filters.POOR}
            }
        }
        case 'SET_FASTS': {
            return {
                ...state, filters: {...state.filters, FASTS: !state.filters.FASTS}
            }
        }
        case 'SET_OPTIMAL': {
            return {
                ...state, filters: {...state.filters, OPTIMAL: !state.filters.OPTIMAL}
            }
        }
        case 'SET_MAX': {
            debugger
            return {
                ...state, fiveToRender: action.count
            }
        }
        case 'SET_ALL': {
            debugger
            return {
                ...state, stops:{...state.stops,all:!state.stops.all}
            }
        }
        case 'SET_NULL': {
            debugger
            return {
                ...state, stops: {...state.stops,null:!state.stops.null}
            }
        }
        case 'SET_ONE': {
            debugger
            return {
                ...state, stops: {...state.stops,one:!state.stops.one}
            }
        }
        case 'SET_TWO': {
            debugger
            return {
                ...state, stops: {...state.stops,two:!state.stops.two}
            }
        }
        case 'SET_THREE': {
            debugger
            return {
                ...state, stops: {...state.stops,three:!state.stops.three}
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
    | setAllACType
    | setNullACType
    | setOneACType
    | setTwoACType
    | setThreeACType

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

export type setAllACType = ReturnType<typeof setAllAC>
export const setAllAC = () => ({
    type: 'SET_ALL'
} as const)
export type setNullACType = ReturnType<typeof setNullAC>
export const setNullAC = () => ({
    type: 'SET_NULL'
} as const)
export type setOneACType = ReturnType<typeof setOneAC>
export const setOneAC = () => ({
    type: 'SET_ONE'
} as const)
export type setTwoACType = ReturnType<typeof setTwoAC>
export const setTwoAC = () => ({
    type: 'SET_TWO'
} as const)
export type setThreeACType = ReturnType<typeof setThreeAC>
export const setThreeAC = () => ({
    type: 'SET_THREE'
} as const)
