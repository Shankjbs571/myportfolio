



export default function Terminal(){



    return(

        // <!-- Main modal -->
        <div id="default-modal" data-modal-backdrop="static"  tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden transition duration-700 fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-3/4 " data-modal-backdrop="static">
                {/* <!-- Modal content --> */}
                <div className="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700" data-modal-backdrop="static">
                    {/* <!-- Modal header --> */}
                    <div className="relative flex items-center justify-between p-2 md:p-5 border-b rounded-t dark:border-gray-600">
                        {/* <h3 className="text-xl font-semibold text-gray-900 dark:text-white"> */}
                            {/* Terms of Service */}
                        {/* </h3> */}
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {/* With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply. */}
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {/* The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them. */}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}