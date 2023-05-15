import SelfIntroduction from '@/components/leftBar/SelfIntroduction';
import PersonalQuailities from '@/components/leftBar/PersonalQualities';
import Language from '@/components/leftBar/Language';
import Contact from '@/components/leftBar/Contact';
import HandsOnExperiences from '@/components/rightBar/HandsOnExperiences';
import ProjectExperiences from '@/components/rightBar/ProjectExperiences';
import Education from '@/components/nextPage/Education';
import WorkExperience from '@/components/nextPage/WorkExperience';

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

    return (
        <div className='bg-gradient-to-t from-slate-400 to-white-300'>
            <div className="flex justify-center p-5 print:p-0">
                <div className='page flex flex-nowrap'>
                    <div className='flex flex-col justify-between py-[40px] w-2/5 bg-slate-100'>
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

                    <div className='flex flex-col justify-between py-[40px] w-3/5 bg-white'>
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
            </div>

            <div className="flex justify-center p-5 print:p-0">
                <div className='page p-20' >
                    <div>
                        <div className='titleCenter text-decoration text-xl pb-2 mb-4'
                            style={{ width: 200, letterSpacing: 3 }}
                        >Education</div>

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

                    <div>
                        <div>
                            <div className='rightBarTitle text-decoration text-xl ps-8 py-2 my-4'
                                style={{ width: 300, letterSpacing: 3 }}>Work Experiences</div>
                        </div>

                        <div>
                            <WorkExperience
                                companyName={`Citychamp Watch & Jewellery Group Limited`}
                                dateFrom={`11/2019`}
                                dateEnd={`12/2022`}
                                position={`Receptionist  (Full-time)`} />
                        </div>

                        <div>
                            <WorkExperience
                                companyName={`MCL Cinemas`}
                                dateFrom={`2016`}
                                dateEnd={`6/2019`}
                                position={`Cinema Staff  (Part-time)`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}