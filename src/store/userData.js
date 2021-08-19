import { makeAutoObservable } from "mobx";

class UserData {
    listUser = []

    constructor(){
        makeAutoObservable(this);
    }

    getListUser(){
        return this.listUser
    }

    getOneUser(name){
        let data = ''
        this.listUser.forEach(user => {
            if (user.username == name)
                data = user;        
        });
        return data
    }

    addUser(newUser){
        this.listUser.push(newUser)
    }
}   

export default new UserData();