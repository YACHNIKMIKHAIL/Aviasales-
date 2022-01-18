import {InitailTicketsType} from "../Store/TicketReducer";

export const initailState: Array<InitailTicketsType> = [{
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
    }, {
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
    }, {
        "price": 57571,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:20:00.000Z",
            "stops": ["KUL", "HKG", "DXB"],
            "duration": 1799
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:10:00.000Z", "stops": [], "duration": 689}]
    }, {
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
    }, {
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
    }, {
        "price": 19494,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:35:00.000Z",
            "stops": ["KUL"],
            "duration": 1366
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T03:09:00.000Z", "stops": [], "duration": 1769}]
    }, {
        "price": 37399,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:20:00.000Z",
            "stops": [],
            "duration": 1405
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:08:00.000Z", "stops": [], "duration": 988}]
    }, {
        "price": 35439,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:11:00.000Z",
            "stops": ["AUH", "DXB"],
            "duration": 1842
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:31:00.000Z", "stops": [], "duration": 1984}]
    }, {
        "price": 92284,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:50:00.000Z",
            "stops": [],
            "duration": 917
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:43:00.000Z", "stops": [], "duration": 1267}]
    }, {
        "price": 54832,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:42:00.000Z",
            "stops": ["AUH", "SHA"],
            "duration": 1357
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T02:56:00.000Z", "stops": [], "duration": 1957}]
    }, {
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
    }, {
        "price": 97190,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:18:00.000Z",
            "stops": ["BKK"],
            "duration": 1262
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:34:00.000Z", "stops": [], "duration": 1865}]
    }, {
        "price": 75574,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:50:00.000Z",
            "stops": ["HKG"],
            "duration": 1661
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:28:00.000Z",
            "stops": ["HKG", "KUL", "SIN"],
            "duration": 754
        }]
    }, {
        "price": 63537,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:28:00.000Z",
            "stops": ["DXB"],
            "duration": 1633
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:17:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1354
        }]
    }, {
        "price": 83267,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:30:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1898
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:06:00.000Z",
            "stops": ["DXB"],
            "duration": 1309
        }]
    }, {
        "price": 85872,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:49:00.000Z",
            "stops": ["SHA"],
            "duration": 895
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:00:00.000Z",
            "stops": ["SIN"],
            "duration": 1195
        }]
    }, {
        "price": 64963,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:17:00.000Z",
            "stops": [],
            "duration": 1212
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:29:00.000Z",
            "stops": ["SHA", "IST", "HKG"],
            "duration": 1607
        }]
    }, {
        "price": 94503,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:16:00.000Z",
            "stops": ["SHA", "AUH", "BKK"],
            "duration": 981
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:45:00.000Z", "stops": [], "duration": 995}]
    }, {
        "price": 70652,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:59:00.000Z",
            "stops": ["HKG"],
            "duration": 1761
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:55:00.000Z", "stops": [], "duration": 845}]
    }, {
        "price": 92298,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:47:00.000Z",
            "stops": ["KUL", "DXB", "SHA"],
            "duration": 1827
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:39:00.000Z",
            "stops": ["SHA", "AUH"],
            "duration": 1444
        }]
    }, {
        "price": 54149,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:12:00.000Z",
            "stops": ["SHA"],
            "duration": 905
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:51:00.000Z",
            "stops": ["HKG"],
            "duration": 1405
        }]
    }, {
        "price": 92883,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:58:00.000Z",
            "stops": ["SIN", "KUL", "DXB"],
            "duration": 818
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:34:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 1605
        }]
    }, {
        "price": 29213,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:34:00.000Z",
            "stops": ["BKK", "AUH", "KUL"],
            "duration": 1743
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:17:00.000Z", "stops": [], "duration": 922}]
    }, {
        "price": 46049,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:45:00.000Z",
            "stops": ["AUH"],
            "duration": 1261
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:58:00.000Z",
            "stops": ["SIN", "SHA", "DXB"],
            "duration": 1594
        }]
    }, {
        "price": 78032,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:09:00.000Z",
            "stops": ["HKG", "DXB", "AUH"],
            "duration": 1282
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:59:00.000Z",
            "stops": ["AUH", "HKG", "SIN"],
            "duration": 1170
        }]
    }, {
        "price": 18197,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:00:00.000Z",
            "stops": ["AUH", "SHA", "HKG"],
            "duration": 870
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:58:00.000Z", "stops": [], "duration": 1659}]
    }, {
        "price": 98185,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:15:00.000Z",
            "stops": ["AUH"],
            "duration": 1805
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:08:00.000Z",
            "stops": ["DXB", "KUL"],
            "duration": 942
        }]
    }, {
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
    }, {
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
    }, {
        "price": 57571,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:20:00.000Z",
            "stops": ["KUL", "HKG", "DXB"],
            "duration": 1799
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:10:00.000Z", "stops": [], "duration": 689}]
    }, {
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
    }, {
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
    }, {
        "price": 19494,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:35:00.000Z",
            "stops": ["KUL"],
            "duration": 1366
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T03:09:00.000Z", "stops": [], "duration": 1769}]
    }, {
        "price": 37399,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:20:00.000Z",
            "stops": [],
            "duration": 1405
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:08:00.000Z", "stops": [], "duration": 988}]
    }, {
        "price": 35439,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:11:00.000Z",
            "stops": ["AUH", "DXB"],
            "duration": 1842
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:31:00.000Z", "stops": [], "duration": 1984}]
    }, {
        "price": 92284,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:50:00.000Z",
            "stops": [],
            "duration": 917
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:43:00.000Z", "stops": [], "duration": 1267}]
    }, {
        "price": 54832,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:42:00.000Z",
            "stops": ["AUH", "SHA"],
            "duration": 1357
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T02:56:00.000Z", "stops": [], "duration": 1957}]
    }, {
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
    }, {
        "price": 97190,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:18:00.000Z",
            "stops": ["BKK"],
            "duration": 1262
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:34:00.000Z", "stops": [], "duration": 1865}]
    }, {
        "price": 75574,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:50:00.000Z",
            "stops": ["HKG"],
            "duration": 1661
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:28:00.000Z",
            "stops": ["HKG", "KUL", "SIN"],
            "duration": 754
        }]
    }, {
        "price": 63537,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:28:00.000Z",
            "stops": ["DXB"],
            "duration": 1633
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:17:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1354
        }]
    }, {
        "price": 83267,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:30:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1898
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:06:00.000Z",
            "stops": ["DXB"],
            "duration": 1309
        }]
    }, {
        "price": 85872,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:49:00.000Z",
            "stops": ["SHA"],
            "duration": 895
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:00:00.000Z",
            "stops": ["SIN"],
            "duration": 1195
        }]
    }, {
        "price": 64963,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:17:00.000Z",
            "stops": [],
            "duration": 1212
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:29:00.000Z",
            "stops": ["SHA", "IST", "HKG"],
            "duration": 1607
        }]
    }, {
        "price": 94503,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:16:00.000Z",
            "stops": ["SHA", "AUH", "BKK"],
            "duration": 981
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:45:00.000Z", "stops": [], "duration": 995}]
    }, {
        "price": 70652,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:59:00.000Z",
            "stops": ["HKG"],
            "duration": 1761
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:55:00.000Z", "stops": [], "duration": 845}]
    }, {
        "price": 92298,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:47:00.000Z",
            "stops": ["KUL", "DXB", "SHA"],
            "duration": 1827
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:39:00.000Z",
            "stops": ["SHA", "AUH"],
            "duration": 1444
        }]
    }, {
        "price": 54149,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:12:00.000Z",
            "stops": ["SHA"],
            "duration": 905
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:51:00.000Z",
            "stops": ["HKG"],
            "duration": 1405
        }]
    }, {
        "price": 92883,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:58:00.000Z",
            "stops": ["SIN", "KUL", "DXB"],
            "duration": 818
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:34:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 1605
        }]
    }, {
        "price": 29213,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:34:00.000Z",
            "stops": ["BKK", "AUH", "KUL"],
            "duration": 1743
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:17:00.000Z", "stops": [], "duration": 922}]
    }, {
        "price": 46049,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:45:00.000Z",
            "stops": ["AUH"],
            "duration": 1261
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:58:00.000Z",
            "stops": ["SIN", "SHA", "DXB"],
            "duration": 1594
        }]
    }, {
        "price": 78032,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:09:00.000Z",
            "stops": ["HKG", "DXB", "AUH"],
            "duration": 1282
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:59:00.000Z",
            "stops": ["AUH", "HKG", "SIN"],
            "duration": 1170
        }]
    }, {
        "price": 18197,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:00:00.000Z",
            "stops": ["AUH", "SHA", "HKG"],
            "duration": 870
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:58:00.000Z", "stops": [], "duration": 1659}]
    }, {
        "price": 90120,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:15:00.000Z",
            "stops": ["BKK"],
            "duration": 1963
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:22:00.000Z",
            "stops": ["AUH", "BKK"],
            "duration": 1408
        }]
    }, {
        "price": 50681,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:26:00.000Z",
            "stops": ["DXB", "HKG"],
            "duration": 1972
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:00:00.000Z",
            "stops": ["KUL"],
            "duration": 1037
        }]
    }, {
        "price": 26164,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:55:00.000Z",
            "stops": ["HKG", "SHA", "KUL"],
            "duration": 1017
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:47:00.000Z",
            "stops": ["HKG", "IST"],
            "duration": 1796
        }]
    }, {
        "price": 98136,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:39:00.000Z",
            "stops": ["HKG", "AUH", "BKK"],
            "duration": 1157
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:55:00.000Z", "stops": [], "duration": 1865}]
    }, {
        "price": 90426,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:22:00.000Z",
            "stops": ["AUH", "SHA"],
            "duration": 1937
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:37:00.000Z",
            "stops": ["HKG", "IST"],
            "duration": 1954
        }]
    }, {
        "price": 45298,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:20:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 932
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:56:00.000Z", "stops": [], "duration": 947}]
    }, {
        "price": 47257,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:57:00.000Z",
            "stops": ["SHA"],
            "duration": 1049
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:06:00.000Z",
            "stops": ["DXB"],
            "duration": 1189
        }]
    }, {
        "price": 98062,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:52:00.000Z",
            "stops": ["DXB", "SHA", "IST"],
            "duration": 1001
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:00:00.000Z",
            "stops": ["SHA", "SIN", "AUH"],
            "duration": 875
        }]
    }, {
        "price": 75295,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:47:00.000Z",
            "stops": ["KUL", "SHA", "IST"],
            "duration": 630
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:02:00.000Z", "stops": [], "duration": 778}]
    }, {
        "price": 80662,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:10:00.000Z",
            "stops": ["SHA"],
            "duration": 675
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:40:00.000Z",
            "stops": ["BKK"],
            "duration": 742
        }]
    }, {
        "price": 74679,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:56:00.000Z",
            "stops": [],
            "duration": 1738
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:19:00.000Z",
            "stops": ["BKK", "DXB", "IST"],
            "duration": 1964
        }]
    }, {
        "price": 96329,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:30:00.000Z",
            "stops": ["KUL", "AUH", "DXB"],
            "duration": 1449
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:06:00.000Z",
            "stops": ["KUL"],
            "duration": 758
        }]
    }, {
        "price": 24092,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:22:00.000Z",
            "stops": ["AUH", "BKK"],
            "duration": 1918
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T02:37:00.000Z", "stops": [], "duration": 1948}]
    }, {
        "price": 48877,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:08:00.000Z",
            "stops": ["SIN"],
            "duration": 1116
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T11:27:00.000Z", "stops": [], "duration": 1170}]
    }, {
        "price": 35646,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:55:00.000Z",
            "stops": ["SHA"],
            "duration": 1348
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:16:00.000Z", "stops": [], "duration": 1841}]
    }, {
        "price": 61469,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:55:00.000Z",
            "stops": ["DXB", "AUH", "BKK"],
            "duration": 886
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:50:00.000Z", "stops": [], "duration": 1697}]
    }, {
        "price": 55202,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:16:00.000Z",
            "stops": ["HKG"],
            "duration": 682
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:33:00.000Z", "stops": [], "duration": 1543}]
    }, {
        "price": 83685,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:16:00.000Z",
            "stops": ["AUH"],
            "duration": 1002
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:46:00.000Z",
            "stops": ["BKK", "KUL", "HKG"],
            "duration": 1281
        }]
    }, {
        "price": 85903,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:20:00.000Z",
            "stops": ["SHA"],
            "duration": 1218
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:45:00.000Z",
            "stops": ["IST"],
            "duration": 1184
        }]
    }, {
        "price": 99650,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:50:00.000Z",
            "stops": ["HKG", "SIN"],
            "duration": 1295
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:06:00.000Z", "stops": [], "duration": 1149}]
    }, {
        "price": 74748,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:11:00.000Z",
            "stops": [],
            "duration": 1828
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:13:00.000Z",
            "stops": ["SIN", "HKG", "SHA"],
            "duration": 1024
        }]
    }, {
        "price": 52437,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:52:00.000Z",
            "stops": ["HKG"],
            "duration": 654
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T15:24:00.000Z", "stops": [], "duration": 1890}]
    }, {
        "price": 30386,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:35:00.000Z",
            "stops": ["KUL"],
            "duration": 811
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:47:00.000Z",
            "stops": ["DXB"],
            "duration": 1008
        }]
    }, {
        "price": 84420,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:39:00.000Z",
            "stops": [],
            "duration": 891
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:57:00.000Z",
            "stops": ["DXB", "HKG", "BKK"],
            "duration": 1698
        }]
    }, {
        "price": 83801,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:58:00.000Z",
            "stops": ["SHA"],
            "duration": 1006
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:23:00.000Z",
            "stops": ["DXB"],
            "duration": 1470
        }]
    }, {
        "price": 45341,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:02:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 1709
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:01:00.000Z",
            "stops": ["IST", "SHA"],
            "duration": 1404
        }]
    }, {
        "price": 19293,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:11:00.000Z",
            "stops": ["AUH", "SHA", "HKG"],
            "duration": 997
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:55:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1947
        }]
    }, {
        "price": 53400,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:48:00.000Z",
            "stops": ["SIN", "SHA"],
            "duration": 1197
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:49:00.000Z",
            "stops": ["KUL", "IST"],
            "duration": 1767
        }]
    }, {
        "price": 35507,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:10:00.000Z",
            "stops": ["BKK"],
            "duration": 839
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:08:00.000Z",
            "stops": ["KUL", "SIN", "SHA"],
            "duration": 1043
        }]
    }, {
        "price": 60262,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:49:00.000Z",
            "stops": [],
            "duration": 1677
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:46:00.000Z", "stops": [], "duration": 1380}]
    }, {
        "price": 60011,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:49:00.000Z",
            "stops": [],
            "duration": 1959
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:52:00.000Z",
            "stops": ["KUL", "BKK"],
            "duration": 731
        }]
    }, {
        "price": 31066,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:53:00.000Z",
            "stops": ["DXB", "SHA", "AUH"],
            "duration": 651
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:53:00.000Z",
            "stops": ["BKK"],
            "duration": 892
        }]
    }, {
        "price": 25063,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:29:00.000Z",
            "stops": [],
            "duration": 1215
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:25:00.000Z",
            "stops": ["AUH", "HKG", "IST"],
            "duration": 922
        }]
    }, {
        "price": 19199,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:49:00.000Z",
            "stops": ["AUH"],
            "duration": 1765
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:50:00.000Z",
            "stops": ["BKK", "AUH", "SHA"],
            "duration": 1491
        }]
    }, {
        "price": 98836,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:55:00.000Z",
            "stops": [],
            "duration": 1006
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:03:00.000Z",
            "stops": ["DXB", "BKK", "HKG"],
            "duration": 1430
        }]
    }, {
        "price": 69226,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:12:00.000Z",
            "stops": [],
            "duration": 1186
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:28:00.000Z",
            "stops": ["SHA", "HKG"],
            "duration": 1718
        }]
    }, {
        "price": 89525,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:28:00.000Z",
            "stops": ["HKG", "KUL"],
            "duration": 802
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:04:00.000Z",
            "stops": ["SHA", "IST", "SIN"],
            "duration": 1072
        }]
    }, {
        "price": 26955,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:15:00.000Z",
            "stops": ["SIN", "DXB", "HKG"],
            "duration": 1586
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:40:00.000Z",
            "stops": ["KUL", "AUH", "DXB"],
            "duration": 1805
        }]
    }, {
        "price": 17402,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:02:00.000Z",
            "stops": ["DXB"],
            "duration": 667
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:16:00.000Z",
            "stops": ["BKK"],
            "duration": 978
        }]
    }, {
        "price": 72338,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:12:00.000Z",
            "stops": [],
            "duration": 1308
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:00:00.000Z",
            "stops": ["SHA", "BKK"],
            "duration": 673
        }]
    }, {
        "price": 22522,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:26:00.000Z",
            "stops": ["SHA", "KUL", "BKK"],
            "duration": 1170
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:00:00.000Z", "stops": [], "duration": 1610}]
    }, {
        "price": 70145,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:19:00.000Z",
            "stops": ["KUL"],
            "duration": 815
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:28:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 849
        }]
    }, {
        "price": 58199,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:02:00.000Z",
            "stops": ["DXB"],
            "duration": 800
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:02:00.000Z",
            "stops": ["IST"],
            "duration": 1228
        }]
    }, {
        "price": 77629,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:15:00.000Z",
            "stops": ["HKG", "KUL"],
            "duration": 1456
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:17:00.000Z",
            "stops": ["SIN", "IST", "KUL"],
            "duration": 1070
        }]
    }, {
        "price": 74882,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:05:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 1592
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:29:00.000Z",
            "stops": ["HKG"],
            "duration": 1398
        }]
    }, {
        "price": 49921,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:02:00.000Z",
            "stops": ["KUL", "BKK", "DXB"],
            "duration": 1598
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:07:00.000Z",
            "stops": ["KUL", "AUH", "BKK"],
            "duration": 1587
        }]
    }, {
        "price": 32939,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:36:00.000Z",
            "stops": ["AUH"],
            "duration": 1196
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:37:00.000Z",
            "stops": ["IST"],
            "duration": 1313
        }]
    }, {
        "price": 49023,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:16:00.000Z",
            "stops": ["IST", "HKG"],
            "duration": 1163
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:47:00.000Z", "stops": [], "duration": 1530}]
    }, {
        "price": 84616,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:37:00.000Z",
            "stops": ["DXB"],
            "duration": 1669
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:10:00.000Z",
            "stops": ["BKK"],
            "duration": 1642
        }]
    }, {
        "price": 69920,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:51:00.000Z",
            "stops": ["KUL"],
            "duration": 1635
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:10:00.000Z", "stops": [], "duration": 1724}]
    }, {
        "price": 24687,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:41:00.000Z",
            "stops": ["KUL", "AUH", "HKG"],
            "duration": 1822
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:55:00.000Z", "stops": [], "duration": 619}]
    }, {
        "price": 87640,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:53:00.000Z",
            "stops": ["BKK", "AUH", "HKG"],
            "duration": 860
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:01:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1701
        }]
    }, {
        "price": 86836,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:44:00.000Z",
            "stops": ["IST", "SHA", "AUH"],
            "duration": 627
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:21:00.000Z", "stops": [], "duration": 1697}]
    }, {
        "price": 48154,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:19:00.000Z",
            "stops": ["SIN"],
            "duration": 1382
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:03:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 706
        }]
    }, {
        "price": 70621,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:08:00.000Z",
            "stops": ["KUL", "IST"],
            "duration": 1385
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:00:00.000Z",
            "stops": ["KUL"],
            "duration": 1948
        }]
    }, {
        "price": 57045,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:58:00.000Z",
            "stops": ["SIN"],
            "duration": 1247
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:40:00.000Z",
            "stops": ["AUH", "HKG"],
            "duration": 1146
        }]
    }, {
        "price": 81405,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:12:00.000Z",
            "stops": [],
            "duration": 1049
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:35:00.000Z",
            "stops": ["HKG", "IST"],
            "duration": 1917
        }]
    }, {
        "price": 44848,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:30:00.000Z",
            "stops": ["KUL", "AUH", "HKG"],
            "duration": 1395
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:07:00.000Z",
            "stops": ["IST"],
            "duration": 1321
        }]
    }, {
        "price": 99717,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:30:00.000Z",
            "stops": ["HKG"],
            "duration": 1626
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:57:00.000Z",
            "stops": ["SHA", "DXB", "KUL"],
            "duration": 1089
        }]
    }, {
        "price": 39636,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:23:00.000Z",
            "stops": ["BKK", "SIN", "AUH"],
            "duration": 1558
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:46:00.000Z",
            "stops": ["SHA", "AUH", "SIN"],
            "duration": 1614
        }]
    }, {
        "price": 25153,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:39:00.000Z",
            "stops": [],
            "duration": 1886
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:54:00.000Z",
            "stops": ["SHA"],
            "duration": 1152
        }]
    }, {
        "price": 55955,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:56:00.000Z",
            "stops": ["BKK", "DXB", "HKG"],
            "duration": 1302
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:09:00.000Z",
            "stops": ["AUH"],
            "duration": 1523
        }]
    }, {
        "price": 22857,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:57:00.000Z",
            "stops": ["SIN", "HKG", "DXB"],
            "duration": 1599
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:42:00.000Z",
            "stops": ["DXB", "KUL"],
            "duration": 852
        }]
    }, {
        "price": 42890,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:01:00.000Z",
            "stops": ["HKG"],
            "duration": 1324
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:07:00.000Z",
            "stops": ["SIN"],
            "duration": 809
        }]
    }, {
        "price": 50761,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:36:00.000Z",
            "stops": ["DXB", "SHA"],
            "duration": 1875
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:00:00.000Z", "stops": [], "duration": 1563}]
    }, {
        "price": 41978,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:56:00.000Z",
            "stops": ["DXB"],
            "duration": 1791
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:05:00.000Z",
            "stops": ["SHA", "SIN", "BKK"],
            "duration": 1378
        }]
    }, {
        "price": 47727,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:52:00.000Z",
            "stops": ["SHA"],
            "duration": 1367
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:01:00.000Z",
            "stops": ["KUL"],
            "duration": 742
        }]
    }, {
        "price": 84166,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:04:00.000Z",
            "stops": ["KUL", "DXB", "SIN"],
            "duration": 807
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:10:00.000Z",
            "stops": ["BKK"],
            "duration": 1925
        }]
    }, {
        "price": 16774,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:55:00.000Z",
            "stops": ["AUH", "BKK", "SHA"],
            "duration": 829
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:16:00.000Z",
            "stops": ["KUL", "SIN", "DXB"],
            "duration": 1576
        }]
    }, {
        "price": 24999,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:04:00.000Z",
            "stops": ["BKK", "AUH", "KUL"],
            "duration": 1605
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:35:00.000Z", "stops": [], "duration": 1019}]
    }, {
        "price": 37947,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:41:00.000Z",
            "stops": ["IST", "AUH"],
            "duration": 1119
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:22:00.000Z", "stops": [], "duration": 1496}]
    }, {
        "price": 86603,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:01:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1631
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:19:00.000Z", "stops": [], "duration": 960}]
    }, {
        "price": 59782,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:17:00.000Z",
            "stops": ["KUL", "IST", "SHA"],
            "duration": 1823
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:48:00.000Z", "stops": [], "duration": 701}]
    }, {
        "price": 82003,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:31:00.000Z",
            "stops": [],
            "duration": 1924
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:04:00.000Z",
            "stops": ["DXB"],
            "duration": 1885
        }]
    }, {
        "price": 90801,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:14:00.000Z",
            "stops": ["AUH", "SHA"],
            "duration": 612
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:36:00.000Z",
            "stops": ["DXB"],
            "duration": 1464
        }]
    }, {
        "price": 36743,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:17:00.000Z",
            "stops": [],
            "duration": 941
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T06:10:00.000Z", "stops": [], "duration": 733}]
    }, {
        "price": 23600,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:27:00.000Z",
            "stops": ["BKK"],
            "duration": 1583
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:07:00.000Z",
            "stops": ["DXB", "IST"],
            "duration": 1782
        }]
    }, {
        "price": 99719,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:42:00.000Z",
            "stops": ["SHA", "HKG", "DXB"],
            "duration": 1440
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:14:00.000Z",
            "stops": ["DXB", "SHA", "AUH"],
            "duration": 813
        }]
    }, {
        "price": 18317,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:38:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 743
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:59:00.000Z",
            "stops": ["IST"],
            "duration": 1615
        }]
    }, {
        "price": 81284,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:48:00.000Z",
            "stops": ["BKK"],
            "duration": 763
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:27:00.000Z",
            "stops": ["DXB", "KUL", "SHA"],
            "duration": 1592
        }]
    }, {
        "price": 61646,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:30:00.000Z",
            "stops": ["SHA"],
            "duration": 1809
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:41:00.000Z", "stops": [], "duration": 1710}]
    }, {
        "price": 20410,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:00:00.000Z",
            "stops": ["DXB"],
            "duration": 1381
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:11:00.000Z",
            "stops": ["HKG"],
            "duration": 1038
        }]
    }, {
        "price": 36069,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:46:00.000Z",
            "stops": ["SHA", "AUH"],
            "duration": 1559
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:54:00.000Z",
            "stops": ["AUH", "IST"],
            "duration": 656
        }]
    }, {
        "price": 20238,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:01:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 865
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:32:00.000Z",
            "stops": ["SIN", "AUH", "IST"],
            "duration": 663
        }]
    }, {
        "price": 34583,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:29:00.000Z",
            "stops": ["DXB", "SIN"],
            "duration": 817
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:41:00.000Z",
            "stops": ["SIN"],
            "duration": 931
        }]
    }, {
        "price": 36396,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:56:00.000Z",
            "stops": ["SIN", "DXB"],
            "duration": 753
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:34:00.000Z",
            "stops": ["KUL"],
            "duration": 1540
        }]
    }, {
        "price": 33979,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:57:00.000Z",
            "stops": [],
            "duration": 635
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:24:00.000Z", "stops": [], "duration": 819}]
    }, {
        "price": 88864,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:10:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1705
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:15:00.000Z",
            "stops": ["IST", "BKK"],
            "duration": 1373
        }]
    }, {
        "price": 75844,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:19:00.000Z",
            "stops": ["KUL", "SHA", "BKK"],
            "duration": 1710
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:53:00.000Z",
            "stops": ["IST"],
            "duration": 875
        }]
    }, {
        "price": 16990,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:51:00.000Z",
            "stops": ["SIN"],
            "duration": 1042
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:06:00.000Z",
            "stops": ["BKK"],
            "duration": 732
        }]
    }, {
        "price": 45300,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:17:00.000Z",
            "stops": [],
            "duration": 1864
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:15:00.000Z",
            "stops": ["AUH", "SHA", "HKG"],
            "duration": 1298
        }]
    }, {
        "price": 47264,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:28:00.000Z",
            "stops": ["KUL", "AUH", "IST"],
            "duration": 1355
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:04:00.000Z",
            "stops": ["BKK"],
            "duration": 634
        }]
    }, {
        "price": 44362,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:20:00.000Z",
            "stops": ["IST", "DXB"],
            "duration": 1624
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:33:00.000Z",
            "stops": ["BKK", "SHA"],
            "duration": 1613
        }]
    }, {
        "price": 33157,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:47:00.000Z",
            "stops": ["IST", "SHA", "BKK"],
            "duration": 1123
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:48:00.000Z",
            "stops": ["SHA", "KUL", "SIN"],
            "duration": 1781
        }]
    }, {
        "price": 32041,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:45:00.000Z",
            "stops": ["SHA", "DXB"],
            "duration": 1904
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:07:00.000Z",
            "stops": ["IST", "SIN"],
            "duration": 1952
        }]
    }, {
        "price": 34414,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:09:00.000Z",
            "stops": [],
            "duration": 1720
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:22:00.000Z",
            "stops": ["HKG", "DXB", "KUL"],
            "duration": 1963
        }]
    }, {
        "price": 35436,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:43:00.000Z",
            "stops": [],
            "duration": 1553
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:14:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 1896
        }]
    }, {
        "price": 19976,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:40:00.000Z",
            "stops": ["DXB", "IST"],
            "duration": 625
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:25:00.000Z", "stops": [], "duration": 1044}]
    }, {
        "price": 31899,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:20:00.000Z",
            "stops": ["SIN"],
            "duration": 1637
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:18:00.000Z", "stops": [], "duration": 1166}]
    }, {
        "price": 15115,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:14:00.000Z",
            "stops": ["BKK", "HKG"],
            "duration": 1963
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:43:00.000Z", "stops": [], "duration": 1253}]
    }, {
        "price": 47254,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:25:00.000Z",
            "stops": ["SHA"],
            "duration": 1977
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:50:00.000Z",
            "stops": ["SIN"],
            "duration": 1405
        }]
    }, {
        "price": 65934,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:23:00.000Z",
            "stops": [],
            "duration": 1058
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:18:00.000Z",
            "stops": ["AUH", "DXB", "HKG"],
            "duration": 1063
        }]
    }, {
        "price": 67290,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:58:00.000Z",
            "stops": ["SIN", "AUH", "BKK"],
            "duration": 623
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:22:00.000Z",
            "stops": ["BKK"],
            "duration": 947
        }]
    }, {
        "price": 31386,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:43:00.000Z",
            "stops": ["KUL", "IST"],
            "duration": 621
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:55:00.000Z",
            "stops": ["KUL"],
            "duration": 874
        }]
    }, {
        "price": 94838,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:31:00.000Z",
            "stops": [],
            "duration": 761
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:18:00.000Z",
            "stops": ["SIN", "IST", "HKG"],
            "duration": 1481
        }]
    }, {
        "price": 46029,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:35:00.000Z",
            "stops": ["BKK", "SIN", "SHA"],
            "duration": 955
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:34:00.000Z",
            "stops": ["SIN", "DXB"],
            "duration": 932
        }]
    }, {
        "price": 99199,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:22:00.000Z",
            "stops": ["DXB"],
            "duration": 1963
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:56:00.000Z",
            "stops": ["KUL", "BKK", "AUH"],
            "duration": 637
        }]
    }, {
        "price": 17838,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:26:00.000Z",
            "stops": ["HKG", "DXB"],
            "duration": 764
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:16:00.000Z",
            "stops": ["DXB"],
            "duration": 1944
        }]
    }, {
        "price": 22860,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:49:00.000Z",
            "stops": ["IST", "SHA", "KUL"],
            "duration": 1356
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:34:00.000Z",
            "stops": ["AUH", "KUL", "DXB"],
            "duration": 971
        }]
    }, {
        "price": 34494,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:36:00.000Z",
            "stops": ["SHA", "BKK", "IST"],
            "duration": 1744
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:21:00.000Z", "stops": [], "duration": 1592}]
    }, {
        "price": 86592,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:43:00.000Z",
            "stops": ["BKK", "DXB", "AUH"],
            "duration": 757
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:46:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 1016
        }]
    }, {
        "price": 59041,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:49:00.000Z",
            "stops": ["SHA", "IST", "DXB"],
            "duration": 1358
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:43:00.000Z",
            "stops": ["AUH"],
            "duration": 1627
        }]
    }, {
        "price": 31800,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:17:00.000Z",
            "stops": ["BKK", "SIN"],
            "duration": 1011
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:46:00.000Z",
            "stops": ["BKK"],
            "duration": 1832
        }]
    }, {
        "price": 87387,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:52:00.000Z",
            "stops": ["SIN", "AUH", "IST"],
            "duration": 647
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:54:00.000Z",
            "stops": ["SHA", "AUH", "SIN"],
            "duration": 1764
        }]
    }, {
        "price": 87656,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:34:00.000Z",
            "stops": [],
            "duration": 1078
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:28:00.000Z", "stops": [], "duration": 1961}]
    }, {
        "price": 58439,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:42:00.000Z",
            "stops": ["SHA", "BKK", "KUL"],
            "duration": 1220
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:52:00.000Z",
            "stops": ["AUH"],
            "duration": 1072
        }]
    }, {
        "price": 92178,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:46:00.000Z",
            "stops": [],
            "duration": 959
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:42:00.000Z",
            "stops": ["BKK", "HKG"],
            "duration": 745
        }]
    }, {
        "price": 68026,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:44:00.000Z",
            "stops": ["AUH"],
            "duration": 1704
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:16:00.000Z",
            "stops": ["SHA", "IST"],
            "duration": 1919
        }]
    }, {
        "price": 81567,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:20:00.000Z",
            "stops": [],
            "duration": 864
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:35:00.000Z",
            "stops": ["KUL"],
            "duration": 1001
        }]
    }, {
        "price": 70790,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:29:00.000Z",
            "stops": [],
            "duration": 1803
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:46:00.000Z",
            "stops": ["AUH"],
            "duration": 816
        }]
    }, {
        "price": 25761,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:49:00.000Z",
            "stops": [],
            "duration": 983
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:57:00.000Z",
            "stops": ["KUL"],
            "duration": 843
        }]
    }, {
        "price": 31749,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:27:00.000Z",
            "stops": [],
            "duration": 1966
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:35:00.000Z",
            "stops": ["IST"],
            "duration": 1160
        }]
    }, {
        "price": 19516,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:38:00.000Z",
            "stops": ["IST"],
            "duration": 1518
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:39:00.000Z",
            "stops": ["IST", "BKK"],
            "duration": 615
        }]
    }, {
        "price": 90041,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:54:00.000Z",
            "stops": [],
            "duration": 964
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:32:00.000Z",
            "stops": ["HKG"],
            "duration": 1532
        }]
    }, {
        "price": 69210,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:15:00.000Z",
            "stops": ["DXB", "IST"],
            "duration": 701
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:45:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 904
        }]
    }, {
        "price": 32135,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:46:00.000Z",
            "stops": ["DXB", "KUL"],
            "duration": 1843
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:50:00.000Z", "stops": [], "duration": 1708}]
    }, {
        "price": 80625,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:01:00.000Z",
            "stops": ["IST", "BKK"],
            "duration": 1838
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:55:00.000Z",
            "stops": ["BKK", "SIN"],
            "duration": 1288
        }]
    }, {
        "price": 15144,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:20:00.000Z",
            "stops": ["BKK"],
            "duration": 1149
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:28:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1844
        }]
    }, {
        "price": 99696,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:53:00.000Z",
            "stops": ["DXB"],
            "duration": 901
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:46:00.000Z",
            "stops": ["IST", "SHA", "SIN"],
            "duration": 1823
        }]
    }, {
        "price": 33472,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:34:00.000Z",
            "stops": ["BKK"],
            "duration": 1889
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:49:00.000Z",
            "stops": ["BKK", "HKG", "IST"],
            "duration": 1653
        }]
    }, {
        "price": 92636,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:04:00.000Z",
            "stops": ["AUH"],
            "duration": 1429
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:42:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 1210
        }]
    }, {
        "price": 22863,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:00:00.000Z",
            "stops": ["KUL"],
            "duration": 957
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:58:00.000Z",
            "stops": ["SIN", "HKG", "AUH"],
            "duration": 1505
        }]
    }, {
        "price": 84679,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:22:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 798
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:15:00.000Z",
            "stops": ["DXB", "HKG", "SHA"],
            "duration": 768
        }]
    }, {
        "price": 34772,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:53:00.000Z",
            "stops": ["SHA", "DXB", "SIN"],
            "duration": 1720
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:38:00.000Z",
            "stops": ["HKG", "DXB", "BKK"],
            "duration": 1604
        }]
    }, {
        "price": 89895,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:13:00.000Z",
            "stops": ["AUH", "HKG", "SIN"],
            "duration": 680
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:48:00.000Z",
            "stops": ["SHA", "IST"],
            "duration": 1748
        }]
    }, {
        "price": 80601,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:57:00.000Z",
            "stops": ["IST"],
            "duration": 1000
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:01:00.000Z", "stops": [], "duration": 1284}]
    }, {
        "price": 70183,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:13:00.000Z",
            "stops": ["SHA", "DXB", "IST"],
            "duration": 1669
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:32:00.000Z",
            "stops": ["HKG", "KUL", "SIN"],
            "duration": 1390
        }]
    }, {
        "price": 78597,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:47:00.000Z",
            "stops": ["IST", "AUH", "HKG"],
            "duration": 1851
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:32:00.000Z",
            "stops": ["IST"],
            "duration": 1788
        }]
    }, {
        "price": 96873,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:28:00.000Z",
            "stops": [],
            "duration": 1172
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:26:00.000Z",
            "stops": ["HKG"],
            "duration": 786
        }]
    }, {
        "price": 21636,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:30:00.000Z",
            "stops": ["SHA"],
            "duration": 1771
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:44:00.000Z", "stops": [], "duration": 682}]
    }, {
        "price": 18946,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:19:00.000Z",
            "stops": ["HKG"],
            "duration": 1381
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:54:00.000Z",
            "stops": ["SIN", "KUL", "IST"],
            "duration": 1656
        }]
    }, {
        "price": 63063,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:19:00.000Z",
            "stops": ["IST"],
            "duration": 1667
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:19:00.000Z", "stops": [], "duration": 1771}]
    }, {
        "price": 43636,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:43:00.000Z",
            "stops": ["DXB"],
            "duration": 1771
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:35:00.000Z", "stops": [], "duration": 898}]
    }, {
        "price": 25652,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:11:00.000Z",
            "stops": [],
            "duration": 1077
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:02:00.000Z",
            "stops": ["DXB", "KUL", "SHA"],
            "duration": 1663
        }]
    }, {
        "price": 86962,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:46:00.000Z",
            "stops": ["AUH"],
            "duration": 797
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:07:00.000Z",
            "stops": ["SHA", "HKG", "SIN"],
            "duration": 1524
        }]
    }, {
        "price": 58043,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:04:00.000Z",
            "stops": [],
            "duration": 761
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:46:00.000Z",
            "stops": ["SIN"],
            "duration": 1481
        }]
    }, {
        "price": 53115,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:16:00.000Z",
            "stops": ["SHA"],
            "duration": 1469
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:32:00.000Z", "stops": [], "duration": 1706}]
    }, {
        "price": 90606,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:36:00.000Z",
            "stops": ["SHA"],
            "duration": 1755
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:41:00.000Z",
            "stops": ["BKK"],
            "duration": 956
        }]
    }, {
        "price": 22718,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:08:00.000Z",
            "stops": ["SHA", "AUH", "IST"],
            "duration": 1267
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:43:00.000Z", "stops": [], "duration": 646}]
    }, {
        "price": 69276,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:28:00.000Z",
            "stops": ["KUL"],
            "duration": 1078
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:51:00.000Z",
            "stops": ["SIN", "DXB", "SHA"],
            "duration": 1507
        }]
    }, {
        "price": 80007,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:30:00.000Z",
            "stops": ["SIN"],
            "duration": 1016
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:23:00.000Z",
            "stops": ["IST", "KUL", "DXB"],
            "duration": 933
        }]
    }, {
        "price": 82743,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:42:00.000Z",
            "stops": [],
            "duration": 667
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:51:00.000Z",
            "stops": ["BKK", "KUL"],
            "duration": 1061
        }]
    }, {
        "price": 32305,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:19:00.000Z",
            "stops": ["AUH", "KUL"],
            "duration": 1358
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T11:10:00.000Z", "stops": [], "duration": 1346}]
    }, {
        "price": 62685,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:27:00.000Z",
            "stops": ["SIN", "BKK", "AUH"],
            "duration": 1818
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:39:00.000Z",
            "stops": ["AUH", "KUL", "HKG"],
            "duration": 1617
        }]
    }, {
        "price": 46764,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:22:00.000Z",
            "stops": ["AUH"],
            "duration": 1355
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T04:52:00.000Z", "stops": [], "duration": 1253}]
    }, {
        "price": 49014,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:58:00.000Z",
            "stops": [],
            "duration": 893
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:03:00.000Z",
            "stops": ["SHA", "DXB"],
            "duration": 626
        }]
    }, {
        "price": 26640,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:21:00.000Z",
            "stops": ["SHA", "HKG", "KUL"],
            "duration": 844
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:56:00.000Z",
            "stops": ["HKG", "SHA", "DXB"],
            "duration": 668
        }]
    }, {
        "price": 68557,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:17:00.000Z",
            "stops": ["AUH", "BKK"],
            "duration": 1549
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:05:00.000Z",
            "stops": ["AUH", "BKK"],
            "duration": 1191
        }]
    }, {
        "price": 75333,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:07:00.000Z",
            "stops": [],
            "duration": 871
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:06:00.000Z", "stops": [], "duration": 1130}]
    }, {
        "price": 44518,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:33:00.000Z",
            "stops": ["KUL", "SHA"],
            "duration": 1245
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:06:00.000Z",
            "stops": ["KUL"],
            "duration": 1031
        }]
    }, {
        "price": 25031,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:35:00.000Z",
            "stops": ["AUH"],
            "duration": 793
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:22:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 1918
        }]
    }, {
        "price": 48540,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:03:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 1788
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:51:00.000Z",
            "stops": ["DXB"],
            "duration": 1244
        }]
    }, {
        "price": 85301,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:12:00.000Z",
            "stops": ["DXB", "SHA", "BKK"],
            "duration": 1212
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:40:00.000Z", "stops": [], "duration": 784}]
    }, {
        "price": 82694,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:02:00.000Z",
            "stops": ["HKG", "SHA", "IST"],
            "duration": 952
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:15:00.000Z",
            "stops": ["HKG", "DXB"],
            "duration": 1059
        }]
    }, {
        "price": 94550,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:28:00.000Z",
            "stops": [],
            "duration": 1355
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:15:00.000Z",
            "stops": ["BKK"],
            "duration": 1863
        }]
    }, {
        "price": 54094,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:58:00.000Z",
            "stops": ["AUH"],
            "duration": 990
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:47:00.000Z",
            "stops": ["SHA", "HKG"],
            "duration": 1384
        }]
    }, {
        "price": 92587,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:08:00.000Z",
            "stops": ["KUL"],
            "duration": 1013
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:19:00.000Z",
            "stops": ["SIN"],
            "duration": 609
        }]
    }, {
        "price": 75868,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:53:00.000Z",
            "stops": [],
            "duration": 1218
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:18:00.000Z",
            "stops": ["SIN", "KUL", "AUH"],
            "duration": 1915
        }]
    }, {
        "price": 39763,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:09:00.000Z",
            "stops": [],
            "duration": 1431
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:14:00.000Z",
            "stops": ["BKK", "SHA", "KUL"],
            "duration": 1050
        }]
    }, {
        "price": 52507,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:12:00.000Z",
            "stops": ["SIN", "AUH", "KUL"],
            "duration": 614
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:30:00.000Z", "stops": [], "duration": 1723}]
    }, {
        "price": 29564,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:59:00.000Z",
            "stops": [],
            "duration": 1674
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:21:00.000Z", "stops": [], "duration": 637}]
    }, {
        "price": 27293,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:13:00.000Z",
            "stops": ["KUL", "BKK"],
            "duration": 1587
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:16:00.000Z",
            "stops": ["SHA"],
            "duration": 1662
        }]
    }, {
        "price": 98832,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:38:00.000Z",
            "stops": ["DXB", "HKG"],
            "duration": 1136
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:48:00.000Z",
            "stops": ["IST", "SHA", "DXB"],
            "duration": 1335
        }]
    }, {
        "price": 28769,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:58:00.000Z",
            "stops": [],
            "duration": 1678
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:07:00.000Z",
            "stops": ["AUH"],
            "duration": 988
        }]
    }, {
        "price": 64432,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:31:00.000Z",
            "stops": ["DXB", "IST", "SIN"],
            "duration": 1328
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T02:51:00.000Z", "stops": [], "duration": 1239}]
    }, {
        "price": 85692,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:25:00.000Z",
            "stops": ["DXB", "BKK"],
            "duration": 1909
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:18:00.000Z",
            "stops": ["IST", "KUL"],
            "duration": 1763
        }]
    }, {
        "price": 56905,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:41:00.000Z",
            "stops": ["DXB", "SIN", "BKK"],
            "duration": 1265
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:40:00.000Z",
            "stops": ["HKG", "SIN"],
            "duration": 1090
        }]
    }, {
        "price": 68812,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:09:00.000Z",
            "stops": ["KUL", "IST"],
            "duration": 693
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T15:13:00.000Z", "stops": [], "duration": 1834}]
    }, {
        "price": 70583,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:13:00.000Z",
            "stops": ["SHA", "SIN", "KUL"],
            "duration": 1479
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:25:00.000Z", "stops": [], "duration": 898}]
    }, {
        "price": 93122,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:33:00.000Z",
            "stops": [],
            "duration": 1431
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:06:00.000Z",
            "stops": ["SHA"],
            "duration": 960
        }]
    }, {
        "price": 95293,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:22:00.000Z",
            "stops": ["KUL"],
            "duration": 1074
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:10:00.000Z",
            "stops": ["BKK", "DXB", "IST"],
            "duration": 1677
        }]
    }, {
        "price": 80756,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:39:00.000Z",
            "stops": ["SIN"],
            "duration": 1052
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:41:00.000Z", "stops": [], "duration": 1585}]
    }, {
        "price": 57498,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:50:00.000Z",
            "stops": ["BKK"],
            "duration": 1569
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:44:00.000Z",
            "stops": ["HKG", "AUH", "BKK"],
            "duration": 1214
        }]
    }, {
        "price": 41812,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:38:00.000Z",
            "stops": ["SIN", "AUH", "KUL"],
            "duration": 1451
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:11:00.000Z",
            "stops": ["SHA"],
            "duration": 1682
        }]
    }, {
        "price": 40785,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:43:00.000Z",
            "stops": ["DXB", "HKG"],
            "duration": 1278
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:49:00.000Z",
            "stops": ["AUH", "SHA"],
            "duration": 1678
        }]
    }, {
        "price": 84785,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:33:00.000Z",
            "stops": ["SIN"],
            "duration": 835
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:30:00.000Z",
            "stops": ["KUL", "BKK", "SHA"],
            "duration": 790
        }]
    }, {
        "price": 87484,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:08:00.000Z",
            "stops": ["KUL", "BKK", "AUH"],
            "duration": 867
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T04:18:00.000Z", "stops": [], "duration": 1042}]
    }, {
        "price": 39368,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:34:00.000Z",
            "stops": ["DXB", "HKG"],
            "duration": 1426
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:09:00.000Z", "stops": [], "duration": 850}]
    }, {
        "price": 52876,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:00:00.000Z",
            "stops": [],
            "duration": 1346
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:13:00.000Z",
            "stops": ["AUH", "DXB"],
            "duration": 656
        }]
    }, {
        "price": 44891,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:42:00.000Z",
            "stops": ["HKG", "AUH"],
            "duration": 1375
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:03:00.000Z", "stops": [], "duration": 1093}]
    }, {
        "price": 27578,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:18:00.000Z",
            "stops": ["IST", "AUH", "SHA"],
            "duration": 1847
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:05:00.000Z", "stops": [], "duration": 658}]
    }, {
        "price": 77628,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:46:00.000Z",
            "stops": ["HKG", "IST"],
            "duration": 659
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:52:00.000Z",
            "stops": ["IST"],
            "duration": 1606
        }]
    }, {
        "price": 68827,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:50:00.000Z",
            "stops": [],
            "duration": 1455
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:41:00.000Z", "stops": [], "duration": 1156}]
    }, {
        "price": 79537,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:23:00.000Z",
            "stops": [],
            "duration": 1930
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:09:00.000Z", "stops": [], "duration": 1872}]
    }, {
        "price": 58179,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:31:00.000Z",
            "stops": [],
            "duration": 1728
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:56:00.000Z", "stops": [], "duration": 1268}]
    }, {
        "price": 31317,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:30:00.000Z",
            "stops": ["SIN"],
            "duration": 1062
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:35:00.000Z",
            "stops": ["HKG", "SIN"],
            "duration": 1629
        }]
    }, {
        "price": 37011,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:27:00.000Z",
            "stops": ["AUH"],
            "duration": 1966
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:00:00.000Z",
            "stops": ["IST", "HKG", "DXB"],
            "duration": 942
        }]
    }, {
        "price": 19126,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:40:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 1506
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:41:00.000Z",
            "stops": ["HKG"],
            "duration": 1004
        }]
    }, {
        "price": 76796,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:44:00.000Z",
            "stops": ["AUH", "DXB", "BKK"],
            "duration": 1641
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:07:00.000Z",
            "stops": ["HKG"],
            "duration": 1085
        }]
    }, {
        "price": 81558,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:37:00.000Z",
            "stops": ["IST"],
            "duration": 1742
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:57:00.000Z", "stops": [], "duration": 1835}]
    }, {
        "price": 36458,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:36:00.000Z",
            "stops": ["IST", "AUH", "KUL"],
            "duration": 1726
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:34:00.000Z",
            "stops": ["BKK", "IST"],
            "duration": 1364
        }]
    }, {
        "price": 52262,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:19:00.000Z",
            "stops": ["SHA", "KUL"],
            "duration": 1604
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:54:00.000Z", "stops": [], "duration": 755}]
    }, {
        "price": 32741,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:45:00.000Z",
            "stops": ["SIN", "SHA", "BKK"],
            "duration": 938
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:28:00.000Z", "stops": [], "duration": 1775}]
    }, {
        "price": 37518,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:35:00.000Z",
            "stops": [],
            "duration": 876
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:11:00.000Z",
            "stops": ["SHA", "SIN"],
            "duration": 1209
        }]
    }, {
        "price": 49866,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:47:00.000Z",
            "stops": [],
            "duration": 1888
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:10:00.000Z", "stops": [], "duration": 1655}]
    }, {
        "price": 18368,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:42:00.000Z",
            "stops": ["IST", "KUL"],
            "duration": 964
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:55:00.000Z",
            "stops": ["AUH"],
            "duration": 1842
        }]
    }, {
        "price": 16025,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:14:00.000Z",
            "stops": ["IST", "HKG"],
            "duration": 1734
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:26:00.000Z",
            "stops": ["AUH", "SIN"],
            "duration": 1342
        }]
    }, {
        "price": 28668,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:04:00.000Z",
            "stops": ["KUL"],
            "duration": 1520
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:50:00.000Z",
            "stops": ["AUH", "SIN"],
            "duration": 1913
        }]
    }, {
        "price": 72323,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:51:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 1368
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:54:00.000Z",
            "stops": ["DXB", "SIN", "HKG"],
            "duration": 1304
        }]
    }, {
        "price": 60397,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:40:00.000Z",
            "stops": ["HKG", "IST"],
            "duration": 1114
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:07:00.000Z", "stops": [], "duration": 809}]
    }, {
        "price": 86700,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:52:00.000Z",
            "stops": ["DXB", "KUL", "HKG"],
            "duration": 1854
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:30:00.000Z",
            "stops": ["BKK", "AUH", "HKG"],
            "duration": 1462
        }]
    }, {
        "price": 97923,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:28:00.000Z",
            "stops": [],
            "duration": 920
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:11:00.000Z",
            "stops": ["BKK", "KUL", "DXB"],
            "duration": 1350
        }]
    }, {
        "price": 59421,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:38:00.000Z",
            "stops": ["SIN", "KUL"],
            "duration": 639
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:49:00.000Z",
            "stops": ["KUL", "IST", "BKK"],
            "duration": 726
        }]
    }, {
        "price": 32488,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:59:00.000Z",
            "stops": ["SHA", "SIN"],
            "duration": 1984
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:30:00.000Z",
            "stops": ["AUH"],
            "duration": 737
        }]
    }, {
        "price": 67865,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:03:00.000Z",
            "stops": ["AUH"],
            "duration": 769
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:54:00.000Z",
            "stops": ["SIN", "HKG", "IST"],
            "duration": 1318
        }]
    }, {
        "price": 45684,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:38:00.000Z",
            "stops": ["SHA"],
            "duration": 981
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:53:00.000Z",
            "stops": ["SHA", "IST"],
            "duration": 602
        }]
    }, {
        "price": 81616,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:04:00.000Z",
            "stops": [],
            "duration": 1007
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:06:00.000Z",
            "stops": ["KUL"],
            "duration": 993
        }]
    }, {
        "price": 99349,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:28:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 1372
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:58:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1290
        }]
    }, {
        "price": 19212,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:09:00.000Z",
            "stops": ["BKK"],
            "duration": 1540
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:32:00.000Z",
            "stops": ["DXB", "HKG", "BKK"],
            "duration": 1577
        }]
    }, {
        "price": 84920,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:33:00.000Z",
            "stops": ["DXB"],
            "duration": 1389
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:04:00.000Z",
            "stops": ["SIN", "DXB", "SHA"],
            "duration": 632
        }]
    }, {
        "price": 39494,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:43:00.000Z",
            "stops": [],
            "duration": 1771
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:09:00.000Z",
            "stops": ["HKG", "AUH"],
            "duration": 1655
        }]
    }, {
        "price": 78001,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:29:00.000Z",
            "stops": ["DXB", "SHA", "SIN"],
            "duration": 820
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:31:00.000Z", "stops": [], "duration": 1974}]
    }, {
        "price": 17271,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:46:00.000Z",
            "stops": ["BKK", "AUH", "DXB"],
            "duration": 1698
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:07:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 1552
        }]
    }, {
        "price": 80707,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:22:00.000Z",
            "stops": [],
            "duration": 1107
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:34:00.000Z", "stops": [], "duration": 1687}]
    }, {
        "price": 91337,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:57:00.000Z",
            "stops": ["SHA", "KUL"],
            "duration": 1925
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T04:00:00.000Z", "stops": [], "duration": 888}]
    }, {
        "price": 23811,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:37:00.000Z",
            "stops": ["HKG"],
            "duration": 1322
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:36:00.000Z", "stops": [], "duration": 1716}]
    }, {
        "price": 93334,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:43:00.000Z",
            "stops": ["AUH", "KUL", "HKG"],
            "duration": 1010
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:54:00.000Z",
            "stops": ["IST"],
            "duration": 1018
        }]
    }, {
        "price": 43075,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:27:00.000Z",
            "stops": ["SHA", "IST"],
            "duration": 1271
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:33:00.000Z",
            "stops": ["SIN"],
            "duration": 1340
        }]
    }, {
        "price": 67204,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:09:00.000Z",
            "stops": [],
            "duration": 641
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:00:00.000Z",
            "stops": ["IST", "SIN", "SHA"],
            "duration": 1300
        }]
    }, {
        "price": 17751,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:52:00.000Z",
            "stops": [],
            "duration": 1041
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:19:00.000Z",
            "stops": ["HKG", "IST", "SIN"],
            "duration": 1445
        }]
    }, {
        "price": 94322,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:34:00.000Z",
            "stops": ["IST"],
            "duration": 1230
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:12:00.000Z",
            "stops": ["KUL", "AUH"],
            "duration": 758
        }]
    }, {
        "price": 21558,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:41:00.000Z",
            "stops": [],
            "duration": 619
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:32:00.000Z",
            "stops": ["BKK", "SHA", "AUH"],
            "duration": 837
        }]
    }, {
        "price": 62785,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:13:00.000Z",
            "stops": ["SIN"],
            "duration": 1156
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:47:00.000Z", "stops": [], "duration": 1519}]
    }, {
        "price": 81627,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:32:00.000Z",
            "stops": ["DXB", "AUH"],
            "duration": 1950
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:16:00.000Z", "stops": [], "duration": 878}]
    }, {
        "price": 63710,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:48:00.000Z",
            "stops": [],
            "duration": 1708
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:16:00.000Z",
            "stops": ["KUL"],
            "duration": 948
        }]
    }, {
        "price": 39385,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:51:00.000Z",
            "stops": [],
            "duration": 1678
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:23:00.000Z", "stops": [], "duration": 1856}]
    }, {
        "price": 69921,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:50:00.000Z",
            "stops": [],
            "duration": 1679
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:07:00.000Z",
            "stops": ["SHA"],
            "duration": 1688
        }]
    }, {
        "price": 81514,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:09:00.000Z",
            "stops": ["AUH", "SIN", "DXB"],
            "duration": 1100
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:24:00.000Z", "stops": [], "duration": 759}]
    }, {
        "price": 48983,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:33:00.000Z",
            "stops": ["SIN"],
            "duration": 1922
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:20:00.000Z",
            "stops": ["BKK", "SHA", "IST"],
            "duration": 1579
        }]
    }, {
        "price": 80312,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:21:00.000Z",
            "stops": ["DXB", "AUH"],
            "duration": 763
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:41:00.000Z",
            "stops": ["SIN"],
            "duration": 1122
        }]
    }, {
        "price": 76873,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:58:00.000Z",
            "stops": ["SIN", "KUL"],
            "duration": 1556
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:14:00.000Z",
            "stops": ["HKG", "DXB", "AUH"],
            "duration": 1755
        }]
    }, {
        "price": 87827,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:18:00.000Z",
            "stops": ["BKK"],
            "duration": 1771
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:39:00.000Z",
            "stops": ["BKK"],
            "duration": 1697
        }]
    }, {
        "price": 37798,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:35:00.000Z",
            "stops": ["IST"],
            "duration": 1823
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:26:00.000Z",
            "stops": ["SIN", "KUL"],
            "duration": 1702
        }]
    }, {
        "price": 20187,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:36:00.000Z",
            "stops": ["SHA"],
            "duration": 1413
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:07:00.000Z",
            "stops": ["SIN"],
            "duration": 1614
        }]
    }, {
        "price": 79836,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:51:00.000Z",
            "stops": ["IST", "SIN", "BKK"],
            "duration": 1014
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:21:00.000Z",
            "stops": ["KUL", "DXB", "AUH"],
            "duration": 1611
        }]
    }, {
        "price": 94236,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:49:00.000Z",
            "stops": [],
            "duration": 989
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:24:00.000Z",
            "stops": ["SIN", "KUL"],
            "duration": 1889
        }]
    }, {
        "price": 40657,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:32:00.000Z",
            "stops": ["AUH"],
            "duration": 1061
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:49:00.000Z", "stops": [], "duration": 2000}]
    }, {
        "price": 71379,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:06:00.000Z",
            "stops": [],
            "duration": 1148
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:37:00.000Z",
            "stops": ["SIN"],
            "duration": 1694
        }]
    }, {
        "price": 64419,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:56:00.000Z",
            "stops": ["IST", "SHA"],
            "duration": 1742
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:10:00.000Z", "stops": [], "duration": 1092}]
    }, {
        "price": 25246,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:49:00.000Z",
            "stops": [],
            "duration": 1612
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T03:37:00.000Z", "stops": [], "duration": 1476}]
    }, {
        "price": 58792,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:14:00.000Z",
            "stops": ["AUH"],
            "duration": 1695
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:56:00.000Z",
            "stops": ["HKG"],
            "duration": 982
        }]
    }, {
        "price": 86389,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:58:00.000Z",
            "stops": [],
            "duration": 1771
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:24:00.000Z",
            "stops": ["IST"],
            "duration": 1040
        }]
    }, {
        "price": 44925,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:39:00.000Z",
            "stops": ["BKK", "SIN", "AUH"],
            "duration": 878
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T04:53:00.000Z",
            "stops": ["DXB", "HKG", "KUL"],
            "duration": 681
        }]
    }, {
        "price": 28713,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:59:00.000Z",
            "stops": [],
            "duration": 1408
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:03:00.000Z",
            "stops": ["SIN", "AUH", "DXB"],
            "duration": 1693
        }]
    }, {
        "price": 77365,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:07:00.000Z",
            "stops": ["SHA"],
            "duration": 1397
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:18:00.000Z",
            "stops": ["KUL"],
            "duration": 1110
        }]
    }, {
        "price": 34715,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:55:00.000Z",
            "stops": ["SIN", "IST", "HKG"],
            "duration": 1685
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:58:00.000Z",
            "stops": ["IST"],
            "duration": 1289
        }]
    }, {
        "price": 73943,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:30:00.000Z",
            "stops": [],
            "duration": 911
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:16:00.000Z", "stops": [], "duration": 1802}]
    }, {
        "price": 70093,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T21:13:00.000Z",
            "stops": ["SIN"],
            "duration": 1941
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:38:00.000Z",
            "stops": ["SHA", "AUH", "SIN"],
            "duration": 894
        }]
    }, {
        "price": 41632,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:55:00.000Z",
            "stops": [],
            "duration": 710
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:19:00.000Z", "stops": [], "duration": 1875}]
    }, {
        "price": 33531,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:39:00.000Z",
            "stops": ["SIN"],
            "duration": 1864
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:29:00.000Z",
            "stops": ["HKG", "KUL"],
            "duration": 1266
        }]
    }, {
        "price": 48835,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:13:00.000Z",
            "stops": ["IST", "SIN"],
            "duration": 1817
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:05:00.000Z", "stops": [], "duration": 1695}]
    }, {
        "price": 94440,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:26:00.000Z",
            "stops": ["SIN", "BKK", "HKG"],
            "duration": 604
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:49:00.000Z", "stops": [], "duration": 1599}]
    }, {
        "price": 28761,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:33:00.000Z",
            "stops": ["SIN", "DXB", "HKG"],
            "duration": 1681
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:55:00.000Z",
            "stops": ["DXB", "BKK"],
            "duration": 1595
        }]
    }, {
        "price": 21164,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:35:00.000Z",
            "stops": ["BKK"],
            "duration": 1117
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:54:00.000Z",
            "stops": ["SIN", "BKK", "DXB"],
            "duration": 1336
        }]
    }, {
        "price": 38298,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:24:00.000Z",
            "stops": [],
            "duration": 1977
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:56:00.000Z", "stops": [], "duration": 1624}]
    }, {
        "price": 69264,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:53:00.000Z",
            "stops": [],
            "duration": 835
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:57:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 1366
        }]
    }, {
        "price": 23255,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:13:00.000Z",
            "stops": ["AUH"],
            "duration": 623
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:25:00.000Z",
            "stops": ["DXB", "IST"],
            "duration": 794
        }]
    }, {
        "price": 54061,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:20:00.000Z",
            "stops": [],
            "duration": 678
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:59:00.000Z",
            "stops": ["DXB"],
            "duration": 1466
        }]
    }, {
        "price": 89195,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:03:00.000Z",
            "stops": [],
            "duration": 803
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:50:00.000Z",
            "stops": ["HKG"],
            "duration": 1343
        }]
    }, {
        "price": 35447,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:45:00.000Z",
            "stops": [],
            "duration": 973
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:30:00.000Z",
            "stops": ["SIN"],
            "duration": 829
        }]
    }, {
        "price": 81941,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:55:00.000Z",
            "stops": ["SHA", "BKK", "DXB"],
            "duration": 1753
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T15:03:00.000Z", "stops": [], "duration": 1750}]
    }, {
        "price": 70855,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:25:00.000Z",
            "stops": ["SHA"],
            "duration": 1602
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:45:00.000Z",
            "stops": ["SIN"],
            "duration": 1315
        }]
    }, {
        "price": 84533,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:54:00.000Z",
            "stops": [],
            "duration": 887
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:16:00.000Z", "stops": [], "duration": 1194}]
    }, {
        "price": 66805,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:50:00.000Z",
            "stops": ["HKG"],
            "duration": 1064
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:24:00.000Z",
            "stops": ["SHA", "DXB"],
            "duration": 1175
        }]
    }, {
        "price": 77792,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:23:00.000Z",
            "stops": ["BKK", "AUH"],
            "duration": 1508
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:56:00.000Z",
            "stops": ["AUH", "DXB", "BKK"],
            "duration": 1752
        }]
    }, {
        "price": 86435,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:13:00.000Z",
            "stops": ["DXB"],
            "duration": 1043
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:38:00.000Z",
            "stops": ["DXB", "KUL"],
            "duration": 829
        }]
    }, {
        "price": 20244,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:15:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 844
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:09:00.000Z",
            "stops": ["BKK", "SHA", "SIN"],
            "duration": 1022
        }]
    }, {
        "price": 40233,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:25:00.000Z",
            "stops": ["HKG"],
            "duration": 1694
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:56:00.000Z",
            "stops": ["IST", "SHA"],
            "duration": 1593
        }]
    }, {
        "price": 66785,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:01:00.000Z",
            "stops": [],
            "duration": 839
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:46:00.000Z",
            "stops": ["HKG"],
            "duration": 1112
        }]
    }, {
        "price": 64973,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:36:00.000Z",
            "stops": [],
            "duration": 605
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T12:02:00.000Z",
            "stops": ["KUL", "IST", "DXB"],
            "duration": 659
        }]
    }, {
        "price": 50030,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:31:00.000Z",
            "stops": [],
            "duration": 1644
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:14:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 1941
        }]
    }, {
        "price": 96007,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:27:00.000Z",
            "stops": ["KUL"],
            "duration": 1175
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:16:00.000Z",
            "stops": ["KUL", "DXB"],
            "duration": 1329
        }]
    }, {
        "price": 19921,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:58:00.000Z",
            "stops": ["BKK"],
            "duration": 1886
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T07:37:00.000Z", "stops": [], "duration": 1175}]
    }, {
        "price": 47409,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:36:00.000Z",
            "stops": ["SHA"],
            "duration": 1456
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:04:00.000Z",
            "stops": ["AUH"],
            "duration": 1309
        }]
    }, {
        "price": 76255,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:54:00.000Z",
            "stops": [],
            "duration": 734
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:44:00.000Z", "stops": [], "duration": 727}]
    }, {
        "price": 16687,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:58:00.000Z",
            "stops": ["AUH"],
            "duration": 1450
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:32:00.000Z",
            "stops": ["BKK", "SHA"],
            "duration": 1865
        }]
    }, {
        "price": 85716,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:21:00.000Z",
            "stops": [],
            "duration": 1749
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T10:19:00.000Z", "stops": [], "duration": 702}]
    }, {
        "price": 27992,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:31:00.000Z",
            "stops": ["AUH"],
            "duration": 1379
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T11:51:00.000Z", "stops": [], "duration": 1156}]
    }, {
        "price": 56482,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:57:00.000Z",
            "stops": ["HKG", "KUL"],
            "duration": 1128
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:43:00.000Z",
            "stops": ["BKK", "KUL", "DXB"],
            "duration": 678
        }]
    }, {
        "price": 72258,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:57:00.000Z",
            "stops": [],
            "duration": 1044
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:18:00.000Z",
            "stops": ["KUL"],
            "duration": 1972
        }]
    }, {
        "price": 55240,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:16:00.000Z",
            "stops": ["SHA", "BKK"],
            "duration": 1093
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:57:00.000Z",
            "stops": ["SHA", "SIN", "IST"],
            "duration": 1298
        }]
    }, {
        "price": 32908,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:45:00.000Z",
            "stops": ["SIN"],
            "duration": 1164
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T21:25:00.000Z", "stops": [], "duration": 1399}]
    }, {
        "price": 51868,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:49:00.000Z",
            "stops": ["SHA"],
            "duration": 1677
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:04:00.000Z",
            "stops": ["DXB", "SHA"],
            "duration": 1441
        }]
    }, {
        "price": 58944,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:39:00.000Z",
            "stops": ["SIN", "HKG"],
            "duration": 1004
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T03:17:00.000Z", "stops": [], "duration": 1372}]
    }, {
        "price": 15677,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:14:00.000Z",
            "stops": ["DXB", "SIN"],
            "duration": 829
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:51:00.000Z",
            "stops": ["KUL", "DXB", "HKG"],
            "duration": 849
        }]
    }, {
        "price": 69247,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:49:00.000Z",
            "stops": ["KUL"],
            "duration": 1573
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T15:20:00.000Z", "stops": [], "duration": 1374}]
    }, {
        "price": 72052,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:38:00.000Z",
            "stops": [],
            "duration": 922
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:22:00.000Z",
            "stops": ["IST"],
            "duration": 1441
        }]
    }, {
        "price": 36191,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:42:00.000Z",
            "stops": ["SIN", "SHA"],
            "duration": 876
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:43:00.000Z",
            "stops": ["AUH", "BKK", "SIN"],
            "duration": 1191
        }]
    }, {
        "price": 52038,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T11:14:00.000Z",
            "stops": [],
            "duration": 760
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T09:39:00.000Z", "stops": [], "duration": 1350}]
    }, {
        "price": 84688,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:54:00.000Z",
            "stops": ["IST"],
            "duration": 1014
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T13:36:00.000Z", "stops": [], "duration": 638}]
    }, {
        "price": 70291,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:48:00.000Z",
            "stops": ["IST", "DXB", "SIN"],
            "duration": 1018
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:51:00.000Z",
            "stops": ["AUH", "BKK", "IST"],
            "duration": 988
        }]
    }, {
        "price": 26278,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T10:55:00.000Z",
            "stops": ["SIN"],
            "duration": 1386
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T22:51:00.000Z", "stops": [], "duration": 1475}]
    }, {
        "price": 35681,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:36:00.000Z",
            "stops": ["IST"],
            "duration": 934
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-10T23:07:00.000Z", "stops": [], "duration": 1625}]
    }, {
        "price": 16626,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:09:00.000Z",
            "stops": ["SIN", "AUH"],
            "duration": 846
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:48:00.000Z",
            "stops": ["KUL"],
            "duration": 718
        }]
    }, {
        "price": 46833,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:12:00.000Z",
            "stops": ["AUH", "KUL"],
            "duration": 1951
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:40:00.000Z",
            "stops": ["KUL", "HKG"],
            "duration": 647
        }]
    }, {
        "price": 34496,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:19:00.000Z",
            "stops": [],
            "duration": 1020
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:28:00.000Z",
            "stops": ["SHA"],
            "duration": 942
        }]
    }, {
        "price": 55804,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:25:00.000Z",
            "stops": ["BKK"],
            "duration": 658
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:18:00.000Z",
            "stops": ["IST", "KUL"],
            "duration": 1499
        }]
    }, {
        "price": 35392,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:27:00.000Z",
            "stops": ["IST", "AUH"],
            "duration": 1112
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T23:02:00.000Z",
            "stops": ["SIN", "BKK"],
            "duration": 1509
        }]
    }, {
        "price": 86422,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:18:00.000Z",
            "stops": [],
            "duration": 1239
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:39:00.000Z",
            "stops": ["DXB", "KUL", "HKG"],
            "duration": 725
        }]
    }, {
        "price": 38397,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:01:00.000Z",
            "stops": ["SHA", "IST"],
            "duration": 875
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T17:58:00.000Z", "stops": [], "duration": 1451}]
    }, {
        "price": 43883,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:37:00.000Z",
            "stops": [],
            "duration": 1490
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:57:00.000Z",
            "stops": ["BKK"],
            "duration": 1400
        }]
    }, {
        "price": 70839,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:46:00.000Z",
            "stops": ["SHA"],
            "duration": 1998
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:43:00.000Z", "stops": [], "duration": 711}]
    }, {
        "price": 59284,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:56:00.000Z",
            "stops": ["SHA", "AUH", "DXB"],
            "duration": 1864
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T08:18:00.000Z",
            "stops": ["BKK", "AUH"],
            "duration": 1548
        }]
    }, {
        "price": 84882,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:14:00.000Z",
            "stops": ["DXB", "IST"],
            "duration": 1981
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:23:00.000Z",
            "stops": ["BKK", "SHA"],
            "duration": 1223
        }]
    }, {
        "price": 67786,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:29:00.000Z",
            "stops": ["HKG", "BKK"],
            "duration": 1898
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:21:00.000Z", "stops": [], "duration": 907}]
    }, {
        "price": 35890,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:44:00.000Z",
            "stops": [],
            "duration": 1862
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T16:58:00.000Z", "stops": [], "duration": 1378}]
    }, {
        "price": 25647,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:52:00.000Z",
            "stops": [],
            "duration": 1859
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:14:00.000Z",
            "stops": ["KUL", "DXB", "BKK"],
            "duration": 1493
        }]
    }, {
        "price": 17489,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:38:00.000Z",
            "stops": [],
            "duration": 762
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:11:00.000Z",
            "stops": ["IST", "DXB", "AUH"],
            "duration": 1948
        }]
    }, {
        "price": 88486,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:52:00.000Z",
            "stops": ["SHA", "AUH", "BKK"],
            "duration": 1236
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T14:19:00.000Z",
            "stops": ["HKG", "SHA"],
            "duration": 1014
        }]
    }, {
        "price": 58262,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:03:00.000Z",
            "stops": ["SIN", "DXB"],
            "duration": 1518
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T02:09:00.000Z",
            "stops": ["KUL"],
            "duration": 1738
        }]
    }, {
        "price": 19194,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:03:00.000Z",
            "stops": ["SHA", "AUH", "SIN"],
            "duration": 1214
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:56:00.000Z",
            "stops": ["HKG", "IST", "BKK"],
            "duration": 809
        }]
    }, {
        "price": 36564,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:38:00.000Z",
            "stops": [],
            "duration": 1958
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:59:00.000Z",
            "stops": ["DXB", "AUH"],
            "duration": 1634
        }]
    }, {
        "price": 67652,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:29:00.000Z",
            "stops": ["IST"],
            "duration": 1697
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:46:00.000Z",
            "stops": ["IST", "DXB", "BKK"],
            "duration": 1274
        }]
    }, {
        "price": 33054,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T23:55:00.000Z",
            "stops": ["SIN"],
            "duration": 1238
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:40:00.000Z",
            "stops": ["SIN"],
            "duration": 1635
        }]
    }, {
        "price": 83356,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:31:00.000Z",
            "stops": ["BKK", "DXB"],
            "duration": 932
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T09:42:00.000Z",
            "stops": ["AUH", "SHA", "SIN"],
            "duration": 1767
        }]
    }, {
        "price": 89710,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:37:00.000Z",
            "stops": ["KUL", "BKK", "SIN"],
            "duration": 752
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:13:00.000Z",
            "stops": ["IST", "SHA"],
            "duration": 1995
        }]
    }, {
        "price": 89664,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T00:04:00.000Z",
            "stops": ["SIN", "HKG"],
            "duration": 1649
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:29:00.000Z",
            "stops": ["DXB", "HKG", "SIN"],
            "duration": 1406
        }]
    }, {
        "price": 77780,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:04:00.000Z",
            "stops": [],
            "duration": 1503
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:26:00.000Z",
            "stops": ["DXB"],
            "duration": 1887
        }]
    }, {
        "price": 55810,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:11:00.000Z",
            "stops": ["AUH", "SIN"],
            "duration": 1089
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:51:00.000Z",
            "stops": ["SIN"],
            "duration": 784
        }]
    }, {
        "price": 33660,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:39:00.000Z",
            "stops": ["SIN", "KUL", "AUH"],
            "duration": 638
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T13:24:00.000Z",
            "stops": ["SHA", "AUH", "DXB"],
            "duration": 1813
        }]
    }, {
        "price": 80935,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:07:00.000Z",
            "stops": ["BKK"],
            "duration": 831
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T08:16:00.000Z", "stops": [], "duration": 1129}]
    }, {
        "price": 25311,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T04:06:00.000Z",
            "stops": ["SHA"],
            "duration": 659
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T17:57:00.000Z",
            "stops": ["SIN", "KUL", "SHA"],
            "duration": 621
        }]
    }, {
        "price": 33993,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:22:00.000Z",
            "stops": ["IST", "SHA", "KUL"],
            "duration": 1401
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T00:58:00.000Z",
            "stops": ["AUH"],
            "duration": 1732
        }]
    }, {
        "price": 83165,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T14:38:00.000Z",
            "stops": [],
            "duration": 1160
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T22:32:00.000Z",
            "stops": ["BKK", "SIN", "KUL"],
            "duration": 1336
        }]
    }, {
        "price": 82828,
        "carrier": "TG",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:19:00.000Z",
            "stops": [],
            "duration": 610
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:11:00.000Z",
            "stops": ["HKG", "IST", "BKK"],
            "duration": 695
        }]
    }, {
        "price": 22485,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T15:56:00.000Z",
            "stops": ["IST", "AUH", "BKK"],
            "duration": 1776
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:12:00.000Z",
            "stops": ["AUH", "BKK"],
            "duration": 1092
        }]
    }, {
        "price": 74618,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:44:00.000Z",
            "stops": ["KUL"],
            "duration": 1816
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:53:00.000Z",
            "stops": ["HKG", "BKK", "SHA"],
            "duration": 1399
        }]
    }, {
        "price": 58361,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:20:00.000Z",
            "stops": ["HKG", "BKK", "AUH"],
            "duration": 1688
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T12:56:00.000Z", "stops": [], "duration": 1291}]
    }, {
        "price": 90286,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T07:58:00.000Z",
            "stops": ["IST"],
            "duration": 1389
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:20:00.000Z",
            "stops": ["IST", "AUH"],
            "duration": 1867
        }]
    }, {
        "price": 98774,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T05:49:00.000Z",
            "stops": ["AUH", "SIN", "BKK"],
            "duration": 1446
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T14:45:00.000Z", "stops": [], "duration": 888}]
    }, {
        "price": 90337,
        "carrier": "EK",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T01:29:00.000Z",
            "stops": ["KUL"],
            "duration": 1970
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T06:36:00.000Z", "stops": [], "duration": 1059}]
    }, {
        "price": 99967,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T09:31:00.000Z",
            "stops": ["DXB", "BKK"],
            "duration": 1170
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T05:21:00.000Z",
            "stops": ["IST"],
            "duration": 1217
        }]
    }, {
        "price": 78443,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:16:00.000Z",
            "stops": ["DXB", "HKG"],
            "duration": 1863
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T03:14:00.000Z",
            "stops": ["DXB", "HKG", "SIN"],
            "duration": 1690
        }]
    }, {
        "price": 62407,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T16:39:00.000Z",
            "stops": [],
            "duration": 1215
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T07:17:00.000Z",
            "stops": ["KUL"],
            "duration": 1466
        }]
    }, {
        "price": 73057,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:07:00.000Z",
            "stops": ["HKG"],
            "duration": 1300
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T01:44:00.000Z",
            "stops": ["IST", "AUH"],
            "duration": 732
        }]
    }, {
        "price": 73023,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:26:00.000Z",
            "stops": ["HKG"],
            "duration": 1981
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T06:22:00.000Z",
            "stops": ["HKG", "IST", "KUL"],
            "duration": 1501
        }]
    }, {
        "price": 64242,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:50:00.000Z",
            "stops": ["KUL"],
            "duration": 1276
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T05:44:00.000Z", "stops": [], "duration": 972}]
    }, {
        "price": 25237,
        "carrier": "SU",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T02:09:00.000Z",
            "stops": [],
            "duration": 1118
        }, {"origin": "HKT", "destination": "MOW", "date": "2022-02-11T00:13:00.000Z", "stops": [], "duration": 757}]
    }, {
        "price": 57065,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-21T22:40:00.000Z",
            "stops": ["AUH"],
            "duration": 1651
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T16:21:00.000Z",
            "stops": ["IST", "AUH"],
            "duration": 989
        }]
    }, {
        "price": 44101,
        "carrier": "EY",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T13:50:00.000Z",
            "stops": ["DXB"],
            "duration": 1588
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:17:00.000Z",
            "stops": ["DXB", "SIN", "AUH"],
            "duration": 983
        }]
    }, {
        "price": 51305,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T03:09:00.000Z",
            "stops": ["KUL"],
            "duration": 669
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T10:24:00.000Z",
            "stops": ["SIN", "HKG", "SHA"],
            "duration": 700
        }]
    }, {
        "price": 37812,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T06:03:00.000Z",
            "stops": ["SIN", "AUH"],
            "duration": 1392
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:45:00.000Z",
            "stops": ["KUL", "BKK", "IST"],
            "duration": 636
        }]
    }, {
        "price": 90969,
        "carrier": "FV",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T08:33:00.000Z",
            "stops": ["AUH"],
            "duration": 1807
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-10T21:19:00.000Z",
            "stops": ["BKK", "IST"],
            "duration": 1506
        }]
    }, {
        "price": 84573,
        "carrier": "S7",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T12:21:00.000Z",
            "stops": ["SIN", "IST"],
            "duration": 713
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T15:28:00.000Z",
            "stops": ["HKG", "SIN"],
            "duration": 1292
        }]
    }, {
        "price": 30742,
        "carrier": "MH",
        "segments": [{
            "origin": "MOW",
            "destination": "HKT",
            "date": "2022-01-22T17:49:00.000Z",
            "stops": ["HKG", "SHA", "AUH"],
            "duration": 1337
        }, {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2022-02-11T11:16:00.000Z",
            "stops": ["DXB", "AUH", "HKG"],
            "duration": 1659
        }]
    }
] as Array<InitailTicketsType>