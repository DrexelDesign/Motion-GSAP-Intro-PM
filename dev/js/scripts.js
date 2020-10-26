import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {backgroundAnimation} from "./background/background.js";
import {middleBackAnimation} from "./foreground/middle-back.js";
import {catAnimation} from "./foreground/cat.js";
import {starAnimation} from "./foreground/sky.js";
//import {cloudsAnimation} from "./foreground/sky.js"

// play clouds Animation
//cloudsAnimation();

const mainTL = gsap.timeline()
mainTL.add(backgroundAnimation(),"spookyAnimation")
        .add(starAnimation(),"spookyAnimation")
        .add(middleBackAnimation(),"spookyAnimation")
        .add(catAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();

