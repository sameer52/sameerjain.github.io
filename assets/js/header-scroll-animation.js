// js/headerScroll.js

import { getHeader } from './dom.js';

export const handleScroll = () => {
  const header = getHeader();
  if (!header) return;

  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

// window.addEventListener('scroll', function() {
//     const header = document.getElementById('header-nav');
//     if (window.scrollY > 50) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });
