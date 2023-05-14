import { Inter } from 'next/font/google';
import SelfIntroduction from '../components/leftBar/SelfIntroduction';
import PersonalQuailities from '../components/leftBar/PersonalQualities';
import Language from '../components/leftBar/Language';
import Contact from '../components/leftBar/Contact';
import HandsOnExperiences from '../components/rightBar/HandsOnExperiences';
import ProjectExperiences from '../components/rightBar/ProjectExperiences';
import Education from '../components/nextPage/Education';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className='p-5 flex flex-wrap justify-center bg-gradient-to-t from-slate-400 to-white-300'>
            <div className='page mb-10 flex flex-nowrap'>
                <div className='leftBar w-2/5 bg-slate-100 grid'>
                    <div className='self-center'>
                        <SelfIntroduction
                            nickName={'Zoe'}
                            lastName={'Chor Mei'}
                            firstName={'Foo'}
                            dateOfBorn={'1st April, 1996'}
                            expectSalary={'25,000'}
                            availability={'immediate'}
                        />
                    </div>

                    <div className='self-center'>
                        <PersonalQuailities
                            characterList={`Interpersonal skills, Flexibility,\n
                            Creativity, Willingness to learn,\n
                            Team player, Handling pressure,\n
                            Problem solving, Attention to detail`} />
                    </div>

                    <div className='self-center'>
                        <Language
                            cantonese={`Native`}
                            english={`Conversational`}
                            mandarin={`Fluent`} />
                    </div>

                    <div className='self-center'>
                        <Contact
                            phone={`+852 5402 6240`}
                            email={`foochormei335205@gmail.com`} />
                    </div>
                </div>

                <div className='rightBar w-3/5 bg-white grid ms-10'>
                    <div className='self-center'>
                        <HandsOnExperiences
                            skillList={`HTML5, React JS, React Native, Bootstrap,\n
                                    Css3, SCSS, SASS, Node.js, JavaScript,\n
                                    TypeScript, AJAX, Express, Redux, NestJS, \n
                                    Prisma, SQL, NoSQL, PostgreSQL, MsSQL, \n
                                    MongoDb, Metro, Git, GitFlow, GitHub,\n
                                    GitLab, BitBucket, npm, yarn, Python, \n
                                    p5.js, p5play, MediaPipe, AWS Machine \n
                                    Learning, Visual Studio Code, Visual Studio,\n
                                    Adobe AI/ Photoshop/ Dreamweaver, \n
                                    Rhinoceros 3D: Rhino, MatrixGold 3D CAD`} />
                    </div>

                    <div className='self-center'>
                        <div>
                            <div className='titleCenter text-decoration w-4/6 text-xl'
                                style={{ letterSpacing: 2 }}
                            >Project Experiences</div>
                        </div>

                        <div>
                            <ProjectExperiences
                                projectName={`Mobile App - TripIdea`}
                                purpose={`A platform for user to plan travel route for \n themselves flexibly.`}
                                techSkills={`React Native, Redux, NestJS, Prisma, \n
                                            SQL, PostgreSQL, Node.js, TypeScript,\n
                                            Metro, Git, GitHub, npm, yarn,\n
                                            Visual Studio Code, Visual Studio`} />
                        </div>

                        <br />

                        <div>
                            <ProjectExperiences
                                projectName={`Game of Website - SignUniverse`}
                                purpose={`A game to make children have fun while \n learning and practicing sign language.`}
                                techSkills={`HTML5, Bootstrap, p5.js, p5play, Css3, SQL, \n
                                            PostgreSQL, JavaScript, AJAX, Express, \n
                                            Node.js, TypeScript, Git, GitHub, npm,\n
                                            yarn, MediaPipe, Visual Studio Code,\n
                                            Visual Studio, Adobe Photoshop`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='page' >
                <div>
                    <div>Education</div>
                    <div>
                        <Education
                            graduationFrom={`Tecky Academy`}
                            dateFrom={`12/2022`}
                            dateEnd={`04/2023`}
                            graduationPosition={`MicroMaster in A.I. and Programming`} />
                    </div>

                    <div>
                        <Education
                            graduationFrom={`Hong Kong Design Institute`}
                            dateFrom={`2016`}
                            dateEnd={`2019`}
                            graduationPosition={`Higher Diploma in Jewellery Design and Technology`} />
                    </div>

                    <div>
                        <Education
                            graduationFrom={`The Hong Kong Institute of Vocational Education`}
                            dateFrom={`2013`}
                            dateEnd={`2016`}
                            graduationPosition={`Diploma in Vocational Education - Jewellery Asts and Design`} />
                    </div>

                </div>
            </div>
        </main>
    )
}
