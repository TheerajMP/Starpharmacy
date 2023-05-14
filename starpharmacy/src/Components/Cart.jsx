import React, { useRef, useState } from "react";
import '../cssFiles/cart.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
const Cart = () => {
    const form = useRef();
    const sendEmail = (e) => {
        toast(`Email sent to shopkeeper`)
        e.preventDefault();

        emailjs.sendForm('service_jt8qc39', 'template_tqlfnvh', form.current, 'fjfU14tleoKx1oVKt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    const productData = [
        {
            "id": 1,
            "name": "Acetominophen",
            "price": 15,
            "qty": 0,
        },
        {
            "id": 2,
            "name": "Amlodipine",
            "price": 25,
            "qty": 0,
        },
        {
            "id": 3,
            "name": "Naproxen",
            "price": 18,
            "qty": 0,
        },
        {
            "id": 4,
            "image": "Brimonidine",
            "name": "Azithromicin",
            "price": 60,
            "qty": 0,
        },
        {
            "id": 5,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Ibuprofrn",
            "price": 80,
            "qty": 0,
        },
        {
            "id": 6,
            "image": "http://dummyimage.com/440x620.png/cc0000/ffffff",
            "name": "Gabapentin",
            "price": 35,
            "qty": 0,
        },
        {
            "id": 7,
            "image": "http://dummyimage.com/440x620.png/dddddd/000000",
            "name": "Atenol",
            "price": 12,
            "qty": 0,
        },
        {
            "id": 8,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Levothyroxin",
            "price": 20,
            "qty": 0,
        },
        {
            "id": 9,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Paracetamol",
            "price": 65,
            "qty": 0,
        },
        {
            "id": 10,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Antacids",
            "price": 15,
            "qty": 0,
        },
        {
            "id": 11,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Neomycin",
            "price": 4,
            "qty": 0,
        },
        {
            "id": 12,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Bismuth subsalicylate",
            "price": 98,
            "qty": 0,
        },
        {
            "id": 13,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Pepto Bismol",
            "price": 54,
            "qty": 0,
        },
        {
            "id": 14,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "cola syrup",
            "price": 8,
            "qty": 0,
        },
        {
            "id": 15,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Passion Fruit",
            "price": 80,
            "qty": 0,
        },
        {
            "id": 16,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "coldrex",
            "price": 80,
            "qty": 0,
        },
        {
            "id": 17,
            "image": "http://dummyimage.com/440x620.png/5fa2dd/ffffff",
            "name": "Cetirizine",
            "price": 10,
            "qty": 0,
        }
    ]
    const [filteredList, setFilteredList] = new useState(productData);
    const filterBySearch = (event) => {

        const query = event.target.value;

        var updatedList = [...productData];

        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredList(updatedList);
    };
    const increaseQuantity = (i) => {
        setFilteredList((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    return {
                        ...data,
                        qty: data.qty + 1
                    };
                }
                return data;
            })
        );
    };
    const decreaseQuantity = (i) => {
        setFilteredList((preValue) =>
            preValue.map((data, o) => {
                if (i === o) {
                    if (data.qty > 0) {
                        return { ...data, qty: data.qty - 1 };
                    } else {
                        return data;
                    }
                }
                return data;
            })
        );
    };
    const removeFromCart = (i) => {
        if (window.confirm("Are you sure you want to remove into your cart?")) {
            setFilteredList(prevCart =>
                prevCart.filter((item, o) => {
                    return i !== o;
                })
            );
        } else {
            // alert('No');
        }
    };
    const emptycart = () => {
        if (window.confirm("Remove all items into your cart?")) {
            setFilteredList([]);
        } else {
            // alert('No');
        }
    }
    const cartTotalQty = filteredList.reduce((acc, data) => acc + data.qty, 0);
    const cartTotalAmount = filteredList.reduce((acc, data) => acc + data.price * data.qty, 0);
    return (
        <div className="demo">
            <div className="row justify-content-center m-0 ">
                <div className="col-md-8 mt-5 mb-5">
                    <div className="card1">
                        <div className="card-header bg-dark p-3">
                            <div className="card-header-flex">
                                <h5 className="text-white m-0">Cart Calculation {filteredList.length > 0 ? `(${filteredList.length})` : ''}</h5>
                                <div className="search-box">
                                    <input id="search-box" placeholder="SEARCH 🔒" onChange={filterBySearch} />
                                </div>
                                {
                                    filteredList.length > 0 ? <button className="btn btn-danger mt-0 btn-sm" onClick={() => emptycart()}><i className="fa fa-trash-alt mr-2"></i><span>Empty Cart</span></button> : ''}
                            </div>
                        </div>
                        <div className="card-body p-0">
                            {
                                filteredList.length === 0 ? <table className="table cart-table mb-0">
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">
                                                <div className="cart-empty">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <p>Your Cart Is empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> :
                                    <table className="table cart-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className="text-right"><span id="amount" className="amount">Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filteredList.map((data, index) => {
                                                    const { id, image, name, price, qty } = data;
                                                    return (
                                                        <tr key={index}>
                                                            <td><button className="prdct-delete" onClick={() => removeFromCart(index)}><i className="fa fa-trash-alt"></i></button></td>
                                                            <td><div className="product-name"><p>{name}</p></div></td>
                                                            <td>${price}</td>
                                                            <td>
                                                                <div className="prdct-qty-container">
                                                                    <button className="prdct-qty-btn" type="button" onClick={() => decreaseQuantity(index)}>
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input type="text" name="qty" className="qty-input-box" value={qty} disabled />
                                                                    <button className="prdct-qty-btn" type="button" onClick={() => increaseQuantity(index)}>
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="text-right">${(qty * price).toFixed(0)}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th colSpan="3">&nbsp;</th>
                                                <th>Items in Cart<span className="ml-2 mr-2">:</span><span className="text-danger">{cartTotalQty}</span></th>
                                                <th className="text-right">Total Price<span className="ml-2 mr-2">:</span><span className="text-danger" >$ {cartTotalAmount.toFixed(0)}</span></th>
                                            </tr>
                                            <tr>
                                            </tr>

                                        </tfoot>
                                    </table>
                            }
                            <form ref={form} onSubmit={sendEmail}>
                                <input className="kk" style={{ width: "15%" }} readOnly value={cartTotalAmount.toFixed(0)} type="text" name="price" />
                                <button className="kk">Send Response</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;