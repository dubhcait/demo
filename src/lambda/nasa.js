import { config } from 'dotenv';
config();

const key = process.env.KEY;

import axios from 'axios';
export async function handler(event, context) {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${key}`,
      { headers: { Accept: 'application/json' } }
    );
    const data = response.data;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'well done',
        date: data.date,
        info: data.explanation,
        image: data.url,
        title: data.title
      })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
