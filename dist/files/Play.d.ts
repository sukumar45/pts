import { Group, Bound } from "./Pt";
import { ITempoListener, ITempoResponses } from "./Types";
import { ISoundAnalyzer, SoundType, PtLike, IPlayer } from "./Types";
export declare class Tempo implements IPlayer {
    protected _bpm: number;
    protected _ms: number;
    protected _listeners: {
        [key: string]: ITempoListener;
    };
    protected _listenerInc: number;
    animateID: string;
    constructor(bpm: number);
    static fromBeat(ms: number): Tempo;
    get bpm(): number;
    set bpm(n: number);
    get ms(): number;
    set ms(n: number);
    protected _createID(listener: ITempoListener | Function): string;
    every(beats: number | number[]): ITempoResponses;
    track(time: any): void;
    stop(name: string): void;
    animate(time: any, ftime: any): void;
    resize(bound: Bound, evt?: Event): void;
    action(type: string, px: number, py: number, evt: Event): void;
}
export declare class Sound {
    private _type;
    _ctx: AudioContext;
    _node: AudioNode;
    _outputNode: AudioNode;
    _stream: MediaStream;
    _source: HTMLMediaElement;
    _buffer: AudioBuffer;
    analyzer: ISoundAnalyzer;
    protected _playing: boolean;
    protected _timestamp: number;
    constructor(type: SoundType);
    static from(node: AudioNode, ctx: AudioContext, type?: SoundType, stream?: MediaStream): Sound;
    static load(source: HTMLMediaElement | string, crossOrigin?: string): Promise<Sound>;
    static loadAsBuffer(url: string): Promise<Sound>;
    protected createBuffer(buf: AudioBuffer): this;
    static generate(type: OscillatorType, val: number | PeriodicWave): Sound;
    protected _gen(type: OscillatorType, val: number | PeriodicWave): Sound;
    static input(constraint?: MediaStreamConstraints): Promise<Sound>;
    get ctx(): AudioContext;
    get node(): AudioNode;
    get outputNode(): AudioNode;
    get stream(): MediaStream;
    get source(): HTMLMediaElement;
    get buffer(): AudioBuffer;
    set buffer(b: AudioBuffer);
    get type(): SoundType;
    get playing(): boolean;
    get progress(): number;
    get playable(): boolean;
    get binSize(): number;
    get sampleRate(): number;
    get frequency(): number;
    set frequency(f: number);
    connect(node: AudioNode): this;
    setOutputNode(outputNode: AudioNode): this;
    removeOutputNode(): this;
    analyze(size?: number, minDb?: number, maxDb?: number, smooth?: number): this;
    protected _domain(time: boolean): Uint8Array;
    protected _domainTo(time: boolean, size: PtLike, position?: PtLike, trim?: number[]): Group;
    timeDomain(): Uint8Array;
    timeDomainTo(size: PtLike, position?: PtLike, trim?: number[]): Group;
    freqDomain(): Uint8Array;
    freqDomainTo(size: PtLike, position?: PtLike, trim?: number[]): Group;
    reset(): this;
    start(timeAt?: number): this;
    stop(): this;
    toggle(): this;
}
