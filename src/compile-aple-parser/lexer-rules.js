const lexerRules = [
    [
      "#.*\\n",
      "/* ignore whatever after hash, until line break */"
    ],
    [
      "\\n+",
      "return 'EOL'"
    ],
    [
      "\\s",
      "/* ignore whitespace */"
    ],
    [
      "let",
      "return 'let'"
    ],
    [
      "\\+",
      "return '+'"
    ],
    [
      "-",
      "return '-'"
    ],
    [
      "\\^",
      "return '^'"
    ],
    [
      "\\*",
      "return '*'"
    ],
    [
      "\\/",
      "return '/'"
    ],
    [
      "\\(",
      "return '('"
    ],
    [
      "\\)",
      "return ')'"
    ],
    [
      "if",
      "return 'if'"
    ],
    [
      "otherwise",
      "return 'otherwise'"
    ],
    [
      "=>",
      "return '=>'"
    ],
    [
      "[a-zA-Z]+",
      "return 'IDENTIFIER'"
    ],
    [
      ":=",
      "return ':='"
    ],
    [
      "-?[1-9][0-9]*(\\.[1-9][0-9]*)?",
      "return 'NUMBER'"
    ],
    [
      "$",
      "return 'EOF'"
    ]
];

module.exports = { lexerRules };