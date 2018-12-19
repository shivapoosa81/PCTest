const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const reporter = require("cucumber-html-reporter");
const report  = require("cucumber-html-report");

const htmlReports = process.cwd()+"/report/html";
const targetJson  = process.cmd()+"/reports/json/cucumber_report.json";

const cucumberReportOptions = {
    source: targetJson,
    dest: htmlReports,
    name: "cucumber-report.html",
    title: "Cucumber Report"

};

const cucumberReporteroptions = {

    theme: "bootstrap",
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteScenarios: true
};

class Reporter{

    static createDirectory(dirName) {

        if(!fs.existsSync(dirName)){
            mkdirp.sync(dirName);
        }
    }


    static createHtmlReport(){

        try{

            reporter.generate(cucumberReporteroptions);
            report.create(cucumberReportOptions)
                .then(function(){
                console.log('reports generated successfully');
                 }).catch(function(err){
                     if(err){
                         console.error(err);
                     }
            });

        }
        catch(err){
            if(err){
                console.log('failed to save cucumber test results to json file');
                console.error(err);
            }
        }

    }




    static createAllureXXML(){
        const allureReporter = require("cucumberjs-allure-reporter");
        const XMLReports = process.cwd()+"/reports/xml";
        Reporter.createDirectory(XMLReports);
        allureReporter.config({
            targetDir: XMLReports
        })
    }



}


module.exports  = Reporter;