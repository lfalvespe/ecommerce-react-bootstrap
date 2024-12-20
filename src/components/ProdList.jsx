import { useState, useEffect } from "react"

import ProdCard from '../components/ProdCard'

const ProdList = () => {

  const APiUrl = 'https://fakestoreapi.com/products?limit=10'

  const [list, setList] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(!loading)

    fetch(APiUrl)
      .then(res => res.json())
      .then(data => {
        setList(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(`${err}`)
        console.log(`${err}`)
        setLoading(false)
      })

  }, [])

  return (
    <>
      {loading
        ? (<p className='text-warning text-center'><img src="/loading.svg" className="img w-25" alt="" /> <br />Carregando produtos</p>)
        : (
          <div className="container d-flex flex-wrap justify-content-center gap-3 pb-4">

            {error
              ? (<p className='text-warning'>Erro ao carregar dados da API:  <span className='text-danger'>{error}</span></p>)
              : (
                list && list.map(prod => (
                  <ProdCard
                    key={prod.id}
                    id={prod.id}
                    category={prod.category}
                    title={prod.title}
                    imgUrl={prod.image}
                    price={prod.price}
                  />
                ))
              )
            }

          </div>
        )

      }

    </>
  )
}

export default ProdList