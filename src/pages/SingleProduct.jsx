import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Product from './Product';

const SingleProduct = () => {
    let { id } = useParams()
    const [sProduct, setSProduct] = useState('');

    const singleData = async () => {
        try {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`);
            const res = await data.json();
            console.log(res);
            setSProduct(res)

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        singleData()

    }, [])

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card shadow p-3">

                            <div className="card-body">
                                <div className="d-flex align-items-start">
                                    <div>
                                        <img
                                            src={sProduct.image}
                                            alt={sProduct.category}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div className="ms-4">
                                        <h3>{sProduct.title}</h3>
                                        <p>
                                            {sProduct.description}
                                        </p>
                                        <h6>
                                            Category:
                                            {sProduct.category}
                                        </h6>
                                        <h5 className="text-success">
                                            ₹ {sProduct.price}
                                        </h5>
                                        <div className="d-flex gap-3 mt-3">
                                            <button className="btn btn-primary px-4">
                                                Buy Now
                                            </button>
                                            <button className="btn btn-warning px-4">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default SingleProduct