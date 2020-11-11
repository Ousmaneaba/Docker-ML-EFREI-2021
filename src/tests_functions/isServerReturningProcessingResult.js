const config = require("../../config.js");
const supertest = require('supertest');
const app = require("../../app.js");
const request = supertest(app);

async function isServerReturningProcessingResult(){

  return await request.get('/?message=test');

}

module.exports = isServerReturningProcessingResult;
