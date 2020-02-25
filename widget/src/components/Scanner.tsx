import { Component, ReactNode, createElement } from "react";
import { View  } from "react-native";

import DocumentScanner from "react-native-document-scanner";

// https://github.com/Michaelvilleneuve/react-native-document-scanner

export interface ScannerProps {
    overlayColor: string;
    detectionCountBeforeCapture: number;
    detectionRefreshRateInMS: number;
    enableTorch: boolean;
    useFrontCam: boolean;
    brightness: number;
    saturation: number;
    contrast: number;
    quality: number;
    useBase64: boolean;
    saveInAppDocument: boolean;
    captureMultiple: boolean;
}

export class Scanner extends Component<ScannerProps> {
    state: {
        stableCounter: number,
        lastDetectionType: number,
        image: string,
    }

    constructor(props: ScannerProps) {
        super(props);
        this.state = {
            stableCounter: 0,
            lastDetectionType: 0,
            image: '',
        };
    } 

    render(): ReactNode {
        const {
            overlayColor,
            detectionCountBeforeCapture,
            detectionRefreshRateInMS,
            enableTorch,
            useFrontCam,
            brightness,
            saturation,
            contrast,
            quality,
            useBase64,
            saveInAppDocument,
            captureMultiple,
        } = this.props;

        return (
            <View>
                <DocumentScanner
                    useBase64={useBase64}
                    saveInAppDocument={saveInAppDocument}
                    overlayColor={overlayColor}
                    enableTorch={enableTorch}
                    brightness={brightness}
                    saturation={saturation}
                    contrast={contrast}
                    quality={quality}
                    captureMultiple={captureMultiple}
                    useFrontCam={useFrontCam}
                    detectionCountBeforeCapture={detectionCountBeforeCapture}
                    detectionRefreshRateInMS={detectionRefreshRateInMS}
                    onPictureTaken={data =>
                        this.setState({
                            image: data.croppedImage,
                            initialImage: data.initialImage,
                            rectangleCoordinates: data.rectangleCoordinates
                        })
                    }
                    onRectangleDetect={({ stableCounter, lastDetectionType }) =>
                        this.setState({ stableCounter, lastDetectionType })
                    }
                    onPermissionsDenied={() => console.log("Permissions Denied")}
                />
            </View>
        );
    }
}
