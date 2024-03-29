import axios from "axios";
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/job`;

export const getAllJobs = async ({ skills, title }) => {
    try {
        // debugger;
        const reqUrl = `${backendUrl}/all?skills=${skills}&title=${title}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const getJobDetails = async (jobId) => {
    try {
        const reqUrl = `${backendUrl}/job-description/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data?.data;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const createJobPost = async ({
    companyName,
    logoUrl,
    title,
    description,
}) => {
    try {
        const reqUrl = `${backendUrl}/create`;
        // debugger;
        const reqPayload = {
            companyName,
            logoUrl,    
            title,
            description,
        };
        // debugger;

        const token = JSON.parse(localStorage.getItem("token"));
        
        console.log(token);
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post(reqUrl, reqPayload);
        // debugger;
        
        return response;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};

export const updateJobPost = async (
    jobId,
    { companyName, logoUrl, title, description }
) => {
    try {
        const reqUrl = `${backendUrl}/edit/${jobId}`;
        const reqPayload = {
            companyName,
            logoUrl,
            title,
            description,
        };
        // debugger;
        const token = JSON.parse(localStorage.getItem("token"));
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.put(reqUrl, reqPayload);
        // debugger;
        return response;
    } catch (error) {
        console.log(error);
        // toast with custom message for clients
    }
};
