import { Player } from '../player';
import { Disposable } from '../types';
export declare class Rect implements Disposable {
    private el;
    private player?;
    private rect;
    constructor(el: HTMLElement, player?: Player | undefined);
    get width(): number;
    get height(): number;
    get x(): number;
    get y(): number;
    private tryUpdate;
    update: () => void;
    dispose(): void;
}
