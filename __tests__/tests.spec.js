const serverOnLocalhost = require("../src/tests/serverOnLocalhost");
const serverReturnHtmlPage = require("../src/tests/serverReturnHtmlPage");
const serverReturnProcessingResult = require("../src/tests/serverReturnProcessingResult");

describe("Server is on localhost", serverOnLocalhost);
describe("Server is returning an html page", serverReturnHtmlPage);
describe("Server is returning processing result in an html page", serverReturnProcessingResult);
