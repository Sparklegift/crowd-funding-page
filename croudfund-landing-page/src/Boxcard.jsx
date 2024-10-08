const Boxcard = ({card, handleConsole}) => {
    const {title, subTitle, content, day, stock} = card;

    return ( 
        <div className={`flex justify-center items-center `}>
            <div className={`border-2 rounded-lg font-sans grid gap-7 pl-4 pr-4.5 md:pl-5 md:pr-5 md:pb-10 p-4 ${card.day === 0 ? 'opacity-40  filter' : 'opacity-100'}`}>
                <div className="md:flex items-center md:relative ">
                    <h1 className="font-bold text-lg">{title}</h1>
                    <p className="font-bold text-sm text-cya-moderate pt-1 md:pt-0 md:absolute md:right-3">{subTitle}</p>
                </div>
                <p className="text-sm text-cya-dark md:text-base">{content}</p>
                <div className="grid gap-7 md:flex md:relative md:items-center">
                    <div className="flex gap-2 items-center">
                        <h1 className="font-bold text-3xl">{day}</h1> 
                        <p className="text-sm text-cya-dark">left</p>
                    </div>
                    <div onClick={() => handleConsole('reward')} className="md:absolute right-2">
                        <div className={`bg-cya-moderate hover:bg-cya-moderate2 w-40 h-12 rounded-full flex justify-center font-semibold items-center text-white cursor-pointer ${card.day === 0 ? 'grayscale filter' : 'grayscale-0'}`}>{stock}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Boxcard;