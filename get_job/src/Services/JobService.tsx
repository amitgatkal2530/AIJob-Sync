import axios from "axios";

const base_url = "http://localhost:8080/jobs/";

// Centralized error handler
const handleError = (error:any) => {
    if (error.response) {
        // The server responded with a status other than 2xx
        console.error('Backend error:', error.response.data);
        throw new Error(`Backend Error: ${error.response.data.message || 'Unknown error'}`);
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response from server:', error.request);
        throw new Error('No response from server.');
    } else {
        // Something happened in setting up the request
        console.error('Error setting up request:', error.message);
        throw new Error(`Request Error: ${error.message}`);
    }
};

const postJob = async (job:any) => {
    try {
        const res = await axios.post(`${base_url}post`, job);
        return res.data;
    } catch (error) {
        handleError(error);
    }
};

const getAllJobs = async () => {
    try {
        const res = await axios.get(`${base_url}getAll`);
        return res.data;
    } catch (error) {
        handleError(error);
    }
};

const getJob = async (id:any) => {
    try {
        const res = await axios.get(`${base_url}get/${id}`);
        return res.data;
    } catch (error) {
        handleError(error);
    }
};

const applyJob = async (id:any, applicant:any) => {
    try {
        const result = await axios.post(`${base_url}apply/${id}`, applicant);
        return result.data;
    } catch (error) {
        handleError(error);
    }
};

const getJobPostedBy = async (id:any) => {
    try {
        const result = await axios.get(`${base_url}postedBy/${id}`);
        return result.data;
    } catch (error) {
        handleError(error);
    }
};

const changeAppStatus = async (application:any) => {
    try {
        const result = await axios.post(`${base_url}changeAppStatus`, application);
        return result.data;
    } catch (error) {
        handleError(error);
    }
};

export { postJob, getAllJobs, getJob, applyJob, getJobPostedBy, changeAppStatus };