import {$post} from '../utils/request.js'

export const $Login = async (params:object) => {
    let res = await $post('login', params)
    return res;
}

export const $RegUser = async (params:object) => {
    let res = await $post('reguser', params)
    return res;
}