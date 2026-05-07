'use client'

import {useState, useEffect} from 'react'

import CardsGrid from "@/components/CardsGrid";
import PopularGrid from "@/components/PopularGrid";
import Hero from "@/components/Hero";
import axios from 'axios'


const HomeContainer = () => {

const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)
const [errorMsg, setErrorMsg] = useState(false)

useEffect(()=> {
  handleGetItems()
},[])

const handleGetItems = async () => {
 try {
  const response = await axios.get('https://dummyjson.com/recipes?limit=0');
  const data = response.data.recipes;
  console.log(data)
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
      <PopularGrid popuInfo= {popularInfo}/>
      
      {!loading && <CardsGrid items={items} />}
      
      {loading && <div>LOADING....</div>}  

      {error !== "" && <div>{errorMsg}</div>} 
    </section>
  </div>
  )
}

export default HomeContainer


const popularInfo = [
  { description: "A flavorful stir-fried noodle dish packed with tender chicken fresh vegetables, and a savory soy-based sauce."},
  { description: " A vibrant and refreshing salad combining crisp vegetables, herbs, and a light citrus dressing."},
  { description: " A creamy and comforting pasta dish made with rich sauce, parmesan cheese, and perfectly cooked noodles."},
]

//name: "Mango Salsa Chicken",
//name: "Quinoa Salad with Avocado",
//name: "Tomato Basil Bruschetta",