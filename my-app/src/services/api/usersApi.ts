import axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
});

const usersAPI = {
    getUsers: async () => {
        try {
            const {data} = await instance.get('')

            return data;
        } catch (err) {
            let errorMessage = "Something went wrong!";

            if (err instanceof Error) {
                errorMessage = err.message;
            }

            throw Error(errorMessage)
        }
    },
}


export default usersAPI;