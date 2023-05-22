import axios from '@/services/axios';

const createAccount = async (form) => {
    try {
        const res = await axios.post('auth/register', form);
        console.log('register successful');
        return res;
    } catch (error) {
        console.error('register failed', error);
    }
};

const login = async (userData) => {
    try {
        axios.post('/auth/login', userData);
        console.log('login successful', { userData });
    } catch (error) {
        conosle.error('login failed', error);
    }
}

export default {
    createAccount,
    login,
}