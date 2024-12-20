import { Link } from "react-router-dom"


const ProdCard = ({ id, category, title, imgUrl, price }) => {

    return (

        <div className="card col-6 col-lg-3 shadow-lg border border-light d-flex flex-column justify-content-space-between gap-1" style={{ width: '18rem' }}>

            <p className="bg-dark text-light text-center text-uppercase p-1 rounded-1 fw-bolder">{category}</p>
            <Link to={`/products/${id}`} className="container text-center mx-auto h-100">
                <img src={imgUrl} className="card-img-top w-50 rounded-3" alt="..." style={{height: "150px", filter:"drop-shadow(1px 1px 2px #0000008f)"}}/>
            </Link>
            <div className="card-body h-100 bg-secondary rounded-5 mx-1 d-flex justify-content-center align-items-center" style={{boxShadow: "1px 1px 2px #00069"}}>
                <h6 className="card-title text-center text-light shadow-3" >{title}</h6>
            </div>

            <Link to={`/products/${id}`} className="btn rounded-1 btn-primary ">U$ {price}</Link>
        </div>

    )

}

export default ProdCard