import QtQuick 2.12
import QtQuick.Controls 2.12
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
        layer.textureMirroring: ShaderEffectSource.NoMirroring
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
            gradient: Gradient {
                GradientStop {
                    position: 0
                    color: "#92fe9d"
                }

                GradientStop {
                    position: 1
                    color: "#00c9ff"
                }
            }
            color: "#92fe9d"
        }
        Label{
            anchors.centerIn: cube
            text: "上海航翼"
            layer.textureSize.height: 5
            layer.textureSize.width: 5
            layer.samples: 4
            layer.smooth: true
            layer.textureMirroring: ShaderEffectSource.MirrorHorizontally
            scale: 1
            rotation: 0
        }

    }
    CubeCanvas{
        clip: false
        x:root.width/2
        y:root.height/2
        width:640
        height: 480
        textureSource: cube
    }
}

/*##^##
Designer {
    D{i:0;formeditorZoom:1.5}
}
##^##*/
