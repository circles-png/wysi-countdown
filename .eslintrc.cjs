/* eslint-disable max-len */
/* eslint no-magic-numbers: 'off' */
/* eslint sort-keys: 'off' */
/* eslint max-lines: 'off' */

module.exports = {
  env: {
    browser: true,
    es2020 : true
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  parser       : '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module'
  },
  ignorePatterns: [ 'node_modules/', 'dist/' ],
  plugins       : [ 'react-refresh', '@typescript-eslint' ],
  rules         : {
    'react-refresh/only-export-components': 'warn',

    'accessor-pairs'                : 'error',
    'array-bracket-newline'         : [ 'error', 'consistent' ],
    'array-bracket-spacing'         : [ 'error', 'always', { singleValue: false } ],
    'array-callback-return'         : 'error',
    'array-element-newline'         : [ 'error', 'consistent' ],
    'arrow-body-style'              : [ 'error', 'as-needed' ],
    'arrow-parens'                  : [ 'error', 'as-needed' ],
    'arrow-spacing'                 : 'error',
    'block-scoped-var'              : 'error',
    'block-spacing'                 : 'error',
    'brace-style'                   : 'error',
    'camelcase'                     : 'error',
    'capitalized-comments'          : [ 'error', 'never' ],
    'class-methods-use-this'        : 'error',
    'comma-dangle'                  : [ 'error', { functions: 'never' } ],
    'comma-spacing'                 : 'error',
    'comma-style'                   : 'error',
    'complexity'                    : 'error',
    'computed-property-spacing'     : 'error',
    'consistent-return'             : 'error',
    'consistent-this'               : 'error',
    'constructor-super'             : 'error',
    'curly'                         : [ 'error', 'multi', 'consistent' ],
    'default-case'                  : 'error',
    'default-case-last'             : 'error',
    'default-param-last'            : 'error',
    'dot-location'                  : [ 'error', 'property' ],
    'dot-notation'                  : [ 'error', { allowKeywords: false } ],
    'eol-last'                      : 'error',
    'eqeqeq'                        : 'error',
    'for-direction'                 : 'error',
    'func-call-spacing'             : 'error',
    'func-name-matching'            : 'error',
    'func-names'                    : 'error',
    'func-style'                    : 'error',
    'function-call-argument-newline': [ 'error', 'consistent' ],
    'function-paren-newline'        : [ 'error', 'multiline-arguments' ],
    'generator-star-spacing'        : 'error',
    'getter-return'                 : 'error',
    'grouped-accessor-pairs'        : [ 'error', 'getBeforeSet' ],
    'guard-for-in'                  : 'error',
    'id-length'                     : 'error',
    'implicit-arrow-linebreak'      : 'error',
    'indent'                        : [
      'error',
      2,
      {
        SwitchCase              : 1,
        VariableDeclarator      : 'first',
        outerIIFEBody           : 'off',
        MemberExpression        : 1,
        FunctionDeclaration     : { parameters: 'first' },
        FunctionExpression      : { parameters: 'first' },
        StaticBlock             : { body: 1 },
        CallExpression          : { arguments: 'first' },
        ArrayExpression         : 1,
        ObjectExpression        : 1,
        ImportDeclaration       : 1,
        flatTernaryExpressions  : false,
        offsetTernaryExpressions: true,
        ignoreComments          : false
      }
    ],
    'jsx-quotes'                       : [ 'error', 'prefer-single' ],
    'key-spacing'                      : [ 'error', { align: 'colon' } ],
    'keyword-spacing'                  : 'error',
    'line-comment-position'            : 'error',
    'linebreak-style'                  : 'error',
    'lines-around-comment'             : 'error',
    'lines-between-class-members'      : 'error',
    'logical-assignment-operators'     : 'error',
    'max-classes-per-file'             : 'error',
    'max-depth'                        : 'error',
    'max-lines'                        : 'error',
    'max-lines-per-function'           : [ 'error', { max: 100 } ],
    'max-nested-callbacks'             : 'error',
    'max-statements-per-line'          : 'error',
    'multiline-comment-style'          : 'error',
    'multiline-ternary'                : 'error',
    'new-cap'                          : 'error',
    'new-parens'                       : 'error',
    'newline-per-chained-call'         : 'error',
    'no-alert'                         : 'error',
    'no-array-constructor'             : 'error',
    'no-async-promise-executor'        : 'error',
    'no-await-in-loop'                 : 'error',
    'no-bitwise'                       : 'error',
    'no-caller'                        : 'error',
    'no-case-declarations'             : 'error',
    'no-class-assign'                  : 'error',
    'no-compare-neg-zero'              : 'error',
    'no-cond-assign'                   : 'error',
    'no-console'                       : 'error',
    'no-const-assign'                  : 'error',
    'no-constant-binary-expression'    : 'error',
    'no-constant-condition'            : 'error',
    'no-constructor-return'            : 'error',
    'no-continue'                      : 'error',
    'no-control-regex'                 : 'error',
    'no-debugger'                      : 'error',
    'no-delete-var'                    : 'error',
    'no-div-regex'                     : 'error',
    'no-dupe-args'                     : 'error',
    'no-dupe-class-members'            : 'error',
    'no-dupe-else-if'                  : 'error',
    'no-dupe-keys'                     : 'error',
    'no-duplicate-case'                : 'error',
    'no-duplicate-imports'             : 'error',
    'no-else-return'                   : 'error',
    'no-empty'                         : 'error',
    'no-empty-character-class'         : 'error',
    'no-empty-function'                : 'error',
    'no-empty-pattern'                 : 'error',
    'no-empty-static-block'            : 'error',
    'no-eq-null'                       : 'error',
    'no-eval'                          : 'error',
    'no-ex-assign'                     : 'error',
    'no-extend-native'                 : 'error',
    'no-extra-bind'                    : 'error',
    'no-extra-boolean-cast'            : 'error',
    'no-extra-label'                   : 'error',
    'no-extra-parens'                  : 'error',
    'no-extra-semi'                    : 'error',
    'no-fallthrough'                   : 'error',
    'no-floating-decimal'              : 'error',
    'no-func-assign'                   : 'error',
    'no-global-assign'                 : 'error',
    'no-implicit-coercion'             : 'error',
    'no-implicit-globals'              : 'error',
    'no-implied-eval'                  : 'error',
    'no-import-assign'                 : 'error',
    'no-inline-comments'               : 'error',
    'no-inner-declarations'            : 'error',
    'no-invalid-regexp'                : 'error',
    'no-invalid-this'                  : 'error',
    'no-irregular-whitespace'          : 'error',
    'no-iterator'                      : 'error',
    'no-label-var'                     : 'error',
    'no-labels'                        : 'error',
    'no-lone-blocks'                   : 'error',
    'no-lonely-if'                     : 'error',
    'no-loop-func'                     : 'error',
    'no-loss-of-precision'             : 'error',
    'no-misleading-character-class'    : 'error',
    'no-mixed-operators'               : 'error',
    'no-mixed-spaces-and-tabs'         : 'error',
    'no-multi-assign'                  : 'error',
    'no-multi-spaces'                  : 'error',
    'no-multi-str'                     : 'error',
    'no-multiple-empty-lines'          : 'error',
    'no-negated-condition'             : 'error',
    'no-new'                           : 'error',
    'no-new-func'                      : 'error',
    'no-new-native-nonconstructor'     : 'error',
    'no-new-object'                    : 'error',
    'no-new-symbol'                    : 'error',
    'no-new-wrappers'                  : 'error',
    'no-nonoctal-decimal-escape'       : 'error',
    'no-obj-calls'                     : 'error',
    'no-octal'                         : 'error',
    'no-octal-escape'                  : 'error',
    'no-param-reassign'                : 'error',
    'no-plusplus'                      : 'error',
    'no-promise-executor-return'       : 'error',
    'no-proto'                         : 'error',
    'no-prototype-builtins'            : 'error',
    'no-redeclare'                     : 'error',
    'no-regex-spaces'                  : 'error',
    'no-restricted-exports'            : 'error',
    'no-restricted-globals'            : 'error',
    'no-restricted-imports'            : 'error',
    'no-restricted-properties'         : 'error',
    'no-restricted-syntax'             : 'error',
    'no-return-assign'                 : 'error',
    'no-return-await'                  : 'error',
    'no-script-url'                    : 'error',
    'no-self-assign'                   : 'error',
    'no-self-compare'                  : 'error',
    'no-sequences'                     : 'error',
    'no-setter-return'                 : 'error',
    'no-shadow'                        : 'error',
    'no-shadow-restricted-names'       : 'error',
    'no-sparse-arrays'                 : 'error',
    'no-tabs'                          : 'error',
    'no-template-curly-in-string'      : 'error',
    'no-this-before-super'             : 'error',
    'no-throw-literal'                 : 'error',
    'no-trailing-spaces'               : 'error',
    'no-undef'                         : 'error',
    'no-undef-init'                    : 'error',
    'no-undefined'                     : 'error',
    'no-underscore-dangle'             : 'error',
    'no-unexpected-multiline'          : 'error',
    'no-unmodified-loop-condition'     : 'error',
    'no-unneeded-ternary'              : 'error',
    'no-unreachable'                   : 'error',
    'no-unreachable-loop'              : 'error',
    'no-unsafe-finally'                : 'error',
    'no-unsafe-negation'               : 'error',
    'no-unsafe-optional-chaining'      : 'error',
    'no-unused-expressions'            : 'error',
    'no-unused-labels'                 : 'error',
    'no-unused-private-class-members'  : 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define'             : 'error',
    'no-useless-backreference'         : 'error',
    'no-useless-call'                  : 'error',
    'no-useless-catch'                 : 'error',
    'no-useless-computed-key'          : 'error',
    'no-useless-concat'                : 'error',
    'no-useless-constructor'           : 'error',
    'no-useless-escape'                : 'error',
    'no-useless-rename'                : 'error',
    'no-useless-return'                : 'error',
    'no-var'                           : 'error',
    'no-void'                          : 'error',
    'no-warning-comments'              : 'error',
    'no-whitespace-before-property'    : 'error',
    'no-with'                          : 'error',
    'nonblock-statement-body-position' : [ 'error', 'below' ],
    'object-curly-newline'             : [ 'error', { multiline: true } ],
    'object-curly-spacing'             : [ 'error', 'always' ],
    'object-property-newline'          : 'error',
    'object-shorthand'                 : 'error',
    'one-var'                          : 'error',
    'one-var-declaration-per-line'     : 'error',
    'operator-assignment'              : 'error',
    'operator-linebreak'               : [ 'error', 'before' ],
    'padded-blocks'                    : [ 'error', 'never' ],
    'prefer-arrow-callback'            : 'error',
    'prefer-const'                     : 'error',
    'prefer-destructuring'             : 'error',
    'prefer-exponentiation-operator'   : 'error',
    'prefer-named-capture-group'       : 'error',
    'prefer-numeric-literals'          : 'error',
    'prefer-object-has-own'            : 'error',
    'prefer-object-spread'             : 'error',
    'prefer-promise-reject-errors'     : 'error',
    'prefer-regex-literals'            : 'error',
    'prefer-rest-params'               : 'error',
    'prefer-spread'                    : 'error',
    'prefer-template'                  : 'error',
    'quote-props'                      : [ 'error', 'consistent-as-needed' ],
    'quotes'                           : [ 'error', 'single', { avoidEscape: true } ],
    'radix'                            : 'error',
    'require-atomic-updates'           : 'error',
    'require-await'                    : 'error',
    'require-unicode-regexp'           : 'error',
    'require-yield'                    : 'error',
    'rest-spread-spacing'              : 'error',
    'semi'                             : [ 'error', 'never' ],
    'semi-spacing'                     : 'error',
    'semi-style'                       : 'error',
    'sort-imports'                     : 'error',
    'sort-keys'                        : 'error',
    'sort-vars'                        : 'error',
    'space-before-blocks'              : 'error',
    'space-before-function-paren'      : [ 'error', {
      anonymous : 'always',
      named     : 'never',
      asyncArrow: 'always'
    } ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', {
      words   : true,
      nonwords: false
    } ],
    'spaced-comment'        : 'error',
    'strict'                : 'error',
    'switch-colon-spacing'  : 'error',
    'symbol-description'    : 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing'  : 'error',
    'unicode-bom'           : 'error',
    'use-isnan'             : 'error',
    'valid-typeof'          : 'error',
    'vars-on-top'           : 'error',
    'wrap-iife'             : 'error',
    'wrap-regex'            : 'error',
    'yield-star-spacing'    : 'error',
    'yoda'                  : 'error'
  }
}
