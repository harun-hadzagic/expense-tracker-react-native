import axios from "axios"

const BACKEND_URL = 'https://vue-coach-app-430b0-default-rtdb.europe-west1.firebasedatabase.app/' 

export const storeExpensew= (expenseData) =>{
    axios.post(BACKEND_URL + '/expenses.json', expenseData)
}

export const fetchExpenses = async () =>{
    const response = await axios.get(BACKEND_URL + '/expenses.json')

    const expoenses = [];
    for (const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expoenses.push(expenseObj)

    }

    return expoenses
}