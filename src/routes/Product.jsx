import { useState, useEffect } from "react"
import DetailsCard from "../components/DetailsCard"

import { useParams } from "react-router-dom"

const Product = () => {

    const { id } = useParams()

    const [prod, setProd] = useState(null)

    console.log(id)

    const url = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProd(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    return (

        <div className="text-center d-flex flex-column align-items-center">
            <h1 className="text-light"> Detalhes do produto</h1>

            {prod &&
                <DetailsCard
                    category={prod.category}
                    title={prod.title}
                    imgUrl={prod.image} 
                    description={prod.description}
                    price={prod.price}
                    reviews={prod.rating.count}
                    rate={prod.rating.rate}
                />
            }

        </div>
    )
}

export default Product