import SelfIntroduction from '@/components/SelfIntroduction';
import Language from '@/components/Language';
import HandsOnExperiences from '@/components/HandsOnExperiences';
import ProjectExperiences from '@/components/ProjectExperiences';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';
import NavigationBar from '@/components/NavigationBar';
import Info from '@/components/Info';

export default function Resumes() {
    const person = {
        nickName: "Zoe",
        firstName: "Foo",
        lastName: "Chor Mei",
        phone: "+852 5402 6240",
        email: "foochormei335205@gmail.com",
    };
    const languages = {
        cantonese: "Native",
        english: "Conversational",
        mandarin: "Fluent",
    };
    const info = {
        expectedSalary: 25000,
        availability: "immediate",
    };
    const skills = [
        "HTML5, React JS, React Native, Bootstrap",
        "Css3, SCSS, SASS, Node.js, JavaScript,",
        "TypeScript, AJAX, Express, Redux, NestJS,",
        "Prisma, PostgreSQL, Metro, Git, GitFlow,",
        "GitHub, npm, yarn, Python, p5.js, p5play",
        "MediaPipe, Visual Studio Code, Visual Studio,",
        "Adobe AI / Photoshop / Dreamweaver,",
        "Rhinoceros 3D: Rhino, MatrixGold 3D CAD",
    ];
    const projects = [
        {
            name: "Mobile App - Real-time Arrival Bus App",
            /* purpose: "A mobile app that shows real-time bus arrival information.",*/
            skills: [
                "React Native, Redux, Node.js, react-native-maps,",
                "i18n-js, Metro, Git, GitHub, yarn, Visual Studio",
            ],
            link: "https://github.com/ZoeFoo/MoblieApp-Real-time-Arrival-Bus-App",
        }, {
            name: "Mobile App - TripIdea",
            //purpose: "A platform for user to plan travel route for \n themselves flexibly.",
            skills: [
                "React Native, Redux, NestJS, Prisma, Node.js, SQL,",
                "PostgreSQL, TypeScript, Metro, Git, GitHub, npm,",
                "yarn, Visual Studio Code, Visual Studio",
            ],
            link: "",
        }, {
            name: "Game of Website - SignUniverse",
            //purpose: "A game to make children have fun while \n learning and practicing sign language.",
            skills: [
                "PostgreSQL, JavaScript, p5.js, p5play, PostgreSQL,",
                "Node.js, TypeScript, AJAX, Express, HTML5, Css3,",
                "Bootstrap, Git, GitHub, npm, yarn, MediaPipe,",
                "Visual Studio Code, Adobe Photoshop",
            ],
            link: "",
        },
    ];
    const educations = [
        {
            name: "Tecky Academy",
            dateStart: "12/2022",
            dateEnd: "04/2023",
            position: "MicroMaster in A.I. and Programming",
        }, {
            name: "Hong Kong Design Institute",
            dateStart: "2016",
            dateEnd: "2019",
            position: "Higher Diploma in Jewellery Design and Technology",
        }, {
            name: "The Hong Kong Institute of Vocational Education",
            dateStart: "2013",
            dateEnd: "2016",
            position: "Diploma in Vocational Education - Jewellery Asts and Design",
        }
    ];
    const works = [
        {
            name: "Citychamp Watch & Jewellery Group Limited",
            dateStart: "11/2019",
            dateEnd: "12 / 2022",
            position: "Receptionist  (Full-time)",
            Responsibilities: [
                "Deliver general administrative and clerical support",
                "Respond to telephone enquiries and greet guests / visitors"
            ],
        }, {
            name: "MCL Cinemas",
            dateStart: "2016",
            dateEnd: "6/2019",
            position: "Cinema Staff  (Part-time)",
            Responsibilities: [
                "Maintain order the cinemas",
                "Provide support for the Cinemas Manager"
            ],
        }
    ];
    return (
        <div className='relative bg-gradient-to-t from-slate-400 to-white-300'>
            <div className='fixed top-0 right-0 left-0 bg-gray-700 print:hidden'>
                <NavigationBar />
            </div>

            <div className="flex justify-center mt-[90px] p-5 print:mt-0 print:p-0">
                <div className='page flex flex-nowrap'>
                    <div className='flex flex-col justify-around w-2/5 bg-slate-100'>
                        <div>
                            <SelfIntroduction person={person} />
                        </div>

                        <div className='text-center leading-loose'>
                            <div className='px-[50px]'>
                                <div className='font-bold text-decoration text-xl tracking-[2px] pb-2'>
                                    Education
                                </div>
                            </div>

                            <div>
                                {
                                    educations.map((education, i) => (
                                        <Education key={i}
                                            education={education} />
                                    ))
                                }
                            </div>
                        </div>

                        <div className='mt-[-30px]'>
                            <Language languages={languages} />
                        </div>

                        <div>
                            <Info info={info} />
                        </div>
                    </div>

                    <div className='flex flex-col justify-evenly w-3/5 my-[10px] px-[25px] bg-white'>
                        <div className='mb-[10px]'>
                            <HandsOnExperiences list={skills} />
                        </div>

                        <div>
                            <div className='inline-block'>
                                <div className='text-decoration text-xl font-bold tracking-[2px] px-5 ' >
                                    Project Experiences
                                </div>
                            </div>

                            <div className='mt-[-15px]'>
                                {
                                    projects.map((project, i) => (
                                        <ProjectExperiences key={i} project={project} />
                                    ))
                                }
                            </div>
                        </div>

                        <div>
                            <div className='mt-[-20px]'>
                                <div className='text-decoration text-xl font-bold inline-block tracking-[2px] px-8  my-2'>
                                    Work Experiences
                                </div>
                            </div>

                            <div>
                                {
                                    works.map((work, i) => (
                                        <WorkExperience key={i}
                                            work={work} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}