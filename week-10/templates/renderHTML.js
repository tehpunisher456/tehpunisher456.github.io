// const fs = require("fs");
// const path = require("path");
// const util = require("util");


// const Manager = require("./../lib/Manager");
// const Engineer = require("./../lib/Engineer");
// const Intern = require("./../lib/Intern");


// const templatesDir = path.resolve(__dirname, "../templates");

// const buildDir = path.resolve(__dirname, "../build/");


// const writeFile = util.promisify(fs.writeFile);
// const readFile = util.promisify(fs.readFile);



// async function render(employees) {
//   const html = [];

//   const [
//     managerTemplate,
//     internTemplate,
//     engineerTemplate,
//     mainTemplate
//   ] = await Promise.all([
//     readFile(path.resolve(templatesDir, "manager.html"), "utf8"),
//     readFile(path.resolve(templatesDir, "intern.html"), "utf8"),
//     readFile(path.resolve(templatesDir, "engineer.html"), "utf8"),
//     readFile(path.resolve(templatesDir, "template.html"), "utf8")
//   ]);


//   html.push(
//     employees
//       .filter(employee => employee instanceof Manager)
//       .map(employee => {
//         let template = managerTemplate;
//         for (const key in employee) {
//           template = replacePlaceholder(template, key, employee[key]);
//         }
//         return template;
//       })
//       .join("")
//   );


//   html.push(
//     employees
//       .filter(employee => employee instanceof Engineer)
//       .map(employee => {
//         let template = engineerTemplate;
//         for (const key in employee) {
//           template = replacePlaceholder(template, key, employee[key]);
//         }
//         return template;
//       })
//       .join("")
//   );


//   html.push(
//     employees
//       .filter(employee => employee instanceof Intern)
//       .map(employee => {
//         let template = internTemplate;
//         for (const key in employee) {
//           template = replacePlaceholder(template, key, employee[key]);
//         }
//         return template;
//       })
//       .join("")
//   );


//   if (!fs.existsSync(buildDir)) { 
//     fs.mkdirSync(buildDir);
//   }
//   await writeFile(
//     path.resolve(buildDir, "index.html"),
//     replacePlaceholder(mainTemplate, "body", html.join(""))
//   );
// }
// function replacePlaceholder(template, target, value) {
//   const regex = new RegExp("{{ " + target + " }}", "gm");
//   const newTemplate = template.replace(regex, value);
//   return newTemplate;
// }

// module.exports = render;
const fs = require("fs");
const path = require("path");
const util = require("util");

const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const templatesDir = path.resolve(__dirname, "../templates");
const mainHTML = path.resolve(__dirname, "../build/");

const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);


async function render(members) {
    const html = [];

    const [
        managerTemplate,
        internTemplate,
        engineerTemplate,
        mainTemplate
    ] = await Promise.all([
        readFile(path.resolve(templatesDir, "manager.html")),
        readFile(path.resolve(templatesDir, "intern.html")),
        readFile(path.resolve(templatesDir, "engineer.html")),
        readFile(path.resolve(templatesDir, "template.html"))
    ]);

    html.push(
        members
        .filter(members => members instanceof Manager)
        .map(members => {
            var template = managerTemplate.toString("utf-8");
            for (const key in members) {
                template = replacePlaceholder(template, key, members[key])
            }
            return template
        })
        .join("")
    );

    html.push(
        members
        .filter(members => members instanceof Engineer)
        .map(members => {
            var template = engineerTemplate.toString("utf-8");
            for (const key in members) {
                template = replacePlaceholder(template, key, members[key])
            }
            return template
        })
        .join("")
    );
    html.push(
        members
        .filter(members => members instanceof Intern)
        .map(members => {
            var template = internTemplate.toString("utf-8");
            for (const key in members) {
                template = replacePlaceholder(template, key, members[key])
            }
            return template
        })
        .join("")
    );
    
    console.log(html)
    if (!fs.existsSync(mainHTML)) {
        fs.mkdirSync(mainHTML);
    }
    await writeFile(
        path.resolve(mainHTML, "index.html"),
        replacePlaceholder(mainTemplate.toString("utf-8"), "body", html.join(""))
    );
}

function replacePlaceholder(template, target, value) {
    const regex = new RegExp("{{" + target + "}}", "gm");
    const newTemplate = template.replace(regex, value);
    return newTemplate;
}

module.exports = render;