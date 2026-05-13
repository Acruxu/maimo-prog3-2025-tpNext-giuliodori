'use client'

import {useState, useEffect} from 'react'

import CardsGrid from "@/components/CardsGrid";
import PopularGrid from "@/components/PopularGrid";
import Hero from "@/components/Hero";
import axios from 'axios'


const HomeContainer = () => {

const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const [popularRecipes, setPopularRecipes] = useState([]);
const [error, setError] = useState(false)
const [errorMsg, setErrorMsg] = useState(false)

useEffect(()=> {
  handleGetItems()
},[])

const handleGetItems = async () => {
 try {
  const response = await axios.get('https://dummyjson.com/recipes?limit=0');
  const data = response.data.recipes;
  const [,,,cuartoElemento,quintoElemento,sextoElemento] = data
  setPopularRecipes([cuartoElemento,quintoElemento,sextoElemento])
  console.log(data)
  console.log(popularRecipes)
  setItems(data);
  setLoading(false);
 } catch (error) {
  console.log('Hubo un error', error);
  setError(true)
  setErrorMsg('hubo un error')
}
};


  return (
    <div>
    <section>
      <Hero/>
       
      
      {!loading && <><PopularGrid popuInfo={popularInfo} popuInfoApi={popularRecipes}/> <CardsGrid items={items} /> </>}
      
      {loading && <div className="flex justify-center items-center p-3 m-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"  className="h-16 w-16"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#FF7B54"></stop><stop offset=".3" stopColor="#FF7B54" stopOpacity=".9"></stop><stop offset=".6" stopColor="#FF7B54" stopOpacity=".6"></stop><stop offset=".8" stopColor="#FF7B54" stopOpacity=".3"></stop><stop offset="1" stopColor="#FF7B54" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#FF7B54" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg></div>}  

      {error !== "" && <div>{errorMsg}</div>} 
    </section>
  </div>
  )
}

export default HomeContainer


const popularInfo = [
  { description: " A creamy and comforting pasta dish made with rich sauce, parmesan cheese, and perfectly cooked noodles."},
  { description: "A flavorful stir-fried noodle dish packed with tender chicken fresh vegetables, and a savory soy-based sauce."},
  { description: " A vibrant and refreshing salad combining crisp vegetables, herbs, and a light citrus dressing."},
  
]

//name: "Mango Salsa Chicken",
//name: "Quinoa Salad with Avocado",
//name: "Tomato Basil Bruschetta",