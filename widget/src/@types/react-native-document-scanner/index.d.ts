declare module 'react-native-document-scanner' {
    import { Component } from "react";

    export interface DocumentScannerProps {
        useBase64: boolean;
        saveInAppDocument: boolean;
        onPictureTaken: (data: { croppedImage: string, initialImage: string, rectangleCoordinates: { x: number, y: number } }) => void;
        overlayColor: string;
        enableTorch: boolean;
        brightness: number;
        saturation: number;
        contrast: number;
        quality: number;
        onRectangleDetect: (data: { stableCounter: number, lastDetectionType: number}) => void;
        detectionCountBeforeCapture: number;
        detectionRefreshRateInMS: number;
        onPermissionsDenied: () => void;
        captureMultiple: boolean;
        useFrontCam: boolean;
    }

    export default class DocumentScanner extends Component<DocumentScannerProps> {
        
    }
}