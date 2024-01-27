import React from 'react'

function Nav() {
  return (
    <div>
        <div className='container'> 
        <div>
            <h1 className='text-primary'>BHUKY SUMAN</h1>
            <p>Hi suman these is my first website demo these is done for the checking purpose is these working proper are not once it check will complete practices completley will try for further</p>


        </div>
        <div>
            <h4>Enter your below details:</h4>
            <form className='w-50'>
                <input className='form-control  mt-5 ' placeholder='Enter your name' type="name"></input>
                <input className='form-control  mt-2 ' placeholder='Enter your Age'  type="number"></input> 
                <button className=' btn btn-secondary mt-3' onClick={()=>{
                    alert('entered details will be submiited')
                    
                }}>SUMBIT</button>
            </form>
        </div>



        </div>




    </div>
  )
}

export default Nav