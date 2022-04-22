import axios from "axios";

axios.defaults.baseURL = 'http://192.168.88.61/NetCoreTemplateApi/v1.0/';
// axios.defaults.baseURL = 'http://localhost:5000/v1.0';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const CryppoBusinessGet = () => {
    return axios.get('CryppoBusiness/Get')
        .then(response => {
            return response.data
        });
}
export const CryppoGet = () => {
    return axios.get('Cryppo/Get')
        .then(response => {
            return response.data
        })
}
export const CryppoLkGet = () => {
    return axios.get('CryppoLk/Get')
        .then(response => {
            return response.data
        })
}
export const CryppoIndexGet = () => {
    return axios.get('CryppoIndex/Get')
        .then(response => {
            return response.data
        })
}
