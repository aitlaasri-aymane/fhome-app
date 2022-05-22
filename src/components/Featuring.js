import React from 'react'
import microsoft from '../assets/img/microsoft.png'
import google from '../assets/img/google.png'
import cisco from '../assets/img/cisco.png'
import amazon from '../assets/img/amazon.png'

export default function Featuring() {
  return (
    <div class="grid grid-cols-4 gap-32">
        <div>
            <img src={microsoft} alt='microsoft'/>
        </div>
        <div>
            <img src={amazon} alt='amazon'/>
        </div>
       
        <div>
            <img src={google} alt='google'/>
        </div>
        <div className='self-center'>
            <img src={cisco} alt='cisco'/>
        </div>
    </div>
  )
}
