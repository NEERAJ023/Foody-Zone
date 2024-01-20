import React from 'react'
import {useState} from 'react'
import {useEffect} from'react'
import styled from "styled-components"
import Search from './component/Search';
let Data=[
  {
      "name": "Vegan Salad",
      "imageSrc": "https://source.unsplash.com/random?salad",
      "time": "20 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.9
  },
  {
      "name": "Veggie Delight",
      "imageSrc": "https://source.unsplash.com/random?veggies",
      "time": "30 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Chicken Grill",
      "imageSrc": "https://source.unsplash.com/random?chicken",
      "time": "45 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Cheese Pizza",
      "imageSrc": "https://source.unsplash.com/random?pizza",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.1
  },
  {
      "name": "Steak",
      "imageSrc": "https://source.unsplash.com/random?steak",
      "time": "60 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.7
  },
  {
      "name": "Grilled Salmon",
      "imageSrc": "https://source.unsplash.com/random?salmon",
      "time": "50 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Tomato Pasta",
      "imageSrc": "https://source.unsplash.com/random?pasta",
      "time": "35 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.0
  },
  {
      "name": "Fried Chicken",
      "imageSrc": "https://source.unsplash.com/random?friedChicken",
      "time": "55 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "Mushroom Risotto",
      "imageSrc": "https://source.unsplash.com/random?risotto",
      "time": "45 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.5
  },
  {
      "name": "Burger",
      "imageSrc": "https://source.unsplash.com/random?burger",
      "time": "30 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.2
  },
  {
      "name": "Paneer Tikka",
      "imageSrc": "https://source.unsplash.com/random?paneerTikka",
      "time": "40 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.4
  },
  {
      "name": "BBQ Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.6
  },
  {
      "name": "Caesar Salad",
      "imageSrc": "https://source.unsplash.com/random?caesarSalad",
      "time": "25 min",
      "type": "veg",
      "isLiked": false,
      "rating": 3.8
  },
  {
      "name": "Fish Tacos",
      "imageSrc": "https://source.unsplash.com/random?fishTacos",
      "time": "35 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 4.3
  },
  {
      "name": "BBA Ribs",
      "imageSrc": "https://source.unsplash.com/random?ribs",
      "time": "70 min",
      "type": "non-veg",
      "isLiked": false,
      "rating": 3.6
  },
  {
      "name": "Chocolate Cake",
      "imageSrc": "https://source.unsplash.com/random?chocolateCake",
      "time": "90 min",
      "type": "veg",
      "isLiked": false,
      "rating": 4.9
  }];


  
const App = () => {
  const [recipe,setRecipe]=useState("");
  const[btntype,setbtntype]=useState("all");

   useEffect( ()=>{
     setRecipe(Data);
  },[])

  const SearchInput=(e)=>{
    let curr=e.target.value;
    let recipes=Data.filter((food)=>food.name.toLowerCase().includes(curr.toLowerCase()))
    
    setRecipe(recipes);
 }
 const showdiv=(wow)=>{
      if(wow==="all"){
        setRecipe(Data)
        setbtntype("all")
        console.log("1")
        return;
      }

      const filter=Data.filter((food)=>(
             food.type.toLowerCase().includes(wow.toLowerCase())
      ))
      
      setRecipe(filter)
      setbtntype(wow)
 }
  return (
    <Maincontainer>
        <Topcontainer>
         <div className='logo'>
            <img src="https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1705764935~exp=1705765535~hmac=9b131093b371558adb198ff3e884cca83f90ebbabf1b6192ab5b7fb741bbb5ed"alt="pic"></img>
         </div>
         <div className='search'>
            <input 
            type="text" 
            placeholder='Search Food....'
            onChange={SearchInput}
            />
         </div>
        </Topcontainer>
        <Filtercontainer>
          <Button onClick={()=>showdiv("all")}>All</Button>
          <Button onClick={()=>showdiv("veg")}>Breakfast</Button>
          <Button onClick={()=>showdiv("non-veg")}>Lunch</Button>
        </Filtercontainer>
        <Search recipe={[...recipe]} />
    </Maincontainer>
  )
}

export default App



const Maincontainer=styled.div`
background-color:#323334;


`
const Filtercontainer=styled.section`
display:flex;
gap:10px;
justify-content:center;
padding:20px 0;
position:sticky;top:0px;
`
const Button=styled.button`
background-color:#ff4343;
border:none;
border-radius:5px;
padding:6px 12px;
`
const Topcontainer=styled.div`
display:flex;
position:sticky;top:0px;
width:80%;
background-color:#323334;
margin:auto;
justify-content:space-between;
align-items:center;
.logo {
  img{
    width:80px;
    height:80px;
    border-radius:50%;
}
}
.search {
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    border-radius:5px;
    height:40px;
    padding:0 10px;
  }
}
`