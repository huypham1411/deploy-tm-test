import Axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies();
console.log('localStorage --')
const localStore = JSON.parse(localStorage.getItem('state')) || {}
console.log(localStore)
let data = {
    items: localStore.items || [],
    addedItems: localStore.addedItems || [],
    total: localStore.total ? parseFloat(localStore.total) : 0
}
console.log('data');
console.log(data)

async function fetchData() {
    await Axios.get(`/products`)
        .then(dataFetch => dataFetch.data)
        .then(dataFetch => {
            data.items = dataFetch
        }).catch(err => console.log(err))
}
fetchData()

export { data }
