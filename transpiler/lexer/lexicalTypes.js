module.exports = {

  // ARRAY: {
  //   '[': 'ARRAY_START',
  //   ']': 'ARRAY_END'
  // },

  // DICTIONARY: {
  //   '[': 'DICTIONARY_START',
  //   ']': 'DICTIONARY_END'
  // },

  NATIVE_METHOD: {
    'advancedBy': 'NATIVE_METHOD',
    'append': 'NATIVE_METHOD',
    'hasPrefix': 'NATIVE_METHOD',
    'hasSuffix': 'NATIVE_METHOD',
    'insert': 'NATIVE_METHOD',
    'insertContentsOf': 'NATIVE_METHOD',
    'predecessor': 'NATIVE_METHOD',
    'print': 'NATIVE_METHOD',
    'println': 'NATIVE_METHOD',
    'removeAtIndex': 'NATIVE_METHOD',
    'removeAll': 'NATIVE_METHOD',
    'removeFirst': 'NATIVE_METHOD',
    'removeLast': 'NATIVE_METHOD',
    'removeRange': 'NATIVE_METHOD',
    'removeValueForKey': 'NATIVE_METHOD',
    'successor': 'NATIVE_METHOD',
    'updateValue': 'NATIVE_METHOD',
  },
  
  METHOD_ARGUMENT_NAME: {
    'at': 'METHOD_ARGUMENT_NAME',
    'atIndex': 'METHOD_ARGUMENT_NAME',
    'forKey': 'METHOD_ARGUMENT_NAME',
    'repeatedValue': 'METHOD_ARGUMENT_NAME'
  },
  
  TYPE_PROPERTY: {
    'characters': 'TYPE_PROPERTY',
    'count': 'TYPE_PROPERTY',
    'endIndex': 'TYPE_PROPERTY',
    'isEmpty': 'TYPE_PROPERTY',
    'startIndex': 'TYPE_PROPERTY',
  },

  RANGES: {
    '...': 'CLOSED_RANGE',
    '..<': 'HALF-OPEN_RANGE',
  },

  FUNCTION_DECLARATION: {
    '(': 'PARAMS_START',
    ')': 'PARAMS_END',
    '{': 'STATEMENTS_START',
    '}': 'STATEMENTS_END',
    '->': 'RETURN_ARROW',
    '...': 'VARIADIC_PARAM'
  },

  FUNCTION_INVOCATION: {
    '(': 'INVOCATION_START',
    ')': 'INVOCATION_END'
  },
  
  CLASS_DEFINITION: {
    '{': 'CLASS_DEFINITION_START',
    '}': 'CLASS_DEFINITION_END'
  },
  
  STRUCT_DEFINITION: {
    '{': 'STRUCT_DEFINITION_START',
    '}': 'STRUCT_DEFINITION_END'
  },
  
  INITIALIZATION: {
    '(': 'INITIALIZATION_START',
    ')': 'INITIALIZATION_END'
  },

  COLLECTION: {
    '[': 'ARRAY_START',
    ']': 'COLLECTION_END'
  },
  
  COMMENT: {
    '//': 'COMMENT_START',
    '/*': 'MULTI_LINE_COMMENT_START',
    '*/': 'MULTI_LINE_COMMENT_END'  
  },
  
  KEYWORD: { 
    
    // keywords used in declarations
    'class': 'DECLARATION_KEYWORD', 
    'deinit': 'DECLARATION_KEYWORD', 
    'enum': 'DECLARATION_KEYWORD', 
    'extension': 'DECLARATION_KEYWORD',
    'func': 'DECLARATION_KEYWORD',
    'import': 'DECLARATION_KEYWORD',
    'init': 'DECLARATION_KEYWORD',
    'inout': 'DECLARATION_KEYWORD',
    'internal': 'DECLARATION_KEYWORD',
    'let': 'DECLARATION_KEYWORD',
    'operator': 'DECLARATION_KEYWORD', 
    'private': 'DECLARATION_KEYWORD', 
    'protocol': 'DECLARATION_KEYWORD', 
    'public': 'DECLARATION_KEYWORD', 
    'static': 'DECLARATION_KEYWORD', 
    'struct': 'DECLARATION_KEYWORD', 
    'subscript': 'DECLARATION_KEYWORD', 
    'typealias': 'DECLARATION_KEYWORD',
    'var': 'DECLARATION_KEYWORD',
    
    // keywords used in statements
    'break': 'STATEMENT_KEYWORD',
    'case': 'STATEMENT_KEYWORD',
    'continue': 'STATEMENT_KEYWORD',
    'default': 'STATEMENT_KEYWORD',
    'defer': 'STATEMENT_KEYWORD',
    'do': 'STATEMENT_KEYWORD',
    'else': 'STATEMENT_KEYWORD',
    'fallthrough': 'STATEMENT_KEYWORD',
    'for': 'STATEMENT_KEYWORD',
    'guard': 'STATEMENT_KEYWORD',
    'if': 'STATEMENT_KEYWORD',
    'in': 'STATEMENT_KEYWORD',
    'repeat': 'STATEMENT_KEYWORD',
    'return': 'STATEMENT_KEYWORD',
    'switch': 'STATEMENT_KEYWORD',
    'where': 'STATEMENT_KEYWORD',
    'while': 'STATEMENT_KEYWORD',
    
    // keywords used in expressions and types
    'as': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'catch': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'dynamicType': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'is': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'nil': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'rethrows': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'super': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'self': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'Self': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'throw': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'throws': 'EXPRESSION_OR_TYPE_KEYWORD', 
    'try': 'EXPRESSION_OR_TYPE_KEYWORD', 
    '__COLUMN__': 'EXPRESSION_OR_TYPE_KEYWORD', 
    '__FILE__': 'EXPRESSION_OR_TYPE_KEYWORD', 
    '__FUNCTION__': 'EXPRESSION_OR_TYPE_KEYWORD', 
    '__LINE__': 'EXPRESSION_OR_TYPE_KEYWORD',
    
    // keywords used in patterns
    '_': 'PATTERN_KEYWORD',
    
    // keywords reserved in particular contexts
    'associativity': 'CONTEXT_SPECIFIC_KEYWORD',
    'convenience': 'CONTEXT_SPECIFIC_KEYWORD', 
    'dynamic': 'CONTEXT_SPECIFIC_KEYWORD', 
    'didSet': 'CONTEXT_SPECIFIC_KEYWORD', 
    'final': 'CONTEXT_SPECIFIC_KEYWORD', 
    'get': 'CONTEXT_SPECIFIC_KEYWORD', 
    'infix': 'CONTEXT_SPECIFIC_KEYWORD', 
    'indirect': 'CONTEXT_SPECIFIC_KEYWORD', 
    'lazy': 'CONTEXT_SPECIFIC_KEYWORD', 
    'left': 'CONTEXT_SPECIFIC_KEYWORD', 
    'mutating': 'CONTEXT_SPECIFIC_KEYWORD', 
    'none': 'CONTEXT_SPECIFIC_KEYWORD', 
    'nonmutating': 'CONTEXT_SPECIFIC_KEYWORD', 
    'optional': 'CONTEXT_SPECIFIC_KEYWORD', 
    'override': 'CONTEXT_SPECIFIC_KEYWORD', 
    'postfix': 'CONTEXT_SPECIFIC_KEYWORD', 
    'precedence': 'CONTEXT_SPECIFIC_KEYWORD', 
    'prefix': 'CONTEXT_SPECIFIC_KEYWORD', 
    'Protocol': 'CONTEXT_SPECIFIC_KEYWORD', 
    'required': 'CONTEXT_SPECIFIC_KEYWORD', 
    'right': 'CONTEXT_SPECIFIC_KEYWORD', 
    'set': 'CONTEXT_SPECIFIC_KEYWORD', 
    'Type': 'CONTEXT_SPECIFIC_KEYWORD', 
    'unowned': 'CONTEXT_SPECIFIC_KEYWORD', 
    'weak': 'CONTEXT_SPECIFIC_KEYWORD', 
    'willSet': 'CONTEXT_SPECIFIC_KEYWORD'
    
  },

  OPERATOR: {
    
    '/': 'OPERATOR', 
    '=': 'OPERATOR', 
    '-': 'OPERATOR', 
    '+': 'OPERATOR', 
    '!': 'OPERATOR', 
    '*': 'OPERATOR', 
    '%': 'OPERATOR', 
    '<': 'OPERATOR', 
    '>': 'OPERATOR', 
    '&': 'OPERATOR', 
    '|': 'OPERATOR', 
    '^': 'OPERATOR', 
    '?': 'OPERATOR', 
    '~': 'OPERATOR'
    
  },

  // TODO end of file terminator at end of string, new line terminator, semicolon terminator

  PUNCTUATION: {
    
    '(': 'PUNCTUATION',
    ')': 'PUNCTUATION', 
    '{': 'PUNCTUATION', 
    '}': 'PUNCTUATION', 
    '.': 'PUNCTUATION', 
    ',': 'PUNCTUATION', 
    ':': 'PUNCTUATION', 
    ';': 'PUNCTUATION',  
    '@': 'PUNCTUATION', 
    '#': 'PUNCTUATION', 
    '`': 'PUNCTUATION',
    // '?': 'PUNCTUATION' 

  },

  SUBSTRING_LOOKUP: {
    '[': 'SUBSTRING_LOOKUP_START', 
    ']': 'SUBSTRING_LOOKUP_END', 
  },

  SPECIAL_STRING: {
    '\\(': "STRING_INTERPOLATION_START",
    ')': "STRING_INTERPOLATION_END",
  },

  TERMINATOR: {
    'EOF': 'TERMINATOR',
    '\\n': 'TERMINATOR',
    '\\r': 'TERMINATOR',
    '\\t': 'TAB'
  },
  
  TYPE: {
    'Character': 'TYPE_STRING',
    'Double': 'TYPE_NUMBER',
    'Float': 'TYPE_NUMBER',
    'Bool': 'TYPE_BOOLEAN',
    'Int': 'TYPE_NUMBER',
    'Int8': 'TYPE_NUMBER',
    'Int16': 'TYPE_NUMBER',
    'Int32': 'TYPE_NUMBER',
    'Int64': 'TYPE_NUMBER',
    'String': 'TYPE_STRING',
    'UInt': 'TYPE_NUMBER',
    'UInt8': 'TYPE_NUMBER',
    'UInt16': 'TYPE_NUMBER',
    'UInt32': 'TYPE_NUMBER',
    'UInt64': 'TYPE_NUMBER'
  }

  
};