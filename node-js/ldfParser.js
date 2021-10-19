const fs = require('fs')
const allSignals_regExpr = /(?!Signals\s?{\s+)([\w\d]+:\s\d+,((\s\d+)|(\s{[\d,]+})),\s[\w\d\s,]+;\s+)+(?!\s+})/gm;
const signal_regExpr = /([\w\d]+:\s\d+,((\s\d+)|(\s{[\d,]+})),\s[\w\d\s,]+)/;
const splitter_regExpr = /;\s+/;

fs.readFile('E3_1_2_Premium_HCP4_LIN23_KMatrix_SignalSuffix_V12.03.35F_20200930_AL.ldf', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  let allSignals_String = data.match(allSignals_regExpr).pop();

  const allSignals_arr = allSignals_String.split(splitter_regExpr);

  console.log("Signals..");

  let allSignals_arr_filtered = allSignals_arr.filter(elem => elem.match(signal_regExpr));

  allSignals_arr_filtered.forEach( (elem, index) =>{
      console.log(`${index}: ${elem}`);
  })
})

//signalName, signalSize, initValue, publishedBy, [subscribedBy]x

class LdfParser {
  constructor(){
  }
  open(){}
  
}