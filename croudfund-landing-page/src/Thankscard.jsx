const Thankscard = () => {
    return ( 
        <div className="w-10/12 md:w-9/12 bg-white font-Commissioner rounded-md p-4 md:p-20 grid gap-7 pt-9 pb-9">
            <div className="flex justify-center">
                <img src="/image/icon-check.svg" />
            </div>
            <h1 className="text-center md:text-xl font-extrabold">Thanks for your support!</h1>
            <p className="text-center text-sm text-cya-dark">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
            <form className="flex justify-center">
                <button type="submit" className="w-5/12 text-white bg-cya-moderate rounded-full p-3 font-bold">Got it</button>
            </form>
        </div>
    );
}
export default Thankscard;