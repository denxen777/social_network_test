import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '60611e76-dd29-4405-9c67-fd1747a81f00'
  }
});

export const usersAPI = {
  getUsers(currentPage, count) {
    return instance.get(`users?page=${currentPage}&count=${count}`).then(response => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  }
}

export const profileAPI = {
  getProfile(params) {
    return instance.get(`profile/${params}`).then(response => response.data);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`).then(response => response.data);
  }
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then(response => response.data);
  }
}
