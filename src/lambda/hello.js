import { config } from "dotenv";
config();

const sales = process.env.SALESFORCE


export function handler(event, context, callback) {
   
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: sales }),
  })

};