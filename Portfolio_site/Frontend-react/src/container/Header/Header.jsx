import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale:[0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 1}}
      className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>

            <div style={{ marginLeft: 20}}>
              <p className='p-text'> Hello, I am </p>
              <h2>Weihong Qi!</h2>
              <p className='p-text'>
                I am a Ph.D. candidate in Political Science and a M.S. student in Data Science at University of Rochester.
                </p>
                <p className='p-text'> 
                I have broad interests in applying computational methods to abstrct insights from the real world data and enhance people's life accordingly.
                </p>
                <p className='p-text'>
                  Before I come to Rochester, I obtained M.A. in Public Policy Studies at University of Chicgao and a B.A. in Economics at Wuhan University.
                </p>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text' style={{color: "black"}}>Ph.D. candidate in Political Science</p>
            <p className='p-text' style={{color: "black"}}> M.S. in Data Science</p>
            <p className='p-text' style={{color: "black"}}> Full-stack Developer</p>
          </div>

        </div>
      </motion.div>

      <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 1.0, delayChildren: 1}}
              className='app__header-img'
      >

        <img src ={images.MyPhoto} alt = 'profile-bg'/>
      </motion.div>



      <motion.div
      variant={scaleVariants}
      whileInView = {scaleVariants.whileInView}
      className="app__header-circles"
      >
        {[images.python, images.java, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>

    </div>
  )
}

export default AppWrap(Header, 'home');