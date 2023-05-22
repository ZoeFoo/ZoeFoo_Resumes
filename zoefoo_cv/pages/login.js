import LoginForm from "../components/LoginForm"

export default function Home() {
    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-b from-gray-700 to-white'>
            <div className='w-full'>
                <LoginForm/>
            </div>
        </div>
    )
}