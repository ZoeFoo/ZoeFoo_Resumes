import SelfIntroduction from '@/components/SelfIntroduction';
import PersonalQuailities from '@/components/PersonalQualities';
import Language from '@/components/Language';
import Contact from '@/components/Contact';
import HandsOnExperiences from '@/components/HandsOnExperiences';
import ProjectExperiences from '@/components/ProjectExperiences';
import Education from '@/components/Education';
import WorkExperience from '@/components/WorkExperience';

export default function Home() {
    const person = {
        nickName: "Zoe",
        firstName: "Foo",
        lastName: "Chor Mei",
        dateOfBirth: "1st April, 1996",
        expectedSalary: 25000,
        availability: "immediate",
    };
    const qualities = [
        "Interpersonal skills, Flexibility,",
        "Creativity, Willingness to learn,",
        "Team player, Handling pressure,",
        "Problem solving, Attention to detail",
    ];
    const languages = {
        cantonese: "Native",
        english: "Conversational",
        mandarin: "Fluent",
    };
    const contact = {
        phone: "+852 5402 6240",
        email: "foochormei335205@gmail.com",
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
            purpose: "A mobile app that shows real-time bus arrival information.",
            skills: [
                "React Native, Redux, Node.js,",
                " i18n-js,react-native-maps,",
                "Metro, Git, GitHub, yarn, Visual Studio",
            ],
        }, {
            name: "Mobile App - TripIdea",
            purpose: "A platform for user to plan travel route for \n themselves flexibly.",
            skills: [
                "React Native, Redux, NestJS, Prisma,",
                "SQL, PostgreSQL, Node.js, TypeScript,",
                "Metro, Git, GitHub, npm, yarn,",
                "Visual Studio Code, Visual Studio",
            ],
        }, {
            name: "Game of Website - SignUniverse",
            purpose: "A game to make children have fun while \n learning and practicing sign language.",
            skills: [
                "HTML5, Bootstrap, p5.js, p5play, Css3, SQL,",
                "PostgreSQL, JavaScript, AJAX, Express,",
                "Node.js, TypeScript, Git, GitHub, npm,",
                "yarn, MediaPipe, Visual Studio Code,",
                "Visual Studio, Adobe Photoshop",
            ],
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
        }, {
            name: "MCL Cinemas",
            dateStart: "2016",
            dateEnd: "6/2019",
            position: "Cinema Staff  (Part-time)",
        }
    ];
    return (
        <div className='bg-gradient-to-t from-slate-400 to-white-300'>
            <div className="flex justify-center p-5 print:p-0">
                <div className='page flex flex-nowrap'>
                    <div className='flex flex-col justify-between py-[50px] w-2/5 bg-slate-100'>
                        <div>
                            <SelfIntroduction person={person} />
                        </div>

                        <div>
                            <PersonalQuailities list={qualities} />
                        </div>

                        <div>
                            <Language languages={languages} />
                        </div>

                        <div>
                            <Contact contact={contact} />
                        </div>
                    </div>

                    <div className='flex flex-col justify-between my-[50px] px-[25px] bg-white'>
                        <div>
                            <HandsOnExperiences list={skills} />
                        </div>

                        <div>
                            <div className='inline-block'>
                                <div className='text-decoration text-xl font-bold tracking-[2px] px-5 pb-2' >
                                    Project Experiences
                                </div>
                            </div>

                            <div>
                                {
                                    projects.slice(0, 2).map((project, i) => (
                                        <ProjectExperiences key={i} project={project} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center p-5 print:p-0">
                <div className='page' >
                    <div className='p-20'>
                        <div className='pb-10'>
                            <div className='inline-block'>
                                <div className='text-decoration text-xl font-bold tracking-[2px] px-5 pb-2' >
                                    Project Experiences
                                </div>
                            </div>

                            <div>
                                {
                                    projects.slice(2, projects.length).map((project, i) => (
                                        <ProjectExperiences key={i} project={project} />
                                    ))
                                }
                            </div>
                        </div>

                        <div>
                            <div className='text-decoration text-xl font-bold inline-block tracking-[2px] px-8 pb-2 mb-4'>
                                Education
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

                        <div>
                            <div>
                                <div className='text-decoration text-xl font-bold inline-block tracking-[2px] px-8 py-2 my-4'>
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