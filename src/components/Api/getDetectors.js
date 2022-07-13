import axios from "axios";

const getDetectors = async (token) => {
    if (!token) return;

    const headers = {'Authorization': `Token ${token}`}
    const config = {
        headers,
    }

    try {
        const {data} = await axios.get('http://localhost:8000/api/detectors/', config);
        return data;
    } catch (error) {
        console.error(error);
    }
}


export default getDetectors;