const patterns = require('./patterns');


function matchLog(text, match) {
    console.log(text, ">>>", text.match(match))
}

function log(text) {
    console.log('\n \x1b[33m%s\x1b[0m', text, '\n');
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

log("alphabets");
matchLog('1234', patterns.alphabets);
matchLog('a1', patterns.alphabets);
matchLog('hello world', patterns.alphabets);
matchLog('hello', patterns.alphabets);
matchLog('Hi', patterns.alphabets);
matchLog('ABC', patterns.alphabets);
matchLog('UwU', patterns.alphabets);
matchLog('example@', patterns.alphabets);
matchLog('ABC@example.com', patterns.alphabets);

log("alphanumeric");
matchLog('1234', patterns.alphanumeric);
matchLog('a1', patterns.alphanumeric);
matchLog('hello', patterns.alphanumeric);
matchLog('Hi', patterns.alphanumeric);
matchLog('ABC', patterns.alphanumeric);
matchLog('24Hours', patterns.alphanumeric);
matchLog('Apple Pie', patterns.alphanumeric);
matchLog('example@', patterns.alphanumeric);
matchLog('ABC@example.com', patterns.alphanumeric);

log("email");
matchLog('1234@', patterns.email);
matchLog('a1@example', patterns.email);
matchLog('hello@email.', patterns.email);
matchLog('Hi', patterns.email);
matchLog('ABC@example.com', patterns.email);
matchLog('example@example.', patterns.email);
matchLog('apple.pie@example.dot', patterns.email);
matchLog('apple-pie@example.dot', patterns.email);

log("dateYYYY_MM_dd");
matchLog('2000/09/09', patterns.dateYYYY_MM_dd);
matchLog('20/08/21', patterns.dateYYYY_MM_dd);
matchLog('1990-09-09', patterns.dateYYYY_MM_dd);
matchLog('15-01-1999', patterns.dateYYYY_MM_dd);
matchLog('06/11/1867', patterns.dateYYYY_MM_dd);

log("datedd_MM_YYYY");
matchLog('2000/09/09', patterns.datedd_MM_YYYY);
matchLog('20/08/21', patterns.datedd_MM_YYYY);
matchLog('1990-09-09', patterns.datedd_MM_YYYY);
matchLog('15-01-1999', patterns.datedd_MM_YYYY);
matchLog('06/11/1867', patterns.datedd_MM_YYYY);


log("time_HH_MM_SS");
matchLog('09:09:12', patterns.time_HH_MM_SS);
matchLog('20:08:43', patterns.time_HH_MM_SS);
matchLog('19:59:37', patterns.time_HH_MM_SS);
matchLog('15-01-46', patterns.time_HH_MM_SS);
matchLog('00:00:00', patterns.time_HH_MM_SS);

log("httpUrl");
matchLog('https://www.google.es/', patterns.httpUrl);
matchLog('http://nodejs.dev/', patterns.httpUrl);
matchLog('ftp://user:password@host:2000', patterns.httpUrl);
matchLog('mailto:name@email.com', patterns.httpUrl);
matchLog('file://host/path', patterns.httpUrl);
matchLog('hello', patterns.httpUrl);

log("htmlTags");
matchLog('<custom>', patterns.htmlTags);
matchLog('<h1>', patterns.htmlTags);
matchLog('<div>', patterns.htmlTags);
matchLog('hello', patterns.htmlTags);

log("ipv4");
matchLog('192.168.5.19', patterns.ipv4);
matchLog('50b2:4355:0000:0000:43c3:b23b:102a', patterns.ipv4);
matchLog('50b2:982o:0000:0000:43c3:b23b:102a', patterns.ipv4);
matchLog('1929.123.1.12', patterns.ipv4);
matchLog('hello', patterns.ipv4);

log("ipv6");
matchLog('192.168.5.19', patterns.ipv6);
matchLog('50b2:4355:0000:0000:43c3:b23b:102a', patterns.ipv6);
matchLog('50b2:982o:0000:0000:43c3:b23b:102a', patterns.ipv6);
matchLog('1929.123.1.12', patterns.ipv6);
matchLog('hello', patterns.ipv6);

log("time_HH_MM");
matchLog('192.168', patterns.time_HH_MM);
matchLog('1:29', patterns.time_HH_MM);
matchLog('hello', patterns.time_HH_MM);
matchLog('13:40', patterns.time_HH_MM);
matchLog('19:38:25', patterns.time_HH_MM);

log("password");
matchLog('123', patterns.password);
matchLog('hello123', patterns.password);
matchLog('helloWorld', patterns.password);
matchLog('3hello2world1', patterns.password);
matchLog('3hello2World1', patterns.password);