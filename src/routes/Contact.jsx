

import { FcGoogle } from "react-icons/fc";
import { FcStart } from "react-icons/fc";
import { TiSocialInstagram } from "react-icons/ti";

const Contact = () => {
  return (
    <div className='mb-5 bg-light col-lg-6 mx-auto p-3 rounded-3 '>
        <h2 className="text-center">CONTACT</h2>
       <h4 className="my-3 text-center">Meet us on social media</h4>
        <ul className=" col-lg-7 col-md-12 mx-auto">
          <li><FcGoogle className='bg-dark rounded-3 p-1 display-6'/> <a href="mailto:lfalvespe@gmail.com">lfalvespe@gmail.com</a></li>
          <li><TiSocialInstagram className='bg-dark rounded-3 p-1 display-6 text-light my-2'/> <a href="">instagram.com/lfalvespe</a></li>
          <li><FcStart className='bg-dark rounded-3 p-1 display-6'/> <a href="">youtube.com/lfalvespe</a></li>
        </ul>
    </div>
  )
}

export default Contact