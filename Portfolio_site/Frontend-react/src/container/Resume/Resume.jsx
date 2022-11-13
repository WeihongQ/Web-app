import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Resume.scss'
import { icons } from 'react-icons/lib';


const Resume = () => {
    const [resume, setResume] = useState([])

    useEffect(() => {
        const query = '*[_type == "resume"]'

        client.fetch(query)
        .then((data) =>{
          setResume(data);
        })
        
    }, [])


  return (
    <>
    <h2 className='head-text'> Weihong's <span>CV/Resume</span> </h2>

    <motion.div
    transition = {{duration: 0.5, delayChildren: 0.5}}
    className= 'app__cv-portfolio'
    >

        {resume.map((cv) => (
        <div className='app__cv-item app__flex' key={cv.field}>
          <div className='app__cv-img app__flex'>
            <img src={urlFor(cv.icon)} alt={cv.field} />

            <motion.div
              whileHover = {{opacity: [0,1]}}
              transition = {{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
              className = 'app__cv-hover app__flex'
            >
              <a
              href={cv.file} target = "_blank" rel="noreferrer">
                
                <motion.div
                whileHover={{scale: [1, 0.9]}}
                whileInView={{scale: [0,1]}}
                transition={{ duration: 0.25}}
                className = 'app__flex'
                >
                  <AiFillEye />

                </motion.div>
              </a>

            </motion.div>
          </div>

            <div className='app__cv-content app__flex'>
              <h4 className='bold-text'> { cv.field } </h4>
              <p className='p-text' style={{marginTop: 10}}>{cv.field}</p>
            
            
            </div>

        </div>
      ))}
      
        
    </motion.div>
    
    </>
  )
}

export default AppWrap(Resume, 'resume')