import axios from '@/services/axios';

const createAccount = async (form) => {
    console.log('successful', {form});
    axios.post('submit-data', form);
};

export default {
    createAccount
}