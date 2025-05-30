import {expect, Page} from "@playwright/test";

export class loginPage{
    page;
    constructor(_page:Page){
        this.page=_page
    }
    //-----------------------creating the locator commonly
    get email(){
        return this.page.getByPlaceholder('Enter Username');
    }
    get password(){
        return this.page.getByPlaceholder('Enter Password');
    }
    get login(){
        return this.page.getByText();

    }
    async loginToAzkasurvey(_email,_password,isRememberChecked:boolean){
        // await this.page.getByPlaceholder('Enter Username').fill('soumya@azkasurvey.com');
        // await this.page.getByPlaceholder('Enter Password').fill('aY2vKLEh');
        await this.email.fill(_email);
        await this.password.fill(_password);
        if(isRememberChecked==true){
            await this.page.locator("#inlineFormCheck").setChecked(true);
        }
        await this.page.waitForTimeout(2000);
        //by using locator
        // await this.page.locator("[type='submit']").click();
        //getting the text by using the button name --"login"
        // await this.page.getByText("login").nth(1).click();
        //getting the text by using the role of the button
        await this.page.getByRole("button",{name:"login"}).click();
        await this.page.waitForTimeout(3000);
    }
    async clearData(){
        await this.email.clear()
    }
    async verifyLoginPage(){
        await expect(this.email).toBeVisible();
    }
}