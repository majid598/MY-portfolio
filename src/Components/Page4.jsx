import { Link } from 'react-router-dom'

const page4 = () => {

  const top0 = () => {
   document.getElementById('vertical').style.top = '0'
   document.getElementById('one').style.color = 'white'
   document.getElementById('two').style.color = 'rgb(78, 78, 78)'
   document.getElementById('three').style.color = 'rgb(78, 78, 78)'
   const one = document.querySelector('#imgone').style.opacity = '1'
   const two = document.querySelector('#imgtwo').style.opacity = '0'
   const three = document.querySelector('#imgthree').style.opacity = '0'
  }
  const top3 = () => {
    document.getElementById('vertical').style.top = '33.333%'
    document.getElementById('one').style.color = 'rgb(78, 78, 78)'
    document.getElementById('three').style.color = 'rgb(78, 78, 78)'
    document.getElementById('two').style.color = 'white'
    const one = document.querySelector('#imgone').style.opacity = '0'
    const two = document.querySelector('#imgtwo').style.opacity = '1'
    const three = document.querySelector('#imgthree').style.opacity = '0'
  }

  const top10 = () => {
   document.getElementById('vertical').style.top = '66.6666%'
   document.getElementById('one').style.color = 'rgb(78, 78, 78)'
   document.getElementById('two').style.color = 'rgb(78, 78, 78)'
   document.getElementById('three').style.color = 'white'

   const one = document.querySelector('#imgone').style.opacity = '0'
   const two = document.querySelector('#imgtwo').style.opacity = '0'
   const three = document.querySelector('#imgthree').style.opacity = '1'
  }

  return (
    <>
    <div className="page4 h-[60vw]">
        <div className="box">
          <div className="left-part">
            <div className="left1 relative left-24 top-8">
              <div className="vertical w-1 flex flex-col bg-[#535353] absolute -left-10">
               <div id="vertical" className="one w-full absolute transition-all duration-500 top-0 bg-white h-1/3"></div>
              </div>
              <div class="text">
                <div onClick={top0} id="one" className="font-semibold transition-all duration-500 cursor-pointer">Design</div>
                <div onClick={top3} id="two" className="a font-semibold transition-all duration-500 cursor-pointer">Project</div>
                <div onClick={top10} id="three" className="a font-semibold transition-all duration-500 cursor-pointer">Execution</div>
              </div>
            </div>
          </div>
          <div class="right-part overflow-hidden">
            <img id="imgthree" className="h-full w-full opacity-0 top-0 right-0 absolute transition-all duration-1000" src="./assets/ex.jpg" alt="Mr raju website creator" />
            <img id="imgtwo" className="h-full w-full opacity-0 top-0 right-0 absolute transition-all duration-1000" src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Mr raju website creator" />
            <img id="imgone" className="h-full w-full top-0 right-0 absolute transition-all duration-1000" src="./assets/de.jpg" alt="Mr raju website creator" />
          </div>
        </div>
      </div>
    </>
  )
}

export default page4