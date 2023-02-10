import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const userAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    onFollow: (userId) => {
        return instance.post(`follow/${userId}`)
    },
    onUnfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile: (userId) => {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatusProfile: (userId) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatusProfile: (status) => {
        return instance.put(`profile/status`, {status: status})
    },
    updatePhotoProfile: (photoFile) => {
        let formData = new FormData();
        formData.append('file', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
    },
    saveProfileInfo: (profile) => {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    logIn: (email, password, rememberMe, captcha = null) => {
        return instance.post(`auth/login`, {email: email, password: password, rememberMe: rememberMe, captcha: captcha});
    },
    logOut: () => {
        return instance.delete(`auth/login`);
    },
    getCaptcha: () => {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            })
    }
}