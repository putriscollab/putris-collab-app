import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://putris-collab-api.herokuapp.com/',
})
