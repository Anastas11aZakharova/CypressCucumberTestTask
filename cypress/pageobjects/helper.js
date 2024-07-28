export default class helper {



    static validUserName = 'standard_user'
    static validPassword = 'secret_sauce'
    static lockedOutUsername = 'locked_out_user'


    static createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }


}