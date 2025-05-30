import {expect, test} from "@playwright/test";
import {Request} from "@playwright/test";
import fs from "fs";

test("verify that user can POST data",async({request})=>{
    //read the credentials
    const credentials={
        email:"soumya@azkasurvey.com",
        password:"aY2vKLEh"
    }
    //uploading the credentials to post request
const tResponse=await request.post("http://azkasurvey.com/api/login",{
    data:credentials,
});
//getting the response and printing to the console
let tokenJson=await tResponse.json();
//here "token" and "user_id" is from response from postman(names should be same)
let token= tokenJson.token;
let userId = tokenJson.user_id;
console.log(token);
console.log(tokenJson); 
// console.log(userId); 
//-----------------upload data using the barearToken
// var uploadData=[{"user_id":"31", "is_submit":null,
//  "name":"bbbb",
//     "gender":null,
//     "address":null,
//     "state":null,
//     "phone":null,
//     "town":null,
//     "mla":null,
//     "mandal":null,
//     "mp":null,
//     "religion":null,
//     "age":null,
//     "caste":null,
//     "ward":null,
//     "familymember":null,
//     "children":null,
//     "earningmembers":null,
//     "females":null,
//     "occupation":null,
//     "totalmale":null,
//     "totalearner":null,
//     "totaldebt":null,
//     "savingpermonth":null,
//     "interestrate":null,
//     "sourcedebt":null,
//     "streetroad":null,
//     "tvroads":null,
//     "districtroads":null,
//     "transportation":null,
//     "hospitals":null,
//     "schoolfacility":null,
//     "facilityandavailability":null,
//     "votefor":null,
//     "created_at":"2024-03-21 18:16:41",
//     "updated_at":"2024-03-21 18:16:41"
// },];
//------------------------reading the file from external data
let file = await fs.readFileSync("./uploadData/uploadFile.json")
//after uploading the raw data...api call with end point and using the bearer token as headers
let postResponse=await request.post("http://azkasurvey.com/api/upload/json",
    {
        data:file,
    headers:{
        Authorization: "Bearer "+token,
    },
}
);
//reading the key values from reponse using upload data api call
let postJson=await postResponse.json();
console.log(postJson);
let message=postJson.message;
await expect(message).toEqual("JSON data uploaded successfully");
});