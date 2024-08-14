import { useState } from "react";
import Boxcard from "./Boxcard";
import Defactive from "./activecard";
import Thankscard from "./Thankscard";


const Home = ({ isOpen, toggleMenu1, isOpen1 }) => {

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
    
  const [submitted, setSubmitted] = useState(false);

  const handlesummit = () => {
      setSubmitted(true);
      console.log(submitted);
  }


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
        <div className="relative md:flex justify-center" >
            <div className={`${isOpen ? 'brightness-50' : 'brightness-100'} ${isOpen1 ? 'brightness-50' : 'brightness-100'}`}>
                <div className={`flex justify-center relative -top-14`}>
                    <div className="w-10/12 md:w-6/12 h-72 md:h-60 bg-white rounded-md">
                        <div className="flex justify-center relative -top-7">
                            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>
                        </div>
                        <div className="font-sans text-center p-3 pt-0">
                            <div className="font-extrabold text-xl md:flex gap-2 justify-center">
                                <h1>Mastercraft Bamboo</h1>
                                <h1>Monitor Riser</h1>
                            </div>
                            <p className="text-sm pt-5 text-cya-dark font-semibold md:pt-3">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                            <div className="flex justify-center items-center pt-6 gap-3 md:relative md:top-6">
                                <div onClick={toggleMenu1} className="w-48 h-12 md:absolute md:left-5 flex items-center justify-center font-bold text-white bg-cya-moderate rounded-full">Back this project</div>
                                <img className="md:hidden" src="/image/icon-bookmark.svg" />
                                <div className="hidden absolute right-5 md:block">
                                <div className="w-40 h-12 rounded-full bg-Darkgray relative flex items-center">
                                    <img className="absolute -start-1 h-14.5" src="/image/icon-bookmark.svg" />
                                    <h3 className="absolute left-14 text-sm font-semibold text-cya-dark">Bookmark </h3>
                                </div>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>

                <div className="flex justify-center relative -top-6 font-sans">
                    <div className="w-10/12 md:w-6/12 h-96 md:h-60 bg-white rounded-md pt-10 pb-10 grid gap-4 md:gap-0">
                        <div className="text-center grid gap-5 md:flex md:justify-center md:items-center">
                            <div className="grid gap-2 md:gap-0">
                                <h1 className="text-3xl font-bold">$89,914</h1>
                                <h3 className="text-sm text-cya-dark">of $100,000 backed</h3>
                            </div>
                            <hr className="w-20 md:w-14  md:rotate-90"/>

                        
                            <div className="grid gap-2 md:gap-0">
                                <h1 className="text-3xl font-bold">5,007 </h1>
                                <h3 className="text-sm text-cya-dark">total backers</h3>
                            </div>
                            <hr className="w-20 md:w-14 md:rotate-90"/>

                        
                            <div className="grid gap-2 md:gap-0">
                                <h1 className="text-3xl font-bold">56</h1>
                                <h3 className="text-sm text-cya-dark">days left</h3>
                            </div>
                        </div>

                        <div className="flex justify-center pt-3 md:pt-0">
                                <div className="bg-Darkgray rounded-full w-10/12 h-3">
                                    <div className="bg-cya-moderate rounded-full w-9/12 h-3"></div>
                                </div>
                            </div>
                    </div>
                </div>
            



                <div className="flex justify-center pb-20 pt-3">
                    <div className="w-10/12 md:w-6/12 bg-white font-sans rounded-md grid gap-6 pt-10 pb-10 pl-4 pr-5 md:p-12.5">
                        <h1 className="text-xl font-bold">About this project</h1>
                        <p className="text-sm text-cya-dark">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                        <p className="text-sm text-cya-dark">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
                        <div className="grid gap-5">
                            {card.map((card, index) => (
                                <Boxcard key={index} card ={card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            

            <div className={`flex absolute -top-44 justify-center  ${isOpen1 ? 'block' : 'hidden'} `}>
                <div className={`rounded-md bg-white w-10/12 md:w-6/12 z-40  md:relative  ${submitted ? `opacity-0` : `opacity-100 `}`}>
                    <div onClick={toggleMenu1} className="absolute right-12 md:right-7 top-8">
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="black" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
                    </div>
                    <div className="pt-3 pb-5 m-4 font-Commissioner grid gap-5">
                        <h1 className="text-lg font-extrabold">Back this project</h1> 
                        <h3 className="text-cya-dark text-sm">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</h3>
                        <div className="md:flex md:justify-center">
                        <div className={`border-2 md:w-11/12 rounded-lg grid gap-10 md:gap-5 pt-9 pb-6 ${openRadio1 && `border-cya-moderate`}`}>
                            <div className="flex gap-3 md:gap-4 pl-6">
                                <div className="font-bold flex gap-3 items-center">
                                    <div onClick={toggleDropdown1}>
                                        <div className="w-6 md:w-5 md:h-5 h-6 rounded-full border-2 flex justify-center items-center">
                                            <div className={`w-3 md:w-2 md:h-2 h-3 rounded-full bg-cya-moderate ${openRadio1? `block` : `hidden`}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <label className="font-bold text-sm md:font-extrabold md:text-xs">Pledge with no reward</label>
                            </div>
                            <p className="text-cya-dark text-sm md:text-xs pr-6 pl-6">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                            {openRadio1 && (
                                <div className="grid gap-6" >
                                    <hr/>
                                   <div className="flex justify-center">
                                   <div className="w-5/12  bg-cya-moderate rounded-full flex justify-center" onClick={handlesummit} >
                                        <div className="p-3 flex justify-center items-center text-white font-bold">Continue</div>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        </div>
                        {card.map((card, index) => (
                            <Defactive key={index} card ={card} toggleDropdown={() => toggleDropdown(index)} openRadio={openRadio[index]} handlesummit={handlesummit} submitted={submitted} />
                        ))}
                    </div>
                </div> 
                <div className={`flex absolute top-9 justify-center items-center z-50 ${submitted ? `block` : `hidden `}`}>
                <Thankscard />
            </div>
            </div> 

            
        </div>
    );
}
 
export default Home;