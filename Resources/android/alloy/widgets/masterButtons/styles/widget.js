function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "masterButtons/" + s : s.substring(0, index) + "/masterButtons/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0005,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.9001,
    key: "Window",
    style: {
        backgroundColor: "#CBCBCB"
    }
}, {
    isClass: true,
    priority: 10000.9002,
    key: "container",
    style: {
        navBarHidden: true,
        fullscreen: true
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "onButton",
    style: {
        backgroundImage: "/images/masterButtons/on.png",
        height: "48",
        width: "48",
        top: "15",
        left: "68%"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "offButton",
    style: {
        backgroundImage: "/images/masterButtons/off.png",
        height: "48",
        width: "48",
        top: "16",
        left: "87%"
    }
} ];