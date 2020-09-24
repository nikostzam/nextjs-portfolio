import React from 'react'
import Panels from './components/Panels'
import Link from 'next/link'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            exit='exit'
            className='wrapper'>
            <Panels />
            <h1>About page</h1>
            <Link href='/'>
                <a>Back to homepage</a>
            </Link>
        </motion.div>
    )
}

export default About;