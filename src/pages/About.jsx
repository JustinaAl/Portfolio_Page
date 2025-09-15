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
            <p>Outside of work, I am an enthusiastic escape room participant, which has helped me develop my problem-solving, 
            teamwork, and ability to perform under pressure—qualities I also consider valuable in development work.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 my-12 md:my-16">
                {photos.map((photo, index) => <img key={'es'+ index} className="w-[100%] max-w-[370px]" src={photo} alt="" />)}
            </div>
    
            <p>
            I also have a strong interest in traveling and learning new things. Exploring the world and experiencing 
            different cultures gives me new perspectives and strengthens my ability to adapt to different situations. 
            By trying new flavors, discovering traditions, and living an active life, I stay curious and open to change, 
            which in turn inspires me in my work and contributes to both my personal and professional development.
            </p>

            <ClickableCarousel list={travelList}/>
        </div>
    )
}

export default About;