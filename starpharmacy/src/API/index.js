export default function getOrders(){
    return fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
 
};
export const getRevenue=()=>{
  return  fetch('http://localhost:4000/user/allPostMed')
  .then(res => res.json())

}

