import React from 'react'
import next from 'next'
import styles from './page.module.css'
import "@fontsource/poppins";
function Hero() {
  return (
    <div className={styles['main-box']}>
        <h1 className='text-7xl font-bold max-w-6xl text-center text-white alfa-slab-one-regular tracking-widest leading-normal pt-10'><span className='text-amber-400'>MASTER</span><span style={{fontFamily:'poppins', fontWeight:'900'}}> THE ART OF SELECTING </span><span className='text-amber-400'>STOCKS</span> WITH STOCKTUTOR's</h1>
    </div>
  )
}

export default Hero