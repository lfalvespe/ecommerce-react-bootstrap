import { useNavigate } from "react-router-dom"

const DetailsCard = ({ category, title, imgUrl, description, price, reviews, rate }) => {

    const navigate = useNavigate()

    return (

        <>

            <div className="my-4 card col-9 col-md-6 col-lg-5 shadow-lg border border-light">

                <p className="bg-dark text-light text-center text-uppercase p-1 rounded-1 fw-bolder">{category}</p>

                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                </div>
                <img src={imgUrl} className="card-img-top w-25 h-50 mx-auto" alt="..." />
                <p className="mt-2 pt-3 px-3" style={{textAlign: 'justify'}}>
                    {description}
                </p>
                <p className="bg-primary text-light fw-bolder rounded-1">U$ {price}</p>
                <div className='d-flex justify-content-center gap-5 text-secondary fw-bold'>
                    <p>Avaliações: <span className='text-primary'>{reviews}</span></p>
                    <p>Nota: <span className='text-primary'>{rate}</span></p>
                </div>

            </div>

            <button onClick={() => navigate('/') } className='btn btn-primary btn-lg mt-3 mb-5 mx-auto rounded-3'>Voltar</button>

        </>

    )
}

export default DetailsCard