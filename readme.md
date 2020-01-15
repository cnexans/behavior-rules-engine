# Behavior rules engine

Behavior rules engine is a compiler that translates behavior rules (a close-to-english language) to JSON rules. The project goal is to provide a simple language that, when is combined with json-rules-engine package, a person can create rules sole english.

## Language specification

### Structure of a rule document

A program should have at least one rule called *main*, this rule can be placed anywhere in the document.

> Rule main: user_id is 123456

This rule should exist in the document otherwise document checker will throw an error.

### Behavior rules

A *behavior rule* is a proposition statement that uses *operators* over variables and constant values. A *behavior rule* has two parts: a *name* and a *expression* and can be written as follows:

> Rule *ruleName*: *expression*.

### Expressions

A expression is a statement that evaluates to a boolean value. A basic expression consist of *values*, *constants*, *variables* and an *operator*. Examples of rules with each operator can be found in the next sections.

#### Values

A value is either a string or a list of strings, no other type is supported.

##### Strings

A string can be written as is, no need to wrap with quotes

Example:
> 123

##### Lists

A list is written separating strings with commans and wrapping with square brackets.

Example:
> [123, 1234, 456]

**Note: the strings are always trimmed.**

### Operators

##### Not

Usually used to create blacklists.

> Rule myBlacklistRule: user_id not in [123,456]

This rule will evaluate to true if user_id is not 123 or 456, so that the blacklist in this case will include those values.

##### Equals

Does equality comparision between two values, constants or variables.

> Rule equalityRule: user_id equals 123

##### In

Evaluates to true if the given variable is in a list. This is usually used for whitelists.

> Rule myWhitelist: user_id in [123,456]

##### Ends with

Checks if the given variable matchs in the end to a value.

> Rule matchingRule: user_id ends with 1

In this example, this rule will evaluate to true if the user_id ends with 1, so it would mean that this rule will rollout 9% aproximately.

Ends with can be used with lists

> Rule rollout20: user_id ends with [0, 1]

Note: a rule names and variable names should always start with a letter.

### Constants

A constant is a definition of a value. It consists of a name and a value and can be used in rules.

Example:
> Const whiteList: [123,456]
> Rule whiteListRule: user_id in whiteList

This can be specially useful when large whitelist are used.

### Rule combination

Any defined rule can be combined using **logical operators**: *and*, *or*.

> Rule rollouted: user_id ends with [1, 2, 3]
> 
> Rule whitelisted: user_id in [1234,5678]
> 
> Rule main: rollouted or whitelisted

*Note: No curvy brackets are supported yet*