import { GUICanvasElement } from "./GUICanvas.element";
import { GUIContainerElement } from "./GUIContainer.element";
import { GUIImageElement } from "./GUIImage.element";
import { GUITextElement } from "./GUIText.element";
declare global {
  interface HTMLElementTagNameMap {
    "gui-canvas": GUICanvasElement;
    "gui-container": GUIContainerElement;
    "gui-image": GUIImageElement;
    "gui-text": GUITextElement;
  }
}
