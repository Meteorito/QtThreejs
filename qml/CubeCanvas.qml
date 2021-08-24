import QtQuick 2.0
import QtCanvas3D 1.1
import QtQml 2.12

import "qrc:/Cube.js" as GLCODE
Canvas3D {
    id:canvas3D
    property Item textureSource
    property double xRotAnim: 60
    property double yRotAnim: 0
    property double zRotAnim: 0
    property double distannce: 2
    property double cameraAngle: 0
    property string caseColor: "#eeeeee"
    onInitializeGL:GLCODE.initializeGL(canvas3D)
    onPaintGL: GLCODE.paintGL()

}
