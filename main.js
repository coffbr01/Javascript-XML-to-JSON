// TODO: the design is flawed. perhaps make child json objects first, then traverse xml children
xmlToJson = function(xml, json) {
    if (json === undefined) {
        json = {};
    }

    if (xml.data === undefined) {
        var dataStructure = {};
        if (json[xml.nodeName] === undefined) {
            json[xml.nodeName] = dataStructure;
        }
        else if (typeof(json.length) === "undefined") {
            var old = json[xml.nodeName];
            json = [];
            json.push(old);
            json.push(dataStructure);
        }
        else {
            json.push(dataStructure);
        }

        var i = 0;
        for (; i < xml.childNodes.length; i++) {
            xmlToJson(xml.childNodes[i], dataStructure);
        }
    }
    else if (xml.data.trim() !== "") {
        json.data = xml.data;
    }

    return json;
};

