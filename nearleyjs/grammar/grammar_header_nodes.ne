start ->
  ldf {%
    function(data){
      return data[0]
    }
  %}

ldf 
  -> header_lin_description_file _ header_protocol_version _ header_language_version _ header_speed _ nodes _ {%
    function(data){
      return {
        header: data[0],
        protocol_version: data[2],
        language_version: data[4],
        speed: data[6],
        nodes: data[8]
      }
    }
  %}

#############################
#header
#############################
header_lin_description_file 
  -> "LIN_description_file" ";" {%
    function(data){
      return data[0]
    }
  %}
header_protocol_version
  -> "LIN_protocol_version" _ "=" _ "\"" ldf_float "\"" ";" {%
    function(data){
      return data[5]
    }
  %}
header_language_version 
  -> "LIN_language_version" _ "=" _ "\"" ldf_float "\"" ";" {%
    function(data){
      return data[5]
    }
  %}
header_speed
  -> "LIN_speed" _ "=" _ ldf_float _ "kbps" ";" {%
    function(data){
      return data[4]
    }
  %}

#############################
#nodes
#############################
nodes 
  -> "Nodes" _ "{" _ nodes_master _ nodes_slaves _ "}" {%
    function(data){
      return {
        master:data[4],
        slave:data[6]g
      }
    }
  %}

nodes_master 
  -> "Master:" _ ldf_identifier "," _ ldf_float _ "ms" _ "," _ ldf_float _ "ms" _ ";" {%
    function(data) {
      return {
        name:data[2],
        timebase: data[5],
        jitter: data[11]
      }
    } 
  %}

nodes_slaves 
  -> "Slaves:" _ ldf_identifier ("," _ ldf_identifier):* ";" {%
  function(data) {
    let data_filtered = [];
    data_filtered.push(data[2]);
    for (const element of data[3]){
      data_filtered.push(element[2])
    }
    return data_filtered;
  }
%}

ldf_float ->
      int "." int   {% function(d) {return parseFloat(d[0].v + d[1] + d[2].v)} %}
    | int           {% function(d) {return parseInt(d[0].v)} %}

ldf_identifier -> [\w]:+ {% function(d) {return d[0].join("")} %}


	
	
# From https://github.com/Hardmath123/nearley/
# blob/master/examples/calculator/arithmetic.ne

# This is a nice little grammar to familiarize yourself
# with the nearley syntax.

# It parses valid calculator input, obeying OOO and stuff.
# Try clicking "Add Test" and pasting in
#   ln (3 + 2*(8/e - sin(pi/5)))

# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
# The _'s are defined as whitespace below. This is a mini-
# -idiom.
# The stuff inside {% %} is an optional postprocessing
# function which can return anything you like.

main -> _ AS _ {% function(d) {return {type:'main', d:d, v:d[1].v}} %}


# PEMDAS!
# We define each level of precedence as a nonterminal.

# Parentheses
P -> "(" _ AS _ ")" {% function(d) {return {type:'P', d:d, v:d[2].v}} %}
    | N             {% id %}

# Exponents
E -> P _ "^" _ E    {% function(d) {return {type:'E', d:d, v:Math.pow(d[0].v, d[4].v)}} %}
    | P             {% id %}

# Multiplication and division
MD -> MD _ "*" _ E  {% function(d) {return {type: 'M', d:d, v:d[0].v*d[4].v}} %}
    | MD _ "/" _ E  {% function(d) {return {type: 'D', d:d, v:d[0].v/d[4].v}} %}
    | E             {% id %}

# Addition and subtraction
AS -> AS _ "+" _ MD {% function(d) {return {type:'A', d:d, v:d[0].v+d[4].v}} %}
    | AS _ "-" _ MD {% function(d) {return {type:'S', d:d, v:d[0].v-d[4].v}} %}
    | MD            {% id %}

# A number or a function of a number
N -> float          {% id %}
    | "sin" _ P     {% function(d) {return {type:'sin', d:d, v:Math.sin(d[2].v)}} %}
    | "cos" _ P     {% function(d) {return {type:'cos', d:d, v:Math.cos(d[2].v)}} %}
    | "tan" _ P     {% function(d) {return {type:'tan', d:d, v:Math.tan(d[2].v)}} %}
    
    | "asin" _ P    {% function(d) {return {type:'asin', d:d, v:Math.asin(d[2].v)}} %}
    | "acos" _ P    {% function(d) {return {type:'acos', d:d, v:Math.acos(d[2].v)}} %}
    | "atan" _ P    {% function(d) {return {type:'atan', d:d, v:Math.atan(d[2].v)}} %}

    | "pi"          {% function(d) {return {type:'pi', d:d, v:Math.PI}} %}
    | "e"           {% function(d) {return {type:'e', d:d, v:Math.E}} %}
    | "sqrt" _ P    {% function(d) {return {type:'sqrt', d:d, v:Math.sqrt(d[2].v)}} %}
    | "ln" _ P      {% function(d) {return {type:'ln', d:d, v:Math.log(d[2].v)}}  %}

# I use `float` to basically mean a number with a decimal point in it
float ->
      int "." int   {% function(d) {return {v:parseFloat(d[0].v + d[1] + d[2].v)}} %}
    | int           {% function(d) {return {v:parseInt(d[0].v)}} %}

int -> [0-9]:+        {% function(d) {return {v:d[0].join("")}} %}

# Whitespace. The important thing here is that the postprocessor
# is a null-returning function. This is a memory efficiency trick.
_ -> [\s]:*     {% function(d) {return null } %}












