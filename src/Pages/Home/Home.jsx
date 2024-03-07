import Layout from '../../Layout/Layout'
import Page1 from '../../Components/Page1'
import Page2 from '../../Components/Page2'
import Page3 from '../../Components/Page3'
import Page4 from '../../Components/Page4'
import Page5 from '../../Components/Page5'
// import "./Home.css";
import Responsive from '../../Components/ResponsivePage';
import Scroll from '../../Components/Scroll'


const Home = () => {
    
  const Loader = () => {
    setTimeout(() => {
      document.querySelector(".loader").style.top = '-100vh'
    }, 4000);
  }
  Loader()

  return (
    <Layout>
            <div class="loader top-0 left-0 z-[999]">
      <h1>ENVIRONMENTS</h1>
      <h1>EXPERIENCES</h1>
      <h1>CONTENT</h1>
    </div>
      <div id="main" className="relative z-10">
      <Page1/>
      <Page2/>
      <Page3/>
      <Responsive/>
      <Page4/>
      <Page5/>
      <Scroll/>
      </div>
    </Layout>
  )
}

export default Home