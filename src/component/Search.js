import React from 'react'
import styled from "styled-components"
const Search = ({recipe}) => {
  return (
    <FoodCardContainer>
          <FoodCard>
            {recipe?.map((f)=>(
            <FoodDiv key={f.name}>
                <div className='im'>
                    <img src={f.imageSrc} alt="pic"></img>
                </div>
                <div className='n'>
                    <p>{f.name}</p>
                    <p className='p'>{f.rating}</p>
                </div>
            </FoodDiv>
            ))}
          </FoodCard>
        </FoodCardContainer>
  )
}

export default Search

const FoodDiv=styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-radius:10px;
width:330px;
height:170px;

border: 0.66px solid;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

background: radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(165, 239, 255, 0.2) 0%, rgba(110, 191, 244, 0.0447917) 77.08%, rgba(70, 144, 213, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


`
const FoodCard=styled.div`
display:flex;
gap:30px;
overflow-x:scroll;
padding:20px;
flex-wrap:wrap;
width:75%;
margin:auto;
.n{
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
    p{
    color:tomato;
}
.p{
  background-color:red;
  width:40px;
  display:flex;
  align-self: end;
  justify-content:center;
}
}
.im{
    
    img{
        width:120px;
        border-radius:50%;
        height:120px;
    }
}
`
const FoodCardContainer=styled.section`
min-height:calc(100vh - 140px);
background-image:url("https://images.pexels.com/photos/1026691/pexels-photo-1026691.jpeg?cs=srgb&dl=curry-delicious-food-delicious-indian-food-indian-cuisine-1026691.jpg&fm=jpg");
background-size:cover;
`