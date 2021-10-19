// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "start", "symbols": ["ldf"], "postprocess": 
        function(data){
          return data[0]
        }
          },
    {"name": "ldf", "symbols": ["header_lin_description_file", "_", "header_protocol_version", "_", "header_language_version", "_", "header_speed", "_", "nodes", "_"], "postprocess": 
        function(data){
          return {
            header: data[0],
            protocol_version: data[2],
            language_version: data[4],
            speed: data[6],
            nodes: data[8]
          }
        }
          },
    {"name": "header_lin_description_file$string$1", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"N"}, {"literal":"_"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}, {"literal":"c"}, {"literal":"r"}, {"literal":"i"}, {"literal":"p"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"_"}, {"literal":"f"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "header_lin_description_file", "symbols": ["header_lin_description_file$string$1", {"literal":";"}], "postprocess": 
        function(data){
          return data[0]
        }
          },
    {"name": "header_protocol_version$string$1", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"N"}, {"literal":"_"}, {"literal":"p"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"o"}, {"literal":"c"}, {"literal":"o"}, {"literal":"l"}, {"literal":"_"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "header_protocol_version", "symbols": ["header_protocol_version$string$1", "_", {"literal":"="}, "_", {"literal":"\""}, "ldf_float", {"literal":"\""}, {"literal":";"}], "postprocess": 
        function(data){
          return data[5]
        }
          },
    {"name": "header_language_version$string$1", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"N"}, {"literal":"_"}, {"literal":"l"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"u"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}, {"literal":"_"}, {"literal":"v"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "header_language_version", "symbols": ["header_language_version$string$1", "_", {"literal":"="}, "_", {"literal":"\""}, "ldf_float", {"literal":"\""}, {"literal":";"}], "postprocess": 
        function(data){
          return data[5]
        }
          },
    {"name": "header_speed$string$1", "symbols": [{"literal":"L"}, {"literal":"I"}, {"literal":"N"}, {"literal":"_"}, {"literal":"s"}, {"literal":"p"}, {"literal":"e"}, {"literal":"e"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "header_speed$string$2", "symbols": [{"literal":"k"}, {"literal":"b"}, {"literal":"p"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "header_speed", "symbols": ["header_speed$string$1", "_", {"literal":"="}, "_", "ldf_float", "_", "header_speed$string$2", {"literal":";"}], "postprocess": 
        function(data){
          return data[4]
        }
          },
    {"name": "nodes$string$1", "symbols": [{"literal":"N"}, {"literal":"o"}, {"literal":"d"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nodes", "symbols": ["nodes$string$1", "_", {"literal":"{"}, "_", "nodes_master", "_", "nodes_slaves", "_", {"literal":"}"}], "postprocess": 
        function(data){
          return {
            master:data[4],
            slave:data[6]
          }
        }
          },
    {"name": "nodes_master$string$1", "symbols": [{"literal":"M"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nodes_master$string$2", "symbols": [{"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nodes_master$string$3", "symbols": [{"literal":"m"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nodes_master", "symbols": ["nodes_master$string$1", "_", "ldf_identifier", {"literal":","}, "_", "ldf_float", "_", "nodes_master$string$2", "_", {"literal":","}, "_", "ldf_float", "_", "nodes_master$string$3", "_", {"literal":";"}], "postprocess": 
        function(data) {
          return {
            name:data[2],
            timebase: data[5],
            jitter: data[11]
          }
        } 
          },
    {"name": "nodes_slaves$string$1", "symbols": [{"literal":"S"}, {"literal":"l"}, {"literal":"a"}, {"literal":"v"}, {"literal":"e"}, {"literal":"s"}, {"literal":":"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "nodes_slaves$ebnf$1", "symbols": []},
    {"name": "nodes_slaves$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "_", "ldf_identifier"]},
    {"name": "nodes_slaves$ebnf$1", "symbols": ["nodes_slaves$ebnf$1", "nodes_slaves$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "nodes_slaves", "symbols": ["nodes_slaves$string$1", "_", "ldf_identifier", "nodes_slaves$ebnf$1", {"literal":";"}], "postprocess": 
        function(data) {
          let data_filtered = [];
          data_filtered.push(data[2]);
          for (const element of data[3]){
            data_filtered.push(element[2])
          }
          return data_filtered;
        }
        },
    {"name": "ldf_float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return parseFloat(d[0].v + d[1] + d[2].v)}},
    {"name": "ldf_float", "symbols": ["int"], "postprocess": function(d) {return parseInt(d[0].v)}},
    {"name": "ldf_identifier$ebnf$1", "symbols": [/[\w]/]},
    {"name": "ldf_identifier$ebnf$1", "symbols": ["ldf_identifier$ebnf$1", /[\w]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ldf_identifier", "symbols": ["ldf_identifier$ebnf$1"], "postprocess": function(d) {return d[0].join("")}},
    {"name": "main", "symbols": ["_", "AS", "_"], "postprocess": function(d) {return {type:'main', d:d, v:d[1].v}}},
    {"name": "P", "symbols": [{"literal":"("}, "_", "AS", "_", {"literal":")"}], "postprocess": function(d) {return {type:'P', d:d, v:d[2].v}}},
    {"name": "P", "symbols": ["N"], "postprocess": id},
    {"name": "E", "symbols": ["P", "_", {"literal":"^"}, "_", "E"], "postprocess": function(d) {return {type:'E', d:d, v:Math.pow(d[0].v, d[4].v)}}},
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"*"}, "_", "E"], "postprocess": function(d) {return {type: 'M', d:d, v:d[0].v*d[4].v}}},
    {"name": "MD", "symbols": ["MD", "_", {"literal":"/"}, "_", "E"], "postprocess": function(d) {return {type: 'D', d:d, v:d[0].v/d[4].v}}},
    {"name": "MD", "symbols": ["E"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"+"}, "_", "MD"], "postprocess": function(d) {return {type:'A', d:d, v:d[0].v+d[4].v}}},
    {"name": "AS", "symbols": ["AS", "_", {"literal":"-"}, "_", "MD"], "postprocess": function(d) {return {type:'S', d:d, v:d[0].v-d[4].v}}},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "N", "symbols": ["float"], "postprocess": id},
    {"name": "N$string$1", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$1", "_", "P"], "postprocess": function(d) {return {type:'sin', d:d, v:Math.sin(d[2].v)}}},
    {"name": "N$string$2", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$2", "_", "P"], "postprocess": function(d) {return {type:'cos', d:d, v:Math.cos(d[2].v)}}},
    {"name": "N$string$3", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$3", "_", "P"], "postprocess": function(d) {return {type:'tan', d:d, v:Math.tan(d[2].v)}}},
    {"name": "N$string$4", "symbols": [{"literal":"a"}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$4", "_", "P"], "postprocess": function(d) {return {type:'asin', d:d, v:Math.asin(d[2].v)}}},
    {"name": "N$string$5", "symbols": [{"literal":"a"}, {"literal":"c"}, {"literal":"o"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$5", "_", "P"], "postprocess": function(d) {return {type:'acos', d:d, v:Math.acos(d[2].v)}}},
    {"name": "N$string$6", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$6", "_", "P"], "postprocess": function(d) {return {type:'atan', d:d, v:Math.atan(d[2].v)}}},
    {"name": "N$string$7", "symbols": [{"literal":"p"}, {"literal":"i"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$7"], "postprocess": function(d) {return {type:'pi', d:d, v:Math.PI}}},
    {"name": "N", "symbols": [{"literal":"e"}], "postprocess": function(d) {return {type:'e', d:d, v:Math.E}}},
    {"name": "N$string$8", "symbols": [{"literal":"s"}, {"literal":"q"}, {"literal":"r"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$8", "_", "P"], "postprocess": function(d) {return {type:'sqrt', d:d, v:Math.sqrt(d[2].v)}}},
    {"name": "N$string$9", "symbols": [{"literal":"l"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "N", "symbols": ["N$string$9", "_", "P"], "postprocess": function(d) {return {type:'ln', d:d, v:Math.log(d[2].v)}}},
    {"name": "float", "symbols": ["int", {"literal":"."}, "int"], "postprocess": function(d) {return {v:parseFloat(d[0].v + d[1] + d[2].v)}}},
    {"name": "float", "symbols": ["int"], "postprocess": function(d) {return {v:parseInt(d[0].v)}}},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": function(d) {return {v:d[0].join("")}}},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null }}
]
  , ParserStart: "start"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
