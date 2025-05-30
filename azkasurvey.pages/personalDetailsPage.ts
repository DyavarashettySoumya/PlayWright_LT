import { Page,expect } from "@playwright/test";

export class personalDetailsPage{
    page;
    constructor(_page:Page){
        this.page=_page;
    }
    get saveAndProceedButton(){
        return this.page.locator('input[id="next_button"]')
    }

    async verifyPersonalDetails(){
        await this.page.waitForTimeout(3000);
     //----------------validation(expect)------------------------
     await expect(this.page).toHaveTitle("/html/body/div/div/div/h1");
     //----get the url
     await this.page.waitForTimeout(3000);
     await console.log(this.page.url());
     let name=await this.page.locator("#name");
     await this.page.waitForTimeout(5000);
     expect(name).toBeVisible();
    }
    async enterPersonalDetails(){
        try{
            // await this.page.waitForTimeout(3000);
            await this.page.getByPlaceholder('Please Enter name').clear();
            await this.page.getByPlaceholder('Please Enter name').fill('soumya');
            await this.page.getByPlaceholder('Please Enter Address').clear();
            await this.page.getByPlaceholder('Please Enter Address').fill("Dilshuknagar")
            await this.page.getByPlaceholder('Please Enter Phone').clear();
            await this.page.getByPlaceholder('Please Enter Phone').fill('9876543210')
            await this.page.getByPlaceholder('Please Enter Constituency MLA').clear();
            await this.page.getByPlaceholder('Please Enter Constituency MLA').fill('Devireddy sudheer reddy')
            await this.page.getByPlaceholder('Please Enter Constituency MP').clear();
            await this.page.getByPlaceholder('Please Enter Constituency MP').fill('Asaduddin owaisi')
            //-----------------------------------------------by locators------------------
            //-------name locator------------
            await this.page.locator('input[name="age"]').fill('25');
            //---------------id----------------
            // await page.locator('#age').fill('25');
            
            await this.page.locator('input[name="ward"]').fill("Gaddiannaram");
            await this.page.locator("[value='female']").click();
            //--------------------radio button--------------------------
            // await page.locator('input[type="radio"][value="male"]').check();
            //getByLabel
            // await page.getByLabel('Male').check();
            
            // const radio = page.locator('input[type="radio"][value="female"]');
            // if(await radio.isEnabled()){
            //     await radio.check();
            // }
            await this.page.locator("[name='state']").selectOption("Lakshadweep");
            await this.page.locator('input[name="town"]').fill("hyderabad");
            await this.page.locator('input[name="mandal"]').fill("saroornagar");
            await this.page.locator('input[name="religion"]').fill("hindu");
            await this.page.locator('input[name="caste"]').fill("oc");
            await this.page.waitForTimeout(2000);
       
            //---------------scroll page
            await this.page.saveAndProceedButton.scrollIntoViewIfNeeded()
            await this.page.waitForTimeout(2000);
            //-----------------------highlight
            await this.page.saveAndProceedButton.highlight()
            await this.page.waitForTimeout(2000);
            //---------------------mousehover
            await this.page.saveAndProceedButton.hover()
            await this.page.waitForTimeout(2000);
            await this.page.saveAndProceedButton.click()
           //  await page.waitForTimeout(3000);

        }catch(error){
            console.log(error.message);
        }
    }
}