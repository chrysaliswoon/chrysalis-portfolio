import React, {useEffect} from 'react'
import { useNavigate } from 'react-router'


export default function WelcomeUser(){
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            // console.log('1 second passed')
            navigate('/loading')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
        <p>Hi ! It's nice to meet you!</p>

        </div>
    )
}