import {test,expect, Browser, chromium, Page, firefox} from "@playwright/test"
import { uiHelpers } from "../azkasurvey.pages/uiHelpers";
import { loginPage } from "../azkasurvey.pages/loginPage";
import { personalDetailsPage } from "../azkasurvey.pages/personalDetailsPage";
import { dashboardPage } from "../azkasurvey.pages/dashboardPage";
import { homePage } from "../azkasurvey.pages/homePage";
import fs from "fs";

let page:Page;
let env:string;
test.describe('login functionality',()=>{
    test.beforeAll("pre-requisite for all tests",async()=>{
    let datafile=fs.readFileSync("./testData/env.json",'utf-8');
    let jData=await JSON.parse(datafile);
    env=jData.environment;
    })
 test.beforeEach('start test',async()=>{
const now = new Date();
const formattedDate = `${now.getDate().toString().padStart(2,"0")}${(
now.getMonth()+1
)
.toString()
.padStart(2, "0")}${now.getFullYear()}${now
.getHours()
.toString()
.padStart(2, "0")}${now.getMinutes().toString().padStart(2,"0")}${now
.getSeconds().
toString()
.padStart(2, "0")}`;
//----------------Data-Driven(reading the data from external file)
let datafile=fs.readFileSync(`./testData/azkasurvey_${env}.json`,"utf-8")
let jData=await JSON.parse(datafile);
// let url=await jData.url;
 //--------------opening the chrom browser by using the context method
let browser:Browser=await chromium.launch({headless:false});
let context=await browser.newContext({recordVideo:{dir:`./videos/${formattedDate}`}});
page=await context.newPage();

 let uiHelper=new uiHelpers(page);
 //jData.url and password, username is used because the input data is reading for external file
 //passsing the key from external files 
 await uiHelper.navigateToAzkasurvey(jData.url);
//  await uiHelper.verifyLogin();
 
 let login=new loginPage(page);
 await login.loginToAzkasurvey(jData.email,jData.password,false);
});
test.afterEach('stop test',async()=>{
    //----------------------------screenshot--------------------
    // await page.screenshot({fullPage:true,path:"./screenshots/screen.jpg"});
    const now = new Date();
const formattedDate = `${now.getDate().toString().padStart(2,"0")}${(
now.getMonth()+1
)
.toString()
.padStart(2, "0")}${now.getFullYear()}${now
.getHours()
.toString()
.padStart(2, "0")}${now.getMinutes().toString().padStart(2,"0")}${now
.getSeconds().
toString()
.padStart(2, "0")}`
//ddMMyyyyhhmmss
await page.screenshot({fullPage:true, path:`./screenshots/screen_${formattedDate}.jpg`});
    });


test('verify the user can login to the azkasurvey',async()=>{
//---------------------------head line------------------
page.getByTitle("/html/body/div/div/div/h1");
});


test('verify the user can enter the personal details',async()=>{
let pd=new personalDetailsPage(page);
// await pd.verifyPersonalDetails()
await pd.enterPersonalDetails();
});

test('verify that user can upload the file',async()=>{
let home=new homePage(page);
await home.uploadTheFile();
});
})


test.describe('dashboard functionality',()=>{
test.beforeEach('start test',async()=>{
 //--------------opening the chrom browser by using the context method
const now = new Date();
const formattedDate = `${now.getDate().toString().padStart(2,"0")}${(
now.getMonth()+1
)
.toString()
.padStart(2, "0")}${now.getFullYear()}${now
.getHours()
.toString()
.padStart(2, "0")}${now.getMinutes().toString().padStart(2,"0")}${now
.getSeconds().
toString()
.padStart(2, "0")}`
 
let browser:Browser=await firefox.launch({headless:false});
let context=await browser.newContext({recordVideo:{dir:`./videos/${formattedDate}`}});
page=await context.newPage();

let uiHelper=new uiHelpers(page)
//  await uiHelper.navigateToAzkasurvey()
// //  await uiHelper.verifyLogin()
 
//  let login=new loginPage(page)
//  await login.loginToAzkasurvey(false)
 
 })   

 test('Verify that user view the existing record',async({})=>{
    let dashboard=new dashboardPage(page)
    await dashboard.viewTheExistingPage()
})

test('verify scroll and highlight',async({})=>{
    let dashboard=new dashboardPage(page)
    await dashboard.viewTheExistingPage()
    await page.waitForTimeout(3000);
    await dashboard.navigateToDashboard()
});

test.afterEach("Stop test",async()=> {
const now = new Date();
const formattedDate = `${now.getDate().toString().padStart(2,"0")}${(
now.getMonth()+1
)
.toString()
.padStart(2, "0")}${now.getFullYear()}${now
.getHours()
.toString()
.padStart(2, "0")}${now.getMinutes().toString().padStart(2,"0")}${now
.getSeconds().
toString()
.padStart(2, "0")}`
//ddMMyyyyhhmmss
await page.screenshot({fullPage:true, path:`./screenshots/screen_${formattedDate}.jpg`});
    });
});



/*
test('test case title',async({page})=>{
test steps
username:soumya@azkasurvey.com,password:aY2vKLEh
})
*/