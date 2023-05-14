// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Expireddrug = () => {
//   const [expiredProducts, setExpiredProducts] = useState([]);

//   useEffect(() => {
//     // Fetch expired products from the server
//     const fetchExpiredProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/user/expired-product');
//         setExpiredProducts(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchExpiredProducts();
//   }, []);

//   return (
//     // <div>
//     //   <h2>Expired Drugs</h2>
//     //   <ul>
//     //     {expiredProducts.map(product => (
//     //       <li key={product._id}>
//     //         {product.name} - Expired on {product.expirationDate.toLocaleDateString()}
//     //       </li>
//     //     ))}
//     //   </ul>
//       <div>
//             <div className='content'>
//                  <Dashboard/>
//             </div>
//            <div class="container">
//             <table class="rwd-table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Sno</th>
                        
//                         <th>Shop name</th>
//                         <th>Drug name</th>
//                         <th>Quantity</th>
//                         <th>Deliver Date</th>
                        
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         disp.map((user,i) => (
//                             <tr>
//                                 <td data-th="Sno">
//                                     {i+1}
//                                 </td>
                               
//                                 <td data-th="Shop name">
//                                     {user.shopname}
//                                 </td>
//                                 <td data-th="Shop name">
//                                     {user.drugname}
//                                 </td>
//                                 <td data-th="Deliver Date">
//                                     {user.order_date}
//                                 </td>
                               
                                
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//             </div>
//         </div>
//     </div>

//   );
// };

// export default Expireddrug;
