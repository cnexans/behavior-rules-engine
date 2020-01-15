const grammarBNF = {
    "root": [
        ["body EOF", "return new yy.Program.Body({ instructions: $1 });"]
    ],

    "body": [
        [ "instruction_list EOL", "$$ = $1;" ],
        [ "EOL instruction_list EOL", "$$ = $2;" ],
        [ "EOL instruction_list", "$$ = $2;" ],
        [ "instruction_list", "$$ = $1;" ],
    ],

    "instruction_list" :[
        [ "instruction_list EOL instruction", "$$ = $1.concat([$3]);" ],
        [ "instruction", "$$ = [$1];" ],
    ],

    "instruction": [
        [ "variable_declaration", "$$ = $1;" ],
        [ "function_call", "$$ = $1;" ],
    ],

    "variable_declaration": [
        [
            "let IDENTIFIER := evaluable",
            "$$ = new yy.Instruction.VariableDeclaration({ name: $2, value: $4 });",
        ]
    ],

    "evaluable": [
        [
            "operation",
            "$$ = $1"
        ],
        [
            "( evaluable )",
            "$$ = $2"
        ],
        [
            "NUMBER",
            "$$ = new yy.Evaluable.Number({ number: $1 })",
        ],
        [
            "IDENTIFIER",
            "$$ = new yy.Evaluable.Identifier({ name: $1 })",
        ],
    ],

    "function_call": [
        [
            "IDENTIFIER ( evaluable )",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $1, args: [$3] });",
        ]
    ],

    "operation": [
        [
            "evaluable + evaluable",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $2, args: [$1, $3] });",
        ],
        [
            "evaluable - evaluable",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $2, args: [$1, $3] });",
        ],
        [
            "evaluable / evaluable",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $2, args: [$1, $3] });",
        ],
        [
            "evaluable * evaluable",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $2, args: [$1, $3] });",
        ],
        [
            "evaluable ^ evaluable",
            "$$ = new yy.Evaluable.FunctionCall({ functionName: $2, args: [$1, $3] });",
        ]
    ]
};

module.exports = { grammarBNF };
