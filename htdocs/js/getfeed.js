
// set world to buienradar
// weather is grow food
// Meetstation Groningen ,Luchtvochtigheid: 50% ,Temperatuur: 13.7 ,Zicht: 23600 ,Windrichting: OZO-4

var XHR = XMLHttpRequest
if (!XHR) throw new Error('missing XMLHttpRequest')
//XHR.open("get", "https://data.buienradar.nl/1.0/feed/xml", true);

// XHR.status

console.log(XHR);
/*
var weather = new XMLHttpRequest();
weather.open("GET", "https://data.buienradar.nl/1.0/feed/xml", false);
//weather.send();
var xml = weather.responseXML;
var now = xml.getElementsByTagName("weerstation");
console.log(now);

var users = xml.getElementsByTagName("weerstation");
for(var i = 0; i < users.length; i++) {
    var user = users[i];
    var names = user.getElementsByTagName("name");
    for(var j = 0; j < names.length; j++) {
        alert(names[j].childNodes[0].nodeValue);
    }
}
*/
