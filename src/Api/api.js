import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
const localApi = axios.create({
    baseURL: 'http://192.168.88.61/NetCoreTemplateApi/v1.0/',
    headers: {'Access-Control-Allow-Origin': '*' }
})

const prodApi = axios.create({
    baseURL: 'https://b.cryppowallet.com/',
    headers: {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Method': "*"  }
})
//Прод Api
export const AuthorizationPost = (email, password) => {
    debugger;
    return prodApi.post('Account/Login', {
        email,
        password,
        twoFactorCode: "",
        deviceId: "1",
        deviceOs: "Android Pie",
        deviceIp: "192.168.0.1"
    }).then(response => {
        return response.data
    })
}

export const RegistrationPost = (email, password, company) => {
    debugger;
    return prodApi.post('Account/Register', {
        email,
        password,
        company
    }).then(response => {
        return response.data
    })
}

//Локальное Api
export const CryppoBusinessGet = () => {
    return localApi.get('CryppoBusiness/Get')
        .then(response => {
            return response.data
        });
}
export const CryppoGet = () => {
    return localApi.get('Cryppo/Get')
        .then(response => {
            return response.data
        })
}
export const CryppoLkGet = () => {
    return localApi.get('CryppoLk/Get')
        .then(response => {
            return response.data
        })
}
export const CryppoIndexGet = () => {
    return localApi.get('CryppoIndex/Get')
        .then(response => {
            return response.data
        })
}
