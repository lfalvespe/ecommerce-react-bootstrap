import React from 'react'

const About = () => {
  return (
    <div className='text-light text-center'>
      <h1>About</h1>
      <p className='p-3'>
        Página inicial de um e-commerce criado com React e estilizado com Bootstrap.
      </p>
      <div className='p-3 container'>

        <p className='bg-primary rounded-3 col-lg-7 mx-auto'>Conceitos abordados:</p>

        <ul className='list-group fw-bolder mx-auto my-4 col-lg-7'>
          <li className='list-group-item'>React Hooks</li>
          <li className='list-group-item'>Componentização</li>
          <li className='list-group-item'>Props</li>
          <li className='list-group-item'>Renderização condicional</li>
          <li className='list-group-item'>Consumo de APIs (Fake Store API )</li>
          <li className='list-group-item'>Tratamento de Erros</li>
          <li className='list-group-item'>Tratamento de Loading</li>
        </ul>
      </div>
    </div>
  )
}

export default About