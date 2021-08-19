export class AuthService {
    loggedIn = false;
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(()=>{
                    // here we passed a method to check login mathod
                    resolve(this.loggedIn)
                }, 800)
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}