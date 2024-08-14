import { useState } from "react";
import Home from "./Home"
import Navbar from "./Navbar"

function App() {

  const [isOpen1, setIsOpen1] = useState(false);

// }

  const toggleMenu1 = () => {
    if (isOpen){
      setIsOpen1()
    } else{
      setIsOpen1(!isOpen1);
    }
  };
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen1){
      setIsOpen1(!isOpen1);
      setIsOpen(!isOpen)
    } else{
      setIsOpen(!isOpen);
    }
  };


  return (
    <>
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} isOpen1={isOpen1} />
      <Home isOpen={isOpen} toggleMenu1={toggleMenu1} isOpen1={isOpen1} />
    </>
  )
}

export default App
