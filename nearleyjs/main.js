/**
 * --------------------------------------------------------
 * GLOBAL VARIABLES
 * --------------------------------------------------------
 */
const nearley = require("nearley");
const fs = require('fs');
const { exec } = require("child_process");

var ldf;
var grammar_obj;
var parser;
var json_data;
var parser_result;
var json_obj;
var output;

var grammar_ne_file = "grammar_header_nodes.ne";
var grammar_js_file = "grammar_header_nodes.js";
var ldf_file = "header_nodes.ldf";
var json_file = "header_nodes.json";

var convert_neTojs = true; //ok
var readAndParseLdfFile = true; //ok
var printParserResult = true;
var writeJsonFile = false;
var readJsonFile = false;

/**
 * --------------------------------------------------------
 * FUNCTIONS
 * --------------------------------------------------------
 */
let execPromise = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error.message);
      }
      if (stderr) {
        reject(stderr);
      }
      resolve(stdout);
    });
  })
}

let readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data);
      }
    })
  })
}

let writeFilePromise = (path, json_d) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json_d, err => err ? reject(err) : resolve(true));
  })
}



/**
 * --------------------------------------------------------
 * MAIN
 * --------------------------------------------------------
 */
let main = async () => {

  if (convert_neTojs) {
    //Convert a .ne file to a .js file
    try {
      output = await execPromise(`nearleyc ./grammar/${grammar_ne_file} -o ./grammar/${grammar_js_file}`);
      console.log(output);
      console.log("Conversion .ne to .js Ok.. \n");
    } catch (error) {
      console.log(error);
    }
    grammar_obj = require(`./grammar/${grammar_js_file}`);
    // Create a Parser object from our grammar.
    parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar_obj));
  }

  if (readAndParseLdfFile) {
    //read LDF file
    try {
      ldf = await readFilePromise(`./ldf/${ldf_file}`);
      // Parse LDF file
      parser.feed(ldf);
      parser_result = parser.results[0];
    } catch (error) {
      console.log(error);
      console.log("erorri in lettura file");
    }

  }

  if (printParserResult) {
    console.log(parser_result);
  }

  if (writeJsonFile) {
    //Write JSON
    try {
      json_data = JSON.stringify(parser_result)
      await writeFilePromise(`./json/${json_file}`, json_data)
    } catch (error) {
      console.log(error);
    }
  }

  if (readJsonFile) {
    //Read JSON
    try {
      json_data = await readFilePromise(`./json/${json_file}`);
      json_obj = JSON.parse(json_data);
    } catch (error) {
      console.log(error);
    }
    console.log(json_obj);
  }
}

main();






