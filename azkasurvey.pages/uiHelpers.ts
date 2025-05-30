import { Page } from "@playwright/test";
import { url } from "inspector";

export class uiHelpers{
    page;
    constructor(_page:Page){
        this.page=_page;
    }
    async navigateToAzkasurvey(url){
        await this.page.goto(url);
    }
    async verifyLogin(){
        try{
            await this.page.locator("[name='email']").toBeVisible();
        }catch(error){
            console.log(error.message);
        }
        
    }
}