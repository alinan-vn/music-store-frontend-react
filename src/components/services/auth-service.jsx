class AuthService {
    async login(username, password) {
        await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':username,'password': password})
        })
            .then(res => {
                const user = res.data;
                localStorage.setItem("user",JSON.stringify(user));
              })
    }

    logout() {
        localStorage.removeItem("user");
    }

    async register(username, email, password,) {
        await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':username,'email':email ,'password':password})
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();