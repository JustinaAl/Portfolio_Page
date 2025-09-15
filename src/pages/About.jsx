import { logoList } from "../assets/lists/logoList";
import { travelList } from "../assets/lists/travelList";
import ClickableCarousel from "../components/ClickableCarousel";
import Carousel from "../components/PhotoCarusel";


const About = () =>{

    const photos = [
        "/assets/escape/IMG_9240.jpg",
        "/assets/escape/151246.png",
        "/assets/escape/IMG_9230.jpg"
    ]

    return(
        <div className="flex flex-col font-roboto text-lg md:text-xl p-8 md:mt-10 ">

            <Carousel list={logoList}/>

            <p>I am currently studying frontend development at Nackademin Yrkeshögskola. 
            During my studies, I have learned the fundamentals of <span className="italic font-500 text-red-900">HTML, 
            CSS/SASS, JavaScript, React, Node.js, Strapi CMS, Bootstrap, and UX/UI design.</span> 
            </p>
            <br />
            <p>On my own, I am also deepening 
            my knowledge of <span className="italic font-500 text-red-900">Tailwind, Vue, MySQL, and Firebas.</span>
            I am passionate about web development, and although my main focus is on frontend, I am very interested in 
            expanding my skills in backend development as well. </p>
            <br />
            <p>
            I am solution-oriented, self-driven, and creative, and I enjoy both independent work and 
            collaborating in a team. Through my studies, I have gained experience in both design and coding, 
            which has given me a understanding of how to create user-friendly and visually appealing 
            websites.
            </p>
            <br />
            <p>Utanför arbetet är jag en entusiastisk deltagare i escape rooms, vilket har utvecklat mina färdigheter 
            i problemlösning, samarbete och att prestera under tidspress – egenskaper jag ser som användbara även i 
            utvecklingsarbete.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 my-12 md:my-16">
                {photos.map((photo, index) => <img key={'es'+ index} className="w-[100%] max-w-[370px]" src={photo} alt="" />)}
            </div>
    
            <p>
            Jag har också ett starkt intresse för att resa och lära mig nya saker. Att utforska världen och möta 
            olika kulturer ger mig nya perspektiv, stärker min förmåga att anpassa mig till olika. Genom att prova 
            nya smaker, upptäcka traditioner och leva ett aktivt liv håller jag mig nyfiken och öppen för 
            förändring, vilket i sin tur inspirerar mig i mitt arbete och bidrar till min personliga och 
            professionella utveckling.
            </p>

            <ClickableCarousel list={travelList}/>
        </div>
    )
}

export default About;