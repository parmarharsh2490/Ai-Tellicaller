import BookDemoButton from "./BookDemoButton"

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[59] p-2 md:p-3  mx-2 sm:mx-4">
    <div className="flex items-center">
      <img src="logo.svg" alt="Dialoft AI Logo" className="h-8 sm:h-10" />
      {/* <span className="ml-2 text-xl font-bold gradient-text">Dialoft AI</span> */}
    </div>
    <div className= "flex md:hidden text-sm items-center space-x-3 font-helvetica text-gray-300 tracking-wide" style={{color : "#848895"}}>
    <a href="#" className="hover:text-purple-400">Human VS AI</a>
    <a href="#" className="hover:text-purple-400">Industries</a>
    </div>
    <div className="hidden md:flex" style={{gap : "21px"}}>
      <div className="flex items-center  space-x-10 lg:space-x-54 text-lg font-helvetica font-medium" style={{color : "#848895"}}>
      <a href="#" className="hover:text-purple-400 ">Human VS AI</a>
      <a href="#" className="hover:text-purple-400 ">Industries</a>
      <a href="#" className="hover:text-purple-400 ">Contact us</a>
      <a href="#" className="hover:text-purple-400 ">Team</a>
      </div>
      <div className="">
      <BookDemoButton/>
      </div>
    </div>
  </nav>
  )
}

export default Navigation