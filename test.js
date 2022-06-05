const patterns = require('./patterns');


function matchLog(text, match) {
    console.log(text.match(match))
}
matchLog('1234', patterns.naturalNumbers)
matchLog('123.12', patterns.naturalNumbers)
matchLog('-234', patterns.naturalNumbers)
matchLog('a1', patterns.naturalNumbers)
matchLog('hello', patterns.naturalNumbers)




