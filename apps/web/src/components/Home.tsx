
function Home() {
  return (

    <div className="h-screen w-screen p-4 bg-gradient-to-br from-black via-white to-black  mix-blend-overlay">

      <div className="h-full w-full bg-gradient-to-br from-cyan-950 via-gray-900 to-stone-900   rounded-md flex flex-col">

        <div className="w-auto h-12 m-2">might put a nav bar here </div>
        
        
        <div className = "grid grid-cols-2 h-full">

          <div className=" col-span-2 md:col-span-1 m-2 h-auto flex flex-col justify-center items-center">

              <div className="h-11/12 w-7/12  m-2 mr-24 rounded-md bg-white">

              </div>
          </div>
          
          
          
          <div className="col-span-2 md:col-span-1 m-2 ">
           
          </div>
        </div>


      </div>
    </div>

  )
}

export default Home
