import axios from 'axios';

export function getUserDetails(){
    return axios.get('http://localhost:3001/auth', {
        withCredentials: true
    })
}

export function getMuteGuilds(){
    return axios.get('http://localhost:3001/api/muteGuilds', {
        withCredentials: true
    })
}

export function getGuilds(){
    return axios.get('http://localhost:3001/api/guilds', {
        withCredentials: true
    })
}

export function getGuildInformation(id){
    return axios.get(`http://localhost:3001/api/guild/${id}/information`, {
        withCredentials: true
    })
}

export function getGuildChannels(id){
    return axios.get(`http://localhost:3001/api/guild/${id}/channels`, {
        withCredentials: true
    })
}

export function getBotStats(){
    return axios.get('http://localhost:3001/botStats', {
        withCredentials: true
    })
}