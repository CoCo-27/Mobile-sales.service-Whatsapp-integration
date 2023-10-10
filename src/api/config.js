import axios from "../axios";
import { getUserCookie, refreshToken } from "../refreshToken";

export const getApi = async (path, config={}) => {
    let token = getUserCookie('user')
    config.headers = {Authorization: token}
    try {
        let res = await axios.get(path, config)
        if(res.data.message === 'jwt expired'){
            await refreshToken()
            token = getUserCookie('user');
            config.headers = {Authorization: token}
            res = await axios.get(path,config);
        }
        return res
    } catch (error) {
        return error
    }
}

export const postApi = async (path, data , config={}) => {
    let token = getUserCookie('user')
    console.log(23, token);
    config.headers = {Authorization: token}
    try {
        let res = await axios.post(path, data, config)
        console.log(27, res);
        if(res.data.message === 'jwt expired'){
            await refreshToken()
            token = getUserCookie('user');
            config.headers = {Authorization: token}
            res = await axios.post(path,data, config);
        }
        return res
    } catch (error) {
        return error
    }
}


export const putApi = async (path, data , config={}) => {
    let token = getUserCookie('user')
    config.headers = {Authorization: token}
    console.log(44, config);
    try {
        let res = await axios.put(path, data, config)
        if(res.data.message === 'jwt expired'){
            await refreshToken()
            token = getUserCookie('user');
            config.headers = {Authorization: token}
            res = await axios.put(path,data,config);
        }
        return res
    } catch (error) {
        return error
    }
}

export const deleteApi = async (path , config={}) => {
    let token = getUserCookie('user')
    config.headers = {Authorization: token}
    try {
        let res = await axios.delete(path, config)
        if(res.data.message === 'jwt expired'){
            await refreshToken()
            token = getUserCookie('user');
            config.headers = {Authorization: token}
            res = await axios.delete(path,config);
        }
        return res
    } catch (error) {
        return error
    }
}

export const patchApi = async (path, data , config={}) => {
    let token = getUserCookie('user')
    config.headers = {Authorization: token}
    try {
        let res = await axios.patch(path, data, config)
        if(res.data.message === 'jwt expired'){
            await refreshToken()
            token = getUserCookie('user');
            config.headers = {Authorization: token}
            res = await axios.patch(path,data,config);
        }
        return res
    } catch (error) {
        return error
    }
}