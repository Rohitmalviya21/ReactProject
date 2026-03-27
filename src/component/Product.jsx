import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    const getdata = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products');
            const res = await data.json();
            console.log(res);
            setProduct(res);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <>
            <div className='container product-section'>
                <h1 className='product-title'>
                    Our <span>products</span>
                </h1>

                <div className='row'>
                    {product.map((items) => {
                        return (
                            <div className='col-md-3 mb-5' key={items.id}>
                                <div className='product-card'>

                                    <img
                                        src={items.image}
                                        alt={items.title}
                                        className='product-img'
                                    />

                                    <div className='product-info'>
                                        <h4>{items.title.slice(0, 15)}</h4>
                                        <span>Rs.{items.price}</span>
                                    </div>


                                    <button className="product-btn"
                                        onClick={() => navigate(`/product/${items.id}`)}>
                                        See More
                                    </button>

                                </div>
                            </div>

                        );

                    })}

                </div>
                <button
                    className='view-product ps-5 pe-5 p-3'
                    onClick={() => navigate('/product')}
                >
                    View All product
                </button>

            </div>






        </>

    )
}

export default Product