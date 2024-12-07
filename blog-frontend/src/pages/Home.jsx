import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <>
     <Banner/>
     <div className='max-w-7xl mx-auto'>
            <BlogPage/>
        </div>
    </>
   
    
  )
}

export default Home