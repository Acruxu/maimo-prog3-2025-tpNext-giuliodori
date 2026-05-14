'use client'
import {useState, useEffect} from 'react'
import axios from 'axios'
import RecipeDetail from '@/components/RecipeDetail'

const RecipeContainer = ({id}) => {
  
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipe/${id}`)
      const data = response.data
      setItem(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setNotFound(true)
    }
  }
  
  useEffect(()=>{
    handleGetRecipe()
  },[])
  
  
  return (
    <div>
      {notFound && <div><h2>Not Found</h2></div>}
      {loading && !notFound && <div className="flex justify-center items-center p-3 m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="h-40 w-40"
            >
              <radialGradient
                id="a9"
                cx=".66"
                fx=".66"
                cy=".3125"
                fy=".3125"
                gradientTransform="scale(1.5)"
              >
                <stop offset="0" stopColor="#FF7B54"></stop>
                <stop offset=".3" stopColor="#FF7B54" stopOpacity=".9"></stop>
                <stop offset=".6" stopColor="#FF7B54" stopOpacity=".6"></stop>
                <stop offset=".8" stopColor="#FF7B54" stopOpacity=".3"></stop>
                <stop offset="1" stopColor="#FF7B54" stopOpacity="0"></stop>
              </radialGradient>
              <circle
                transformOrigin="center"
                fill="none"
                stroke="url(#a9)"
                strokeWidth="15"
                strokeLinecap="round"
                strokeDasharray="200 1000"
                strokeDashoffset="0"
                cx="100"
                cy="100"
                r="70"
              >
                <animateTransform
                  type="rotate"
                  attributeName="transform"
                  calcMode="spline"
                  dur="2"
                  values="360;0"
                  keyTimes="0;1"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                ></animateTransform>
              </circle>
              <circle
                transformOrigin="center"
                fill="none"
                opacity=".2"
                stroke="#FF7B54"
                strokeWidth="15"
                strokeLinecap="round"
                cx="100"
                cy="100"
                r="70"
              ></circle>
            </svg>
          </div>}
      {!loading && !notFound && <RecipeDetail {...item}/>}
    </div>
  )
}

export default RecipeContainer