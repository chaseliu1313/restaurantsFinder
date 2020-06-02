import styled, { css, keyframes } from 'styled-components';
import re1 from '../resource/imgs/re1.jpg';
import re2 from '../resource/imgs/re2.jpg';
import re3 from '../resource/imgs/re3.jpg';
import re4 from '../resource/imgs/re4.jpg';
import re5 from '../resource/imgs/re5.jpg';
import re6 from '../resource/imgs/re6.jpg';
import re7 from '../resource/imgs/re7.jpg';
import re8 from '../resource/imgs/re8.jpg';
import re9 from '../resource/imgs/re9.jpg';
import re10 from '../resource/imgs/re10.jpg';
import re11 from '../resource/imgs/re11.jpg';
import re12 from '../resource/imgs/re12.jpg';
import re13 from '../resource/imgs/re13.jpg';
import re14 from '../resource/imgs/re14.jpg';
import re15 from '../resource/imgs/re15.jpg';
import re16 from '../resource/imgs/re16.jpg';
import re17 from '../resource/imgs/re7.jpg';
import re18 from '../resource/imgs/re18.jpg';
import re19 from '../resource/imgs/re19.jpg';
import re20 from '../resource/imgs/re20.jpg';

//colors:
export const color_bg = '#071e3d';
export const color_bg2 = '#e2f3f5';
export const color_bg3 = '#364f6b';
export const color_se = '#1f4287';
export const color_fr = '#278ea5';
export const color_pr = '#21e6c1';
export const color_er = '#ff304f';
export const color_lg = '#17b978';

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const Pa = styled.p``;

//media queries
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

//enter  animations

export const enterAni = keyframes`
0%{
    opacity:0%;
    transform: translateY(-100vh) ;
   
   
}
50%{
    opacity:70%;
    transform: translateY(-50vh)  ;
}
100%{
    opacity:100%;
    transform: translateY(0) ;
}

`;

export const enterAni2 = keyframes`
0%{
    opacity:0%;
    transform: scale(0.7) ;
    
   
}
50%{
    opacity:30%;
    transform: scale(0.9)  ;
}
100%{
    opacity:100%;
    transform: scale(1) ;
    
}

`;

export const ModalEnterAni = keyframes`
0%{
  opacity:0%;
  transform: translateY(100vh) scale(0) ;
   visibility: visible;
 
}
50%{
  opacity:70%;
  transform: translateY(50vh) scale(1) ;
}
100%{
  opacity:100%;
  transform: translateY(0) scale(1) ;
}

`;

export const ModalExitAni = keyframes`
0%{
  opacity:100%;
  transform: translateY(0)  scale(1);
 
}
50%{
  opacity:70%;
  transform: translateY(50vh) scale(1)  ;
}
100%{
  opacity:0%;
  transform: translateY(100vh) scale(0) ;
  visibility: hidden;
}

`;

export const shadow_light =
  'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);';
export const shadow_hover =
  ' box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);';
export const shadow_transit =
  'transition: all 0.3s cubic-bezier(.25,.8,.25,1);';
export const shadow_heavy =
  'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);';

//random image generator
export const getRandomPic = (min = 0, max = 19) => {
  const pics = [
    re1,
    re2,
    re3,
    re4,
    re5,
    re6,
    re7,
    re8,
    re9,
    re10,
    re11,
    re12,
    re13,
    re14,
    re15,
    re16,
    re17,
    re18,
    re19,
    re20,
  ];
  min = Math.ceil(min);
  max = Math.floor(max);
  let index = Math.floor(Math.random() * (max - min + 1)) + min;
  return pics[index];
};
