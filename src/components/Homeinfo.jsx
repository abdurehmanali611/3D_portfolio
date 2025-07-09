import { Link } from "react-router-dom"


const renderContent = {
  1: (
    <h1 className = 'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hello I'm <span className = 'font-semibold'>Abdurehman</span>
      <br />
      A software engineer from Addis Ababa
      </h1>
  ),
  2: (
    <div>
      <h1 className = 'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 w-96 flex-wrap h-32'>
      Worked in Many projects and Picked up many skills along the way</h1>
      <Link 
      to='about'
      className="bg-slate-300 w-40 h-12 rounded-[20px] -my-3 z-10 absolute flex justify-center items-center self-center mx-[10%] 2xl:mx-[9%]">
        Learn More
      </Link>
    </div>
      
  ),
  3: (
    <div>
    <div className = 'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 h-24 w-[530px] flex-wrap flex-col gap-20 2xl:h-32 2xl:w-[530px]'>
      <h1 >
      Led Multiple projects to success over the years</h1>
      <p>curious about the impact?</p> 
      </div>
      <Link
      to='portfolio'
      className="bg-slate-300 w-40 h-12 rounded-[20px] -my-3 z-10 absolute flex justify-center items-center self-center mx-[16%] 2xl:mx-[13%]"
      >
        Visit My PortFolio
      </Link>
    </div>
  ),
  4: (
    <div>
    <div className = 'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      <h1>
      Need a project done or looking for a dev?</h1> 
      <p>I'm just a few keystrokes away</p>
      </div>
      <Link
      to='contact'
      className="bg-slate-300 w-40 h-12 rounded-[20px] z-10 absolute flex justify-center items-center self-center mx-[12%] my-3"
      >
        Let's Talk
      </Link>
    </div> 
      )
}

const Homeinfo = ({currentstage}) => {
  return renderContent[currentstage] || null
}

export default Homeinfo