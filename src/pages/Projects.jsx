const Project = ({title, img, important, description,link}) =>{

    return(
        <a href={link} target="_blank" className="w-[45%] min-w-[350px] bg-zinc-50 p-6 rounded-lg border-2 border-red-400 hover:scale-105 cursor-pointer">
            <img className="w-[100%]" src={img}></img>
            <div className="p-2 text-center border-t-2 border-red-400 mt-4">
                <h2 className="font-roboto text-2xl p-2 font-500 italic font-w-medium text-amber-600">{title}</h2>
                <p className="font-roboto font-300">{description}</p>
                {important && 
                <p className="font-500 text-lg mt-2">{important}</p>}
            </div>
        </a>
    )
}

const Projects = () =>{

    const projectList =[
        {
            title:'Petagochi game',
            img: '/assets/projects/Petagochi.png',
            description: 'Petagochi is a virtual pet game where players take care of a small digital creature. You feed it, play with it, and make sure it stays healthy and happy. If you neglect it, the pet runs away.',
            link: 'https://petagotchi.vercel.app/'
        },
        {
            title:'Pastry qiuz',
            img: '/assets/projects/Quiz.png',
            description: 'Pastry Quiz - A web-based quiz with different question types (true/false, multiple choice, checkbox) where users get results and feedback, and can switch between dark and light mode.',
            link: 'https://quiz-pastry.vercel.app/'
        },
        {
            title:'Recipe app',
            img: '/assets/projects/Recipe_App.png',
            description: 'A Strapi-connected app where users can browse recipes and add new ones, with all data stored and managed directly in Strapi.',
            link: 'https://recipe-app-frontend-olive.vercel.app/'
        },
        {
            title:'Gym progress tracking app',
            img: '/assets/projects/Training_App.png',
            description: 'Training Progress App - A simple app connected to Strapi CMS where exercises are managed, progress is tracked, and results are saved directly to Strapi.',
            important: 'UserName: Test, Password: TestTest',
            link: 'https://jetraining.vercel.app/'
        },
        {
            title:'Country app',
            img: '/assets/projects/Country_App.png',
            description: `An app where you can learn about countries and their flags, and take quiz to test your knowledge. App uses "https://restcountries.com/" API`,
            link: 'https://country-learning-app.vercel.app/'
        }
    ]

    return(
        <div className="h-fit py-8 md:py-12">
            <h1 className="text-center pb-10 md:pb-14 font-roboto text-red-600 text-4xl italic">Projects</h1>
            <div className="flex justify-center gap-8 flex-wrap">
                {projectList.map((project, index) => <Project key={'pr'+index} {...project}/>)}
            </div>
        </div>
    )
}

export default Projects;