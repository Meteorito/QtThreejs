import QtQuick 2.12
import QtQuick.Window 2.12

Window {
    id: root
    width: 640*2
    height: 480*2
    visible: true
    title: qsTr("Hello World")
    Item {
        id: cube
        height:100
        layer.enabled: true
        layer.smooth: true
        width: 100
        transform: [
            Scale{
                origin.y: root.height / 2
                origin.x: root.width / 2
                yScale: 1
                xScale: 1
            }
        ]
        Rectangle{
            anchors.fill: cube
            color: "green"
        }
    }
    CubeCanvas{
        clip: false
        x:root.width/2
        y:root.height/2
        width: root.width/2
        height: root.height/2
        textureSource: cube
    }
}
