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
        OPTIMAL: true
    },
    stops: {
        all: true,
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
                items: [...state.items, ...action.tickets],
                fiveToRender: state.fiveToRender
            }

        }
        case 'SHOW_FIVE': {
            debugger
            return {
                ...state,
                fiveToRender: state.fiveToRender + 5
            }
        }
        case 'SET_POOR': {
            return {
                ...state, filters: {...state.filters, POOR: action.value, FASTS: false, OPTIMAL: false}
            }
        }
        case 'SET_FASTS': {
            return {
                ...state, filters: {...state.filters, FASTS: action.value, POOR: false, OPTIMAL: false}
            }
        }
        case 'SET_OPTIMAL': {
            return {
                ...state, filters: {...state.filters, OPTIMAL: action.value, POOR: false, FASTS: false}
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
                ...state, stops: {...state.stops, all: action.value, null: false, one: false, two: false, three: false}
            }
        }
        case 'SET_NULL': {
            debugger
            if (!action.value && !state.stops.one && !state.stops.two && !state.stops.three) {
                return {
                    ...state,
                    stops: {...state.stops, all: true, null: action.value}
                }
            } else {
                return {
                    ...state, stops: {
                        ...state.stops, null: action.value,
                        all: false
                    }
                }
            }
        }
        case 'SET_ONE': {
            if (!action.value && !state.stops.null && !state.stops.two && !state.stops.three) {
                return {
                    ...state,
                    stops: {...state.stops, all: true, one: action.value}
                }
            } else {
                return {
                    ...state, stops: {
                        ...state.stops, one: action.value,
                        all: false
                    }
                }
            }
        }
        case 'SET_TWO': {
            debugger
            if (!action.value && !state.stops.null && !state.stops.one && !state.stops.three) {
                return {
                    ...state,
                    stops: {...state.stops, all: true, two: action.value}
                }
            } else {
                return {
                    ...state, stops: {
                        ...state.stops, two: action.value,
                        all: false
                    }
                }
            }
        }
        case 'SET_THREE': {
            debugger
            if (!action.value && !state.stops.null && !state.stops.one && !state.stops.two) {
                return {
                    ...state,
                    stops: {...state.stops, all: true, three: action.value}
                }
            } else {
                return {
                    ...state, stops: {
                        ...state.stops, three: action.value,
                        all: false
                    }
                }
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
export const setPoorTicketsAC = (value: boolean) => ({
    type: 'SET_POOR', value
} as const)

export type setFastsTicketsACType = ReturnType<typeof setFastsTicketsAC>
export const setFastsTicketsAC = (value: boolean) => ({
    type: 'SET_FASTS', value
} as const)

export type setOptimalTicketsACType = ReturnType<typeof setOptimalTicketsAC>
export const setOptimalTicketsAC = (value: boolean) => ({
    type: 'SET_OPTIMAL', value
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
export const setAllAC = (value: boolean) => ({
    type: 'SET_ALL', value
} as const)
export type setNullACType = ReturnType<typeof setNullAC>
export const setNullAC = (value: boolean) => ({
    type: 'SET_NULL', value
} as const)
export type setOneACType = ReturnType<typeof setOneAC>
export const setOneAC = (value: boolean) => ({
    type: 'SET_ONE', value
} as const)
export type setTwoACType = ReturnType<typeof setTwoAC>
export const setTwoAC = (value: boolean) => ({
    type: 'SET_TWO', value
} as const)
export type setThreeACType = ReturnType<typeof setThreeAC>
export const setThreeAC = (value: boolean) => ({
    type: 'SET_THREE', value
} as const)
