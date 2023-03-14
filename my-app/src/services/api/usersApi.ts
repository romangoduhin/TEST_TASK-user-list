import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const usersAPI = {
    getUsers: async (): Promise<any> => {
        const {data} = await instance.get('');

        return data;
    },
}


export default usersAPI;