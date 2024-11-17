import { FC } from 'react';
import './cursor.scss';
interface CursorProps {
    isGelly?: boolean;
    animationDuration?: number;
    animationEase?: string | gsap.EaseFunction | undefined;
    gellyAnimationAmount?: number;
    gellyAnimationDuration?: number;
    stickAnimationAmount?: number;
    stickAnimationDuration?: number;
    stickAnimationEase?: string | gsap.EaseFunction | undefined;
    magneticAnimationAmount?: number;
    magneticAnimationDuration?: number;
    magneticAnimationEase?: string | gsap.EaseFunction | undefined;
    colorAnimationEase?: string | gsap.EaseFunction | undefined;
    colorAnimationDuration?: number;
    backgroundImageAnimationEase?: string | gsap.EaseFunction | undefined;
    backgroundImageAnimationDuration?: number;
    sizeAnimationEase?: string | gsap.EaseFunction | undefined;
    sizeAnimationDuration?: number;
    textAnimationEase?: string | gsap.EaseFunction | undefined;
    textAnimationDuration?: number;
    cursorSize?: number;
    cursorBackgrounColor?: string;
    exclusionBackgroundColor?: string;
    cursorInnerColor?: string;
}
export declare const Cursor: FC<CursorProps>;
export {};
