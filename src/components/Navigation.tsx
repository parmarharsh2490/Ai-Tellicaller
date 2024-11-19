import BookDemoButton from "./BookDemoButton"

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-2">
    <div className="flex items-center">
      {/* <img src="/api/placeholder/40/40" alt="Dialoft AI Logo" className="h-10" /> */}
      <span className="ml-2 text-xl font-bold gradient-text">Dialoft AI</span>
    </div>
    
    <div className="hidden md:flex items-center space-x-6" style={{color : "#848895"}}>
      <a href="#" className="hover:text-purple-400">Human vs AI</a>
      <a href="#" className="hover:text-purple-400">Industries</a>
      <a href="#" className="hover:text-purple-400">Contact us</a>
      <a href="#" className="hover:text-purple-400">Team</a>
      <BookDemoButton/>
    </div>
  </nav>
  )
}

export default Navigation