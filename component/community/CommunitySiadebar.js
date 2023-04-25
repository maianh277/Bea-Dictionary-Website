

const CommunitySidebar = () => {
    return (
        <div className='font-serif'>
            <div className="w-full h-20 bg-lime-100  top-0 left-0 fixed">
                <img className="h-20 w-50 pt-0 pl-16 " src={require('./image/Name_Community.png')} alt="Display"/>
            </div>
            <aside id="default-sidebar" className="fixed top-20 left-0 z-40 w-60 h-screen " >
                <div className="h-full px-2 py-4 overflow-y-auto  bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-serif">
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <img className='h-7 w-7' src={require('./image/group.png')} alt="Display"/>
                                <span className="ml-4 text-sm font-bold">Common Community</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <img className='h-6 w-6' src={require('./image/add-group.png')} alt="Display"/>
                                <span className=" ml-5 whitespace-nowrap text-sm font-bold">My Group</span>
                                <img className='items-center justify-center px-2 ml-10 text-sm  text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300' src={require('./image/caret_down.png')} alt="Display"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <aside id='hover-sidebar' className='fixed top-48 left-0 z-40 w-60 h-screen' aria-label="Sidebar">
                <div className="h-48 px-2 py-1 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                    <ul className="space-y-2 font-serif">
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <span className='ml-14 w-5 h-5 bg-red-500 rounded-full'></span>
                                <span className=" ml-4 whitespace-nowrap text-sm font-normal">IELTS group</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <span className='ml-14 w-5 h-5 bg-orange-500 rounded-full'></span>
                                <span className=" ml-4 whitespace-nowrap text-sm font-normal">TOIEC group</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <span className='ml-14 w-5 h-5 bg-yellow-500 rounded-full'></span>
                                <span className=" ml-4 whitespace-nowrap text-sm font-normal">Speaking group</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-lime-300 dark:hover:bg-gray-700">
                                <span className='ml-14 w-5 h-5 bg-cyan-500 rounded-full'></span>
                                <span className=" ml-4 whitespace-nowrap text-sm font-normal">Writting group</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div class>
                
            </div>
        </div>

    )
};
export default CommunitySidebar;