import { useNavigate } from "react-router-dom";

const Home = () =>{

    const navigate = useNavigate();

    return(
        <div className="flex flex-col md:flex-row-reverse p-8 space-x-4 md:space-x-8 flex-1 items-start md:mt-36">
            <img className="w-[80%] max-w-[400px] md:w-[40%] md:max-w-[800px] h-fit m-auto mt-4 mb-4" src="./src/assets/Group_2.png" alt="Justina's photo" />
            <div className="flex flex-col space-y-8 md:space-y-16 pr-6 lg:mt-[5%]">
                <div>
                    <p className="font-roboto font-200 italic font-w-condensed text-4xl lg:text-5xl">Hi, I'm Justina</p>
                    <p className="font-roboto font-400 text-2xl lg:text-3xl font-w-medium">Frontend developer</p>
                </div>
                <p className="font-robotoMono text-md lg:text-lg lg:pr-10">
                    Creative and goal-oriented frontend developer with a passion for problem-solving and crafting smart, efficient solutions. I enjoy solving challenges, tricky problems, and escape rooms.
                </p>
                <div className="flex justify-center sm:justify-start space-x-6 text-lg lg:text-xl ">
                    <button className="bg-red-300 rounded-full px-4 py-2 shadow-custom shadow-[rgba(239,68,68,0.3)] font-roboto font-w-condensed italic font-400 hover:scale-110 transform transition"
                        onClick={()=> navigate('/projects')}
                    >See my work<i className="fa-solid fa-brush pl-2"></i></button>
                    <button className="bg-amber-500 rounded-full px-4 py-2 shadow-custom shadow-[rgba(217,119,6,0.4)] font-roboto font-w-condensed italic font-400 hover:scale-110 transform transition"
                        onClick={() => window.location.href = "mailto:juste.paskeviciute@gmail.com"}
                    >Contack me<i className="fa-solid fa-envelope pl-2"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Home;