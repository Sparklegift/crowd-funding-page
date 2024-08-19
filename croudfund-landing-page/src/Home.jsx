import { useState } from "react";
import Boxcard from "./Boxcard";
import Defactive from "./activecard";
import Thankscard from "./Thankscard";
import { useNavigate } from "react-router-dom";


const Home = ({ isOpen, toggleMenu1, isOpen1, isHovered, setIsOpen1 }) => {

    const card = [
            {
                title: 'Bamboo Stand',
                subTitle: 'Pledge $25 or more',
                content: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
                day: 101,
                stock: 'Select Reward',
            },

            {
                title: 'Black Edition  Stand',
                subTitle: 'Pledge $75 or more',
                content: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
                day: 64,
                stock: 'Select Reward',
            },

            {
                title: 'Mahogany Special Edition',
                subTitle: 'Pledge $200 or more',
                content: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
                day: 0,
                stock: 'Out of Stock',
            },
    ]

    const [openRadio, setOpenRadio] = useState(false);
    const [openRadio1, setOpenRadio1] = useState(false);
    const [text, setText] = useState(false);
    const [reward, setReward] = useState(false);
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);

    const handlesummit = () => {
      setSubmitted(true);
      console.log(submitted);
    }

    const handleConsole = (index, targetId) => {
        if (isOpen1){
            setIsOpen1(true)
        } else{
            setReward(!reward)
            setOpenRadio(!openRadio);
            setIsOpen1(!isOpen1);
            if (openRadio1) {
                setOpenRadio1(!openRadio1);
            }

        if (openRadio) {
            setOpenRadio((prevState) => ({
                ...prevState,
                [index]: true,
            }));
        } else {
            setIsOpen1(!isOpen1);
            setOpenRadio((prevState) => ({
                ...prevState,
                [index]: true,
            }));
        }
        }
        navigate('/');
        setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setReward(false);  // Reset reward or any other state after scroll
        }, 200);
        console.log(reward);
    };

  const handletext = () => {
    if(text){
        setText()
    } else {
        setText(true)
    }
    };

    const toggleDropdown1 = () => {
        if (openRadio){
          setOpenRadio1(!openRadio1)
          setOpenRadio(!openRadio)
        } else{
          setOpenRadio1(!openRadio1);
        }
      };

    const toggleDropdown = (index) => {
        if (openRadio1){
            setOpenRadio1(!openRadio1)
            if (!openRadio){
                setOpenRadio((prevState) => ({
                    ...prevState,
                    [index]: !prevState[index],
                }));
            }else {
                setOpenRadio((prevState) => ({
                    ...prevState,
                    [index]: !prevState[index],
                  }));
            } 
        }else{
            setOpenRadio(!openRadio);
            if (!openRadio){
                setOpenRadio((prevState) => ({
                    ...prevState,
                    [index]: !prevState[index],
                }));
            }else {
                setOpenRadio((prevState,) => ({
                    ...prevState,
                    [index]: !prevState[index],
                  }),);
            } 
          
        }
        
      };
    

    return ( 
        <div className="relative flex justify-center" >
            <div className={`${isOpen ? 'brightness-50' : 'brightness-100'} ${isOpen1 ? 'brightness-50' : 'brightness-100'}`}>
                <div id="Started" className={`flex justify-center relative -top-14`}>
                    <div className="w-10/12 md:w-6/12 h-72 md:h-60 bg-white rounded-md">
                        <div className="flex justify-center relative -top-7">
                            <img src="/image/logo-mastercraft.svg" />
                        </div>
                        <div className="font-sans text-center p-3 pt-0">
                            <div className="font-extrabold text-xl md:flex gap-2 md:text-2xl justify-center">
                                <h1>Mastercraft Bamboo</h1>
                                <h1>Monitor Riser</h1>
                            </div>
                            <p className="text-sm md:text-base pt-5 text-cya-dark font-semibold md:pt-3">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                            <div className="flex justify-center items-center pt-6 gap-3 md:relative md:top-6">
                                <div onClick={toggleMenu1} className={`transition-transform duration-500 ease-in-out w-48 h-12 md:absolute md:left-5 flex items-center justify-center font-bold text-white bg-cya-moderate rounded-full cursor-pointer hover:bg-cya-moderate2 ${isHovered && `bg-cya-dark transform scale-110`}`}>Back this project</div>
                                <svg onClick={handletext}  className={`md:hidden`} width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle className={`${text ? 'fill-cya-moderate' : ''}`} fill="#2F2F2F" cx="28" cy="28" r="25"/><path className={`${text ? 'fill-white' : ''}`} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                <div className="hidden absolute right-5 md:block">
                                <div onClick={handletext} className={`w-40 h-12 rounded-full bg-Darkgray relative flex items-center cursor-pointer`}>
                                    <svg className={`absolute -start-1 h-14.5`} width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle className={`${text ? 'fill-cya-moderate' : ''}`} fill="#2F2F2F" cx="28" cy="28" r="25"/><path className={`${text ? 'fill-white' : ''}`} fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>
                                    <h3 className={`absolute left-14 text-sm font-bold text-cya-dark ${text? `hidden` : `block`}`}>Bookmark</h3>
                                    <h3 className={`absolute left-14 text-sm font-bold text-cya-moderate ${text? `block` : `hidden`}`}>Bookmarked</h3>
                                </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>

                <div id="discover" className="flex justify-center relative -top-6 font-sans">
                    <div className="w-10/12 md:w-6/12 h-96 md:h-60 bg-white rounded-md pt-10 pb-10 grid gap-4 md:gap-0 ">
                        <div className="text-center grid items-center  gap-5 justify-center md:flex  md:items-center">
                            <div className="grid gap-2 md:gap-1">
                                <h1 className="text-3xl font-bold">$89,914</h1>
                                <h3 className="text-sm md:text-base text-cya-dark">of $100,000 backed</h3>
                            </div>
                            <div className="flex justify-center">
                            <hr className="w-20 md:w-14  md:rotate-90"/>
                            </div>
                        
                            <div className="grid gap-2 md:gap-1">
                                <h1 className="text-3xl font-bold">5,007 </h1>
                                <h3 className="text-sm md:text-base text-cya-dark">total backers</h3>
                            </div>
                            <div className="flex justify-center">
                            <hr className="w-20 md:w-14  md:rotate-90"/>
                            </div>

                        
                            <div className="grid gap-2 md:gap-1">
                                <h1 className="text-3xl font-bold">56</h1>
                                <h3 className="text-sm md:text-base text-cya-dark">days left</h3>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3 md:pt-0">
                                <div className="bg-Darkgray rounded-full w-10/12 h-3">
                                    <div className="bg-cya-moderate rounded-full w-9/12 h-3"></div>
                                </div>
                            </div>
                    </div>
                </div>
            



                <div id="about" className="flex justify-center pb-20 pt-3">
                    <div className="w-10/12 md:w-6/12 bg-white font-sans rounded-md grid gap-6 pt-10 pb-10 pl-4 pr-2 md:p-12.5">
                        <h1 className="text-xl font-bold">About this project</h1>
                        <p className="text-sm md:text-base  text-cya-dark">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                        <p className="text-sm md:text-base text-cya-dark">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                        <div className="grid gap-5">
                            {card.map((card, index) => (
                                <Boxcard key={index} card ={card} handleConsole={() => handleConsole(index, 'reward')}  />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            

            <div id="reward" className={`flex absolute -top-44 justify-center w-10/12 md:w-6/12  ${isOpen1 ? 'block' : 'hidden'} `}>
                <div className={`z-40  md:relative rounded-md bg-white  ${submitted ? `opacity-0` : `opacity-100 `}`}>
                    <div onClick={toggleMenu1} className="cursor-pointer absolute right-5 md:right-7 top-8">
                        <img src="/image/icon-close-menu.svg" />
                    </div>
                    <div className="pt-3 pb-5 m-4 font-Commissioner grid gap-5">
                        <h1 className="text-lg font-extrabold md:pl-6 ">Back this project</h1> 
                        <h3 className="text-cya-dark text-sm md:text-base md:pl-6">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</h3>
                        <div className="md:flex md:justify-center">
                        <div onClick={toggleDropdown1} className={`border-2 md:w-11/12 rounded-lg grid gap-10 md:gap-5 pt-9 pb-4 ${openRadio1 && `border-cya-moderate`}`}>
                            <div className="flex gap-3 md:gap-6 pl-6 md:pl-8">
                                <div className="font-bold flex gap-3 items-center">
                                    <div>
                                        <div className="w-6 md:w-5 md:h-5 h-6 rounded-full border-2 flex justify-center items-center">
                                            <div className={`w-3 md:w-2 md:h-2 h-3 rounded-full bg-cya-moderate ${openRadio1? `block` : `hidden`}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <label className="font-bold text-sm md:font-extrabold">Pledge with no reward</label>
                            </div>
                            <p className="text-cya-dark text-sm pr-3.5 pl-6 md:pr-13 md:pl-19">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                            {openRadio1 && (
                                <div className={`grid gap-6 md:gap-3`} >
                                    <hr/>
                                    <div className="flex justify-center">
                                        <div className="w-5/12 md:w-3/12 bg-cya-moderate rounded-full flex justify-center" onClick={handlesummit} >
                                            <div className="p-3 md:p-2 flex justify-center items-center cursor-pointer text-white font-bold">Continue</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {card.map((card, index) => (
                        <Defactive key={index} card ={card} toggleDropdown={() => toggleDropdown(index)} openRadio={openRadio[index]} reward={reward} handlesummit={handlesummit} submitted={submitted} />
                    ))}
                </div>
            </div> 
            <div className={`flex absolute top-9 md:top-64 justify-center items-center z-50 ${submitted ? `block` : `hidden `}`}>
                <Thankscard />
            </div>
        </div> 
        </div>
    );
}
 
export default Home;