const patterns = require('./patterns');


function matchLog(text, match) {
    console.log(text, ">>>", text.match(match))
}

function log(text) {
    console.log('\x1b[33m%s\x1b[0m', text);
}

log("naturalNumbers")
matchLog('1234', patterns.naturalNumbers)
matchLog('123.12', patterns.naturalNumbers)
matchLog('-898.17', patterns.naturalNumbers)
matchLog('-234', patterns.naturalNumbers)
matchLog('a1', patterns.naturalNumbers)
matchLog('hello', patterns.naturalNumbers)
matchLog('Hi', patterns.naturalNumbers)

log("wholeNumbers")
matchLog('1234', patterns.wholeNumbers);
matchLog('123.12', patterns.wholeNumbers);
matchLog('-898.17', patterns.wholeNumbers)
matchLog('-234', patterns.wholeNumbers);
matchLog('a1', patterns.wholeNumbers);
matchLog('hello', patterns.wholeNumbers)
matchLog('Hi', patterns.wholeNumbers)

log("positiveDecimalNumbers");
matchLog('1234', patterns.positiveDecimalNumbers);
matchLog('123.12', patterns.positiveDecimalNumbers);
matchLog('-898.17', patterns.positiveDecimalNumbers);
matchLog('-234', patterns.positiveDecimalNumbers);
matchLog('a1', patterns.positiveDecimalNumbers);
matchLog('hello', patterns.positiveDecimalNumbers);
matchLog('Hi', patterns.positiveDecimalNumbers)

log("decimalNumbers");
matchLog('1234', patterns.decimalNumbers);
matchLog('123.12', patterns.decimalNumbers);
matchLog('-898.17', patterns.decimalNumbers);
matchLog('-234', patterns.decimalNumbers);
matchLog('a1', patterns.decimalNumbers);
matchLog('hello', patterns.decimalNumbers);
matchLog('Hi', patterns.decimalNumbers);