export default class test{
    static get loginForm(){
        return { get UserId(){}, get password(){}};
    }

    static get locators(){
        return { "accountNumber": "#accountNumber"};
    }
}