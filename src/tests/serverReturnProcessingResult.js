const config = require("../../config");
const isServerReturningProcessingResult = require("../tests_functions/isServerReturningProcessingResult");

module.exports = () => {
  test("server must be returning processing result in an html page", async () => {

    let returnProcessingResult = false;

    await isServerReturningProcessingResult()
      .then(function(result){
        if(result.headers['content-type'].includes("text/html")){
          if(result.text.includes("id=\"processing_result\"")){
            returnProcessingResult = true;
          }
        }
      });
    expect(returnProcessingResult).toEqual(true);
  });
};
