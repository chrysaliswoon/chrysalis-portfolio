import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import Form from '../../Components/Form/Form'

export default function WelcomeUser({userInput}){
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
        <p>Hi {userInput}! It's nice to meet you!</p>
        </div>
    )
}