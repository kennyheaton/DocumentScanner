import { Component, ReactNode, createElement } from "react";
import { Scanner } from "./components/Scanner";
import { DocumentScannerProps } from "../typings/DocumentScannerProps";
import { Style } from "./utils/common";

export class DocumentScanner extends Component<DocumentScannerProps<Style>> {
    render(): ReactNode {
        return (
            <Scanner
                overlayColor={this.props.overlayColor || 'rgba(255, 130, 0, 0.7)'}
                detectionCountBeforeCapture={this.props.detectionCountBeforeCapture || 5}
                detectionRefreshRateInMS={this.props.detectionRefreshRateInMS || 50}
                enableTorch={this.props.enableTorch || false}
                useFrontCam={this.props.useFrontCam || false}
                brightness={this.props.brightness ? parseFloat(this.props.brightness.toPrecision(5)) : 0.0}
                saturation={this.props.saturation ? parseFloat(this.props.saturation.toPrecision(5)) : 0.0}
                contrast={this.props.contrast ? parseFloat(this.props.contrast.toPrecision(5)) : 0.0}
                quality={this.props.quality ? parseFloat(this.props.quality.toPrecision(5)) : 0.0}
                useBase64={this.props.useBase64 || false}
                saveInAppDocument={this.props.saveInAppDocument || false}
                captureMultiple={this.props.captureMultiple || false}
            />
        );
    }
}
