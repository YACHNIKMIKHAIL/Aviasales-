type InitailTicketsType = {
    // Цена в рублях
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
        {
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
        },
        {
            // Код города (iata)
            origin: string
            // Код города (iata)
            destination: string
            // Дата и время вылета обратно
            date: string
            // Массив кодов (iata) городов с пересадками
            stops: string[]
            // Общее время перелёта в минутах
            duration: number
        }
    ]
}
const initailState: InitailTicketsType = {
    price:49480,
    carrier:"TG",
    segments:
        [{origin:"MOW",
            destination:"HKT",
            date:"2022-01-22T10:47:00.000Z",
            stops:["AUH"],
            duration:1312},
            {origin:"HKT",
                destination:"MOW",
                date:"2022-02-10T22:11:00.000Z",
                stops:["KUL","SHA"],
                duration:1002}]
} as InitailTicketsType

export const ticketReducer = (state = initailState, action: any): InitailTicketsType => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default:
            return state
    }
}