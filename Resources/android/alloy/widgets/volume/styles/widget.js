function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "volume/" + s : s.substring(0, index) + "/volume/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
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
    priority: 100000.0003,
    key: "volumeSlider",
    style: {
        top: "13%",
        left: "4%",
        width: "70%"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "muteButton",
    style: {
        image: "/images/volume/mute.png",
        height: "40",
        width: "40",
        top: "12.8%",
        left: "85%"
    }
} ];