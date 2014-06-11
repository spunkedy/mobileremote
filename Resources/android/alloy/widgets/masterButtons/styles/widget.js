function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "masterButtons/" + s : s.substring(0, index) + "/masterButtons/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
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
    priority: 100000.0005,
    key: "buttonHoler",
    style: {
        top: 0,
        left: 0,
        layout: "horizontal",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isId: true,
    priority: 100000.0006,
    key: "onButton",
    style: {
        left: "20dp",
        backgroundImage: "/images/masterButtons/on.png",
        height: "96",
        width: "96"
    }
}, {
    isId: true,
    priority: 100000.0007,
    key: "offButton",
    style: {
        backgroundImage: "/images/masterButtons/off.png",
        left: "20dp",
        height: "96",
        width: "96"
    }
} ];