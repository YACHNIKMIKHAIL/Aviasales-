import {InitTicketsType} from "../Store/TicketReducer";

export const initailState: InitTicketsType = {
    items: [
        {
            price: 49480,
            carrier: "TG",
            segments:
                [{
                    origin: "MOW",
                    destination: "HKT",
                    date: "2022-01-22T10:47:00.000Z",
                    stops: ["AUH"],
                    duration: 1312
                },
                    {
                        origin: "HKT",
                        destination: "MOW",
                        date: "2022-02-10T22:11:00.000Z",
                        stops: ["KUL", "SHA"],
                        duration: 1002
                    }]
        },
        {
            price: 98185,
            carrier: "EK",
            segments:
                [{
                    origin: "MOW",
                    destination: "HKT",
                    date: "2022-01-22T02:15:00.000Z",
                    stops: ["AUH"],
                    duration: 1805
                },
                    {
                        origin: "HKT",
                        destination: "MOW",
                        date: "2022-02-11T09:08:00.000Z",
                        stops: ["DXB", "KUL"],
                        duration: 942
                    }]
        },
        {
            "price": 99421,
            "carrier": "TG",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T12:05:00.000Z",
                "stops": ["IST", "KUL"],
                "duration": 1379
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T02:46:00.000Z",
                "stops": ["BKK"],
                "duration": 1404
            }]
        },
        {
            "price": 39224,
            "carrier": "EK",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T12:44:00.000Z",
                "stops": ["IST", "BKK"],
                "duration": 1303
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T09:54:00.000Z",
                "stops": ["AUH", "KUL"],
                "duration": 1244
            }]
        },
        {
            "price": 57571,
            "carrier": "TG",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T17:20:00.000Z",
                "stops": ["KUL", "HKG", "DXB"],
                "duration": 1799
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T05:10:00.000Z",
                "stops": [],
                "duration": 689
            }]
        },
        {
            "price": 61602,
            "carrier": "TG",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T10:01:00.000Z",
                "stops": ["BKK", "IST", "SIN"],
                "duration": 1026
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T08:50:00.000Z",
                "stops": ["HKG", "IST"],
                "duration": 1207
            }]
        },
        {
            "price": 91943,
            "carrier": "MH",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T08:56:00.000Z",
                "stops": ["HKG", "SIN"],
                "duration": 1853
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T14:59:00.000Z",
                "stops": ["HKG", "SHA", "SIN"],
                "duration": 748
            }]
        },
        {
            "price": 19494,
            "carrier": "EK",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T16:35:00.000Z",
                "stops": ["KUL"],
                "duration": 1366
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T03:09:00.000Z",
                "stops": [],
                "duration": 1769
            }]
        },
        {
            "price": 37399,
            "carrier": "FV",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-21T22:20:00.000Z",
                "stops": [],
                "duration": 1405
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-10T21:08:00.000Z",
                "stops": [],
                "duration": 988
            }]
        },
        {
            "price": 35439,
            "carrier": "SU",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T06:11:00.000Z",
                "stops": ["AUH", "DXB"],
                "duration": 1842
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T17:31:00.000Z",
                "stops": [],
                "duration": 1984
            }]
        },
        {
            "price": 92284,
            "carrier": "EK",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T17:50:00.000Z",
                "stops": [],
                "duration": 917
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T09:43:00.000Z",
                "stops": [],
                "duration": 1267
            }]
        },
        {
            "price": 54832,
            "carrier": "EK",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-21T21:42:00.000Z",
                "stops": ["AUH", "SHA"],
                "duration": 1357
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T02:56:00.000Z",
                "stops": [],
                "duration": 1957
            }]
        },
        {
            "price": 27460,
            "carrier": "SU",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T09:56:00.000Z",
                "stops": [],
                "duration": 725
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T08:42:00.000Z",
                "stops": ["DXB", "KUL"],
                "duration": 809
            }]
        },
        {
            "price": 97190,
            "carrier": "FV",
            "segments": [{
                "origin": "MOW",
                "destination": "HKT",
                "date": "2022-01-22T13:18:00.000Z",
                "stops": ["BKK"],
                "duration": 1262
            }, {
                "origin": "HKT",
                "destination": "MOW",
                "date": "2022-02-11T12:34:00.000Z",
                "stops": [],
                "duration": 1865
            }]
        },
    ]
}