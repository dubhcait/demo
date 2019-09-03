import { config } from "dotenv";
config();
import jsforce from 'jsforce'

const sales = process.env.SALESFORCE
const password = process.env.PASSWORD
const loginUrl = process.env.LOGINURL

console.log(sales)

export function handler(event, context, callback) {
const conn = new jsforce.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env.
  loginUrl: loginUrl
})
conn.login(sales, password, function (err, userInfo) {
  if (err) {
    return console.error(err)
  }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken)
  console.log(conn.instanceUrl)
  // logged in user property
  console.log('User ID: ' + userInfo.id)
  console.log('Org ID: ' + userInfo.organizationId)
  // ...

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  })

})}