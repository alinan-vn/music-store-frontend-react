class AuthService {
    async login(username, password) {
        await fetch('http://localhost:8080/api/customer/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username': username,'password': password})
        })
            .then(response => {
                if (response != null) {
                    localStorage.setItem("user", JSON.stringify(response.body));
                    console.log('response', response)
                }
                return response.body;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    async register(username, email, password,role) {
        await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'username':username,'email':email ,'password':password,'role':role})
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();