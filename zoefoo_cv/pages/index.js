import { Inter } from 'next/font/google';
import SelfIntroduction from '../components/leftBar/SelfIntroduction';
import PersonalQuailities from '../components/leftBar/PersonalQualities';
import Language from '../components/leftBar/Language';
import Contact from '../components/leftBar/Contact';

import HandsOnExperiences from '../components/rightBar/HandsOnExperiences';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className='h-screen bg-gradient-to-t from-slate-400 to-white-300'>
            <div className='page flex flex-nowrap'>
                <div className='leftBar w-2/5 bg-slate-100'>
                    <div className='border-2 border-sky-500'>
                        <SelfIntroduction
                            nickName={'Zoe'}
                            lastName={'Chor Mei'}
                            firstName={'Foo'}
                            dateOfBorn={'1st April, 1996'}
                            expectSalary={'25,000'}
                            availability={'immediate'}
                        />
                    </div>

                    <div className='border-2 border-sky-500'>
                        <PersonalQuailities
                            characterList={`Interpersonal skills, Flexibility,\n
                            Creativity, Willingness to learn,\n
                            Team player, Handling pressure,\n
                            Problem solving, Attention to detail`} />
                    </div>

                    <div className='border-2 border-sky-500'>
                        <Language
                            cantonese={`Native`}
                            english={`Conversational`}
                            mandarin={`Fluent`} />
                    </div>

                    <div className='border-2 border-sky-500'>
                        <Contact
                            phone={`+852 5402 6240`}
                            email={`foochormei335205@gmail.com`} />
                    </div>
                </div>

                <div className='rightBar w-3/5 bg-white'>
                    <div className='border-2 border-sky-500'>
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

                    
                </div>
            </div>
        </main>
    )
}
