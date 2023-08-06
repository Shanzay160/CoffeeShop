import React from 'react'
import AboutSection from './AboutSection'

function Car(props) {
    return <h2>I am a { props.friend }!</h2>;
  }
  
  function Garage() {

    const numbers = ["mango", "strawberry", "apple", "banana"];
const newArr = numbers.map((n)=>n)
console.log(newArr)

return (
      <>
          <h1>Who lives in my garage?</h1>
          <Car friend="Zahra" />
      </>
    );
  }
export default Garage