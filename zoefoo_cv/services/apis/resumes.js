import axios from '@/services/axios';

const resumes = async () => {
    try {
        const res = await axios.get('resumes/');
        console.log('resumes successful');
        console.log({ res });
        return res;
    } catch (error) {
        console.error('failed get resumes', error)
    }
};

export default {
    resumes,
}