function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "volume/" + s : s.substring(0, index) + "/volume/" + s.substring(index + 1);
    return path;
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
        top: "55",
        left: "4%",
        width: "80%"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "muteButton",
    style: {
        image: "/images/volume/mute.png",
        height: "32",
        width: "32",
        top: "56",
        left: "85%"
    }
} ];