import {gsap} from "gsap";

export function section1Animation(){
    gsap.from("#section-1 div",{duration:0.5, alpha:0, y:300});
}