import { config } from "dotenv";
config();

const sales = process.env.SALESFORCE
const password = process.env.PASSWORD
const loginUrl = process.env.LOGINURL



export function handler(event, context, callback) {
   
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: sales }),
  })

};