import axios from '@/services/axios';

const createAccount = async (form) => {
    console.log('successful', {form});
    axios.post('auth/register', form);
};

export default {
    createAccount
}