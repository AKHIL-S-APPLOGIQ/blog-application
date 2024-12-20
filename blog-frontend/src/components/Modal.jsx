import React from 'react'

const Modal = ({isOpen,close}) => {
  return (
   
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center ${isOpen ? '' : "hidden"}`}>

        <div className='modal-container'>
            <div className='bg-indigo-700  text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>

                <h2 className='text-xl font-semibold  mb-4 mt-6 mb-5  uppercase'> Please login Here</h2>
                <form className='px-4'>
                    <div className='mb-5'>
                        <input type="email" name='email' id='email' placeholder='example@gmail.com' className='w-full rounded-md border boder-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'/>
                    </div>
                    <div>
                        <input type="password" name='password' id='password' placeholder='password' className='w-full rounded-md border boder-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'/>
                    </div>
                    <div>
                        <button  className='hover:shadow-md  rounded-md bg-indigo-600  hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>login</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    

  )


}

export default Modal