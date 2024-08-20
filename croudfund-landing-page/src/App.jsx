import { useState } from "react";
import Home from "./Home"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom";

function App() {


  const [isHovered, setIsHovered] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const hoverClick = (targetId) => {
    setIsOpen();
    navigate('/');
    setTimeout(() => {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      setIsHovered(true);
      setTimeout(() => {
        setIsHovered(false);
      }, 800);
  
    }, 400);
  };


  const toggleMenu1 = () => {
    if (isOpen){
      setIsOpen1()
    } else{
      setIsOpen1(!isOpen1);
    }
  };

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
      <Navbar toggleMenu={toggleMenu} isOpen={isOpen} isOpen1={isOpen1} hoverClick={hoverClick} setIsOpen={setIsOpen} />
      <Home isOpen={isOpen} toggleMenu1={toggleMenu1} isOpen1={isOpen1} isHovered={isHovered} setIsOpen1={setIsOpen1} />
    </>
  )
}

export default App
