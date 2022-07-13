import axios from "axios";

const getStream = async (token, id) => {
    if (!token) return;

    const headers = {'Authorization': `Token ${token}`}
    const config = {
        headers,
    }

    try {
        const {data} = await axios.get(`http://localhost:8000/api/streams/${id}`
        , config);
        return data;
    } catch (error) {
        console.error(error);
    }
}


export default getStream;