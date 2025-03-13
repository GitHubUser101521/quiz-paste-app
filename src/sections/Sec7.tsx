
function Sec7() {
    return (
        <div className='section'>
            <div className='relative flex items-end justify-center w-fit'>
                <img src="/sec7-tablet.png" className='absolute w-3/7 left-55 slide-right' />
                <img src="/sec7-laptop.png" className='relative squeeze-in w-4/7 z-10' />
                <img src="/sec7-mobile.png" className='absolute w-1/7 z-20 right-65 slide-left' />
            </div>

            <div className="my-20 flex flex-col gap-12">
                <p className='text-2xl text-center'>
                    Try Paste today and see the difference it can make in streamlining your workflow. 
                    <br />
                    Empower yourself and take control of your productivity journey.
                </p>

                <div className="flex items-center justify-center gap-4 text-left">
                    <button className="bg-custom-black download-btn">
                        <div>
                            <img src="/apple-icon.svg" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Download on</p>
                            <p className="text-lg -mt-1">App Store</p>
                        </div>
                    </button>

                    <button className="bg-dark-gray download-btn">
                        <div>
                            <img src="/setapp-icon.svg" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Download on</p>
                            <p className="text-lg -mt-1">Setapp</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sec7
