const { writeFileSync } = require('fs');
const { Parser } = require('jison');

const { lexerRules: rules } = require('./lexer-rules');
const { grammarBNF: bnf } = require('./grammar-rules');
const { operators } = require('./operators');

var grammar = {
    lex: { rules },
    operators,
    bnf
};

var parser = new Parser(grammar);

// Generate source, ready to be written to disk
var parserSource = parser.generate();

const compileParser = destinationPath =>
    writeFileSync(destinationPath, parserSource);

module.exports = compileParser;
