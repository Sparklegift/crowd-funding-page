const Defactive = ({card, toggleDropdown, openRadio, handlesummit, submitted, reward}) => {
const {title, subTitle, day, content} = card;
    
    return ( 
        <div className={` md:flex md:justify-center ${card.day === 0 ? 'opacity-40  filter' : 'opacity-100'}`}>
            <div onClick={toggleDropdown} className={`border-2 md:w-11/12 rounded-lg grid gap-6 pt-9 pb-6 ${openRadio && `border-cya-moderate`}`}>
                <div className="md:hidden grid gap-6">
                    <div>
                        <div className={`text- font-bold flex gap-4 items-center pl-5`}>
                            <div>
                                <div className="w-6 h-6 rounded-full border-2 flex justify-center items-center cursor-pointer">
                                    <div className={`w-3 h-3 rounded-full bg-cya-moderate ${openRadio? `block` : `hidden`}`}></div>
                                </div>
                            </div>
                            <div className="">
                                <label className="text-sm font-bold">{title}</label>
                                <p className="text-cya-moderate text-sm">{subTitle}</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-cya-dark text-sm pr-3.5 pl-5">{content}</p>
                    <div className="flex gap-1 items-center pl-7">
                        <h1 className="font-bold text-lg">{day}</h1> 
                        <p className="text-sm text-cya-dark">left</p>
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="flex relative">
                        <div className={`font-bold flex gap-6 items-center pl-8`}>
                            <div onClick={toggleDropdown} className={`${card.day === 0? `opacity-0` : `opacity-100`}`}>
                                <div className="w-5 h-5 rounded-full border-2 flex justify-center items-center">
                                    <div className={`w-2 h-2 rounded-full bg-cya-moderate ${openRadio? `block` : `hidden`} ${reward? `block` : `block`}`}></div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <label className="text-sm font-extrabold">{title}</label>
                                <p className="text-cya-moderate text-sm">{subTitle}</p>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center absolute right-14">
                            <h1 className="font-bold ">{day}</h1> 
                            <p className=" text-cya-dark">left</p>
                        </div>
                    </div>
                    <p className="text-cya-dark text-sm pr-13 pl-19 pt-5">{content}</p>
                </div>

                {openRadio  && (
                    <div className={`grid gap-6 ${card.day === 0? `hidden` : `block`}`}>
                        <hr/>
                        <div className="grid gap-6 md:flex md:relative ">
                            <h3 className="text-center text-cya-dark font-semibold pl-8">Enter your pledge</h3>

                            <div className="flex gap-3 justify-center md:absolute right-10">
                                <div className="w-4/12 md:w-20 md:p-1 p-3 pl-0 rounded-full border-2 flex gap-3 md:gap-2 justify-center items-center">
                                    <div className="font-sans font-extrabold text-xl md:text-sm text-cya-dark">$</div>
                                    <input type="number" name="continue" placeholder="25" min={25} max={1000} className="border-none  outline-none  text-lg md:text-base md:font-bold font-extrabold placeholder:text-black w-6" />
                                </div>

                                <div className="w-5/12 md:w-28 cursor-pointer bg-cya-moderate rounded-full flex justify-center" onClick={handlesummit} >
                                    <div className="p-3 md:p-1 flex justify-center items-center text-white font-bold">Continue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Defactive;