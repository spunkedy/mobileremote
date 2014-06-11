function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "masterBar/" + s : s.substring(0, index) + "/masterBar/" + s.substring(index + 1);
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
    priority: 100000.0008,
    key: "controlView",
    style: {
        layout: "vertical",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        top: 0,
        left: 0
    }
} ];