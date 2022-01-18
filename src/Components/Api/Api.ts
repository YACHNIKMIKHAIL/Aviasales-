import axios from "axios";

export const ticketsApi={
    getKey () {
        axios.get('https://front-test.beta.aviasales.ru/search')
            .then(response=> {
                console.log(response.data.searchId)
                let key =response.data.searchId
                return key
            })
        },
        getTickets(){
        axios.get('https://front-test.beta.aviasales.ru/tickets?searchId=21e78')
            .then(response=>console.log(response.data))
        }
    }
    // .then(response=>axios.get('https://front-test.beta.aviasales.ru/tickets?searchId='+ response))