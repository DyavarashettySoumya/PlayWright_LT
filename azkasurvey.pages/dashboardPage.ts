import { Page } from "@playwright/test";

export class dashboardPage{
    page:Page
    constructor(_page:Page){
this.page=_page;
    }
    get backButton(){
        return this.page.getByRole("link",{name:"Back"})
    }
    async viewTheExistingPage(){
    await this.page.waitForTimeout(2000);
    await this.page.getByText('Dashboard').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('link', { name: 'View' }).click();
    await this.page.waitForTimeout(2000);
    }
    //---------------------------------scroll and click button method---------------------
    //mouseHover,highlight,scroll to view the button-------------
    async navigateToDashboard(){
        try{
        await this.page.waitForTimeout(3000);
       await this.backButton.scrollIntoViewIfNeeded()
       await this.page.waitForTimeout(5000);
       await this.backButton.highlight();
       await this.page.waitForTimeout(2000);
       await this.backButton.hover();
       await this.page.waitForTimeout(4000);
       await this.backButton.click();
        }catch(error){
            console.log(error.message);
        }
    }
}