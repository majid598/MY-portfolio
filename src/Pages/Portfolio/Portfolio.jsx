import Layout from "../../Layout/Layout";
import Skills from "../../Components/Skills";
import Animations from "../../Components/Animations";
import Performance from "../../Components/Performence";
import Scroll from "../../Components/Scroll";

const Portfolio = () => {
  return (
    <Layout>
      <div className="w-full">
        <div className="por w-full h-screen px-[5vw] py-[8vw] relative z-[99] bg-[#EFEAE3] border-b-2 border-black">
          <h1 className="w-full text-center text-3xl font-semibold">Say Hi</h1>
          <div className="pflex flex w-full px-16 justify-between">
            <div className="ppro w-[30%] bg-red-500 rounded-md overflow-hidden">
              <img
                className="relative w-full"
                src="./assets/pfl.jpg"
                alt="Mr raju website Creator"
              />
            </div>
            <div className="ppara w-1/2">
              <p className="text-2xl tracking-tighter">
                I am a professional Full Stack Web-Developer. I create frontend
                applications, backend APIs, and Full stack applications. I have
                in depth understanding of programming languages, frameworks and
                databases, as well as an eye for design and user experience. I
                create applications using the latest technologies that are not
                only functional but also user-friendly, customizable, optimized,
                and fast ever. and I am working from one year for
                <a
                  href="https://saad.codewithalpha.me/"
                  target="_blank"
                  className="mx-2 inline-block underline text-purple-900"
                >
                  Code With alpha.
                </a>
                I also Created many frontend Projects for him .
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-[99] p-[5vw] w-full bg-[#EFEAE3]">
          <h1 className="text-5xl">My Performance</h1>
          <Performance />
          <h1 className="text-5xl">My Skills</h1>
          <Skills />
          <h1 className="text-5xl mt-8">Animations</h1>
          <Animations />
        </div>
        <div className="w-full h-[100vh]">h</div>
        <Scroll />
      </div>
    </Layout>
  );
};

export default Portfolio;
