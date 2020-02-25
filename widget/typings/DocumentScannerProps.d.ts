/**
 * This file was generated from DocumentScanner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface DocumentScannerProps<Style> extends CommonProps<Style> {
    overlayColor: string;
    detectionCountBeforeCapture: number;
    enableTorch: boolean;
    detectionRefreshRateInMS: number;
    useFrontCam: boolean;
    brightness: BigJs.Big;
    saturation: BigJs.Big;
    contrast: BigJs.Big;
    quality: BigJs.Big;
    useBase64: boolean;
    saveInAppDocument: boolean;
    captureMultiple: boolean;
}
