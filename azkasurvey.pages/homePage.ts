import { Page } from "@playwright/test";

export class homePage{
    page:Page
    constructor(_page:Page){
        this.page=_page;
    }
    get uploadJson(){
        return this.page.getByRole("button",{name:"upload Json"})
    }
    get chooseFile(){
        return this.page.locator("#jsonFileInput")
    }
    get uploadButton(){
        return this.page.locator("#uploadButton")
    }
    async uploadTheFile(){
        await this.page.waitForTimeout(2000)
        //process first click on uploadJson button
        await this.uploadJson.click();
        await this.page.waitForTimeout(2000)
        //put ./jsonfilepath(remove backward slash and put farward slash)
        await this.chooseFile.setInputFiles("./uploadData/uploadFile.json");
        await this.uploadButton.click();
        
    }
}