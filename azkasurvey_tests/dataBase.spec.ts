import {expect, test} from "@playwright/test"
import mysql from "mysql2/promise"



test('verify that user can retrive the data from database',async()=>{
const db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Soumya@126",
    database:"sakila",
})
const [rows]=await db.execute("select a.first_name,f.title,f.release_year,f.rental_duration,f.rental_rate from actor a inner join film_actor fa on a.actor_id=fa.actor_id inner join film f on fa.film_id=f.film_id where f.rental_duration>6 and f.rental_rate>=4.99 order by a.first_name desc limit 5;");
// console.log(rows);
//if you want to retrive only one title(2 row title)
// console.log(rows[2].title);

//-------------------sending the data
let title =rows[2].title
console.log(title);
//if you want to send the data 
await expect(title).toEqual("RECORDS ZORRO")
});

test('verify the row count of the database by the title',async()=>{
    const db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Soumya@126",
    database:"sakila",
})
const [rows]=await db.execute("select a.first_name,f.title,f.release_year,f.rental_duration,f.rental_rate from actor a inner join film_actor fa on a.actor_id=fa.actor_id inner join film f on fa.film_id=f.film_id where f.rental_duration>6 and f.rental_rate>=4.99 order by a.first_name desc limit 5;");
let rowCount=rows as any[];
for(let i=0;i<rowCount.length;i++){
    let title=rows[i].title;
    console.log(title);
}
})

test('verify the row count of the database by the name',async()=>{
    const db=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Soumya@126",
    database:"sakila",
})
const [rows]=await db.execute("select a.first_name as name,f.title,f.release_year,f.rental_duration,f.rental_rate from actor a inner join film_actor fa on a.actor_id=fa.actor_id inner join film f on fa.film_id=f.film_id where f.rental_duration>6 and f.rental_rate>=4.99 order by a.first_name desc limit 5;");
let rowCount=rows as any[];
for(let i=0;i<rowCount.length;i++){
    let title=rows[i].name;
    console.log(title);
}
})



