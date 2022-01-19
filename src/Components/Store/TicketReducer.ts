import {initailState} from "../Api/InitState";

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
// const initailState: Array<InitailTicketsType> = [{

const initState: InitTicketsType = {
    items: [] as Array<ItemsType>
}
//carrier: "TG"
// price: 86478
// segments: [{origin: "MOW", destination: "HKT", date: "2022-01-22T16:51:00.000Z", stops: [], duration: 699},…]
// 0: {origin: "MOW", destination: "HKT", date: "2022-01-22T16:51:00.000Z", stops: [], duration: 699}
// date: "2022-01-22T16:51:00.000Z"
// destination: "HKT"
// duration: 699
// origin: "MOW"
// stops: []
// 1: {origin: "HKT", destination: "MOW", date: "2022-02-11T16:52:00.000Z", stops: ["SIN", "DXB"],…}
// date: "2022-02-11T16:52:00.000Z"
// destination: "MOW"
// duration: 1659
// origin: "HKT"
// stops: ["SIN", "DXB"]

//     price:49480,
//     carrier:"TG",
//     segments:
//         [
//         {
//             origin:"MOW",
//             destination:"HKT",
//             date:"2022-01-22T10:47:00.000Z",
//             stops:["AUH"],
//             duration:1312
//           },
//             {
//             origin:"HKT",
//             destination:"MOW",
//             date:"2022-02-10T22:11:00.000Z",
//             stops:["KUL","SHA"],
//             duration:1002
//             }
//                 ]
// }] as Array<InitailTicketsType>

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
            // return state.map(m => ({...m})).sort((a, b) => a.price > b.price ? 1 : -1)
            return {...state, items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price ? 1 : -1)}
        }
        case 'SET_FASTS': {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
            // return state.map(m => ({...m})).sort((a, b) => a.segments[0].duration > b.segments[0].duration && a.segments[1].duration > b.segments[1].duration ? 1 : -1)
        }
        case 'SET_OPTIMAL': {
            return {
                ...state,
                items: state.items.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration || a.segments[1].duration > b.segments[1].duration ? 1 : -1)
            }
            // return state.map(m => ({...m})).sort((a, b) => a.price > b.price && a.segments[0].duration > b.segments[0].duration || a.segments[1].duration > b.segments[1].duration ? 1 : -1)
        }
        // case 'SET_ALL': {
        //     return {...state}
        // }
        // case 'SET_NULL': {
        //     return state.filter(f => f.segments[0].stops.length === 0 && f.segments[1].stops.length === 0)
        // }
        // case 'SET_ONE': {
        //     return state.filter(f => f.segments[0].stops.length <2 && f.segments[1].stops.length <2)
        // }
        // case 'SET_TWO': {
        //     return state.filter(f => f.segments[0].stops.length <3 && f.segments[1].stops.length <3)
        // }
        // case 'SET_THREE': {
        //     return state.filter(f => f.segments[0].stops.length <4 && f.segments[1].stops.length <4)
        // }
        default:
            return state
    }
}
type ActionsType =
    setTicketsACType
    | setPoorTicketsACType
    | setFastsTicketsACType
    | setOptimalTicketsACType
// | setAllTicketsACType
// | setNullTicketsACType
// | setOneTicketsACType
// | setTwoTicketsACType
// | setThreeTicketsACType

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

// export type setAllTicketsACType = ReturnType<typeof setAllTicketsAC>
// export const setAllTicketsAC = () => ({
//     type: 'SET_ALL',
// } as const)
//
// export type setNullTicketsACType = ReturnType<typeof setNullTicketsAC>
// export const setNullTicketsAC = () => ({
//     type: 'SET_NULL',
// } as const)
//
// export type setOneTicketsACType = ReturnType<typeof setOneTicketsAC>
// export const setOneTicketsAC = () => ({
//     type: 'SET_ONE',
// } as const)
//
// export type setTwoTicketsACType = ReturnType<typeof setTwoTicketsAC>
// export const setTwoTicketsAC = () => ({
//     type: 'SET_TWO',
// } as const)
//
// export type setThreeTicketsACType = ReturnType<typeof setThreeTicketsAC>
// export const setThreeTicketsAC = () => ({
//     type: 'SET_THREE',
// } as const)