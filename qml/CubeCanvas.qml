import QtQuick 2.0
import QtCanvas3D 1.1
import QtQml 2.12

import "qrc:/Cube.js" as GLCODE
Canvas3D {
    id:canvas3D
    property Item textureSource
    property double xRotAnim: 0
    property double yRotAnim: 0
    property double zRotAnim: 0
    property double distannce: 2
    property double cameraAngle: 0
    property string caseColor: "#eeeeee"
    onInitializeGL:GLCODE.initializeGL(canvas3D)
    onPaintGL: GLCODE.paintGL(canvas3D)
    MouseArea{
        property point startPos: "0,0"
        property point endPos: "0,0"
        anchors.fill: parent
        onClicked: {
            startPos.x = mouseX
            startPos.y = mouseY
        }

        onPositionChanged: {
            endPos.x = mouseX
            endPos.y = mouseY
            var incX = endPos.x - startPos.x
            var incY = endPos.y - startPos.y
            startPos = endPos
            canvas3D.xRotAnim = (incX>0?1:-1)*30
            canvas3D.yRotAnim =(incY>0?1:-1)*30

        }

        onReleased: {
            canvas3D.xRotAnim = 0
            canvas3D.yRotAnim = 0
        }
    }

}
