import { BiArrowBack, BiArrowToBottom } from "react-icons/bi";
import prayus from "../assets/prayus.jpg"
const About = () => {
    return (
      <section className="py-10 px-5">
        <h1 className=" font-semibold container mx-auto py-4 text-2xl">About Us</h1>
        <div className="md:container mx-auto flex justify-evenly  ">
         
          <p className=" text-xl container">
            "My aim is to be an software engineer and bring the next revolution by the end of 2030."<br />
            <h1 className="font-semibold flex text-3xl">Information about me <span className="mt-2 ml-2"><BiArrowToBottom/> </span> </h1>
           Hello, My name is Prayus tamang. I did my high school from Joesph english secondary school,kathmandu. I'm currently doing intern at code it appsware(a leading software company)as a front-end developer.
          <h1 className="font-semibold text-3xl mt-4  ">I have knowledge of html,css,js,reactjs and node js. </h1>
          </p>
          
          <div className="w-64 "><img src={prayus} alt="" /></div>
        </div>
        <div className="container mx-auto flex flex-row justify-between items-center  mt-7 py-3   ">
        <img src="https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        <img src="data:image/jpeg;base64,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"alt="" />
        <img src="data:image/jpeg;base64,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" alt="" />
   
   <img src="https://th.bing.com/th/id/OIP.-07T5ovfjvidFHQgri4rcwAAAA?pid=ImgDet&w=178&h=155&c=7&dpr=1.5" alt="" />
        </div>
      
      </section>
      
    );
  };
  
  export default About;