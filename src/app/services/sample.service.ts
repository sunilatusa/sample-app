
export class SampleService {
    userName!: string;
    constructor(){
        console.log('SampleService Object created!')
    }

    updateUserInfo(userName: string){
        this.userName = userName;
    }

    getUserName(){
        return this.userName;
    }
}