function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "volume/" + s : s.substring(0, index) + "/volume/" + s.substring(index + 1);
    return path;
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
    priority: 100000.0002,
    key: "VolumeView",
    style: {
        top: 0,
        left: 0,
        layout: "horizontal",
        width: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "volumeSlider",
    style: {
        left: "2%",
        width: "83%"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "muteButton",
    style: {}
} ];