import reactLogo from '../assets/react.svg'

const Header = () => {
  return (
   <header className='bg-light p-3 text-center'>
    <h1 className=' '>Ecommerce React</h1>
    <img className='img bg-dark rounded-5 p-2 border border-info' src={reactLogo} alt="" />
   </header>
  )
}

export default Header