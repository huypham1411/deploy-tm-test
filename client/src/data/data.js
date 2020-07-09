import Axios from 'axios';
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
// export const data =
// {
//     items:
//         [
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '0',
//                 productName: 'Cam ',
//                 status: 'available',
//                 description: 'something good',
//                 price: 1200000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '1',
//                 productName: 'Cam Navel Ruột Vàng | Mỹ (1Kg)',
//                 status: 'available',
//                 description: 'something normal',
//                 price: 120000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '2',
//                 productName: 'adfafa',
//                 status: 'unavailable',
//                 description: 'something nice',
//                 price: 10000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '3',
//                 productName: 'Cầvda',
//                 status: 'available',
//                 description: 'something except',
//                 price: 50000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '4',
//                 productName: 'Cầvấgvknvlada',
//                 status: 'unavailable',
//                 description: 'something good',
//                 price: 100000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '5',
//                 productName: 'ànkldnfla',
//                 status: 'unavailable',
//                 description: 'something unbelieve',
//                 price: 100000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '6',
//                 productName: 'mkvlal',
//                 status: 'available',
//                 description: 'something vae',
//                 price: 100000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '7',
//                 productName: 'àgadgag',
//                 status: 'available',
//                 description: 'something àerv',
//                 price: 100000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '8',
//                 productName: 'lkadvjk',
//                 status: 'available',
//                 description: 'something qeoqrb',
//                 price: 100000
//             },
//             {
//                 img: { src: 'https://product.hstatic.net/1000141988/product/3_0f5d3911ba9740b5811694bb5a4f8549_large.jpg' },
//                 id: '9',
//                 productName: 'Cam ',
//                 status: 'available',
//                 description: 'something good',
//                 price: 1200000
//             },
//         ],
//     addedItems: [],
//     total: 0
// }

