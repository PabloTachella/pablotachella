import html from './assets/images/software_development/html5.png';
import css from './assets/images/software_development/css3.png';
import androidStudio from './assets/images/software_development/android-studio.png';
import bootstrap from './assets/images/software_development/bootstrap.png';
import firebase from './assets/images/software_development/firebase.png';
import git from './assets/images/software_development/git.png';
import github from './assets/images/software_development/github.png';
import java from './assets/images/software_development/java.png';
import js from './assets/images/software_development/js.png';
import mysql from './assets/images/software_development/mysql.png';
import nodejs from './assets/images/software_development/nodejs.png';
import reactjs from './assets/images/software_development/reactjs.png';
import redux from './assets/images/software_development/redux.png';
import ts from './assets/images/software_development/ts.png';
import webpack from './assets/images/software_development/webpack.png';

import illustrator from './assets/images/software_tools/illustrator.png';
import office from './assets/images/software_tools/office.png';
import photoshop from './assets/images/software_tools/photoshop.png';
import wordpress from './assets/images/software_tools/wordpress.png';

import email from './assets/images/footer/email.png';
import whatsapp from './assets/images/footer/whatsapp.png';

import platziConfMerch from './assets/images/screenshots/platzi-conf-merch.png';
import lazyLoading from './assets/images/screenshots/lazy-loading.png';
import calculatorApp from './assets/images/screenshots/calculator-app.png';

const developer = 'Pablo Tachella';

export default {
  softwareDevelopmentElements: [
    { src: html, alt: 'html5', text: 'HTML' },
    { src: webpack, alt: 'webpack', text: 'Webpack' },
    { src: firebase, alt: 'firebase', text: 'Firebase' },
    { src: css, alt: 'css3', text: 'CSS' },
    { src: redux, alt: 'redux', text: 'Redux' },
    { src: nodejs, alt: 'nodejs', text: 'Node' },
    { src: js, alt: 'javascript', text: 'JavaScript' },
    { src: bootstrap, alt: 'bootstrap', text: 'Bootstrap' },
    { src: java, alt: 'java', text: 'Java' },
    { src: ts, alt: 'typescript', text: 'TypeScript' },
    { src: git, alt: 'git', text: 'Git' },
    { src: mysql, alt: 'mysql', text: 'MySQL' },
    { src: reactjs, alt: 'reactjs', text: 'React' },
    { src: github, alt: 'github', text: 'GitHub' },
    { src: androidStudio, alt: 'android-studio', text: 'Andorid Studio' },
  ],
  softwareToolsElements: [
    { src: photoshop, alt: 'photoshop', text: 'Photoshop' },
    { src: illustrator, alt: 'illustrator', text: 'Illustrator' },
    { src: office, alt: 'office', text: 'Office' },
    { src: wordpress, alt: 'wordpress', text: 'Wordpress' },
  ],
  footerElements: [
    { src: email, alt: 'email', link: 'pablotachella95@gmail.com' },
    { src: whatsapp, alt: 'whatsapp', link: 'https://walink.co/51a4ea' },
    { src: github, alt: 'github', link: 'https://github.com/PabloTachella' },
  ],
  projects: [
    {
      title: 'PLATZI CONF MERCH',
      src: platziConfMerch,
      description:
        'Este proyecto es una PWA (progresive web aplication) de una tienda online con productos de la Platzi-Conf, cuenta con una integración con Paypal y Google Maps. Deploy automatizado con GitHub Actions.',
      platform: 'Web/Movile/Desktop',
      category: 'Tienda',
      developer: developer,
      technologies: [
        'HTML',
        'CSS',
        'JS',
        'React',
        'Webpack',
        'Firebase',
        'Helmet',
      ],
      urlSite: 'https://platzi-conf-merch-bb193.web.app/',
      urlCode: 'https://github.com/PabloTachella/platzi-conf-merch',
    },
    {
      title: 'LAZY LOADING',
      src: lazyLoading,
      description:
        'En esta Landing Page podrás, mediante un botón, añadir nodos al DOM. Dichos nodos se agregaran inmediatamente, pero su contenido solo se cargará cuando el nodo aparezca en el viewport al hacer scroll.',
      platform: 'Web/Movile',
      category: 'Optimización web',
      developer: developer,
      technologies: ['HTML', 'CSS', 'JS'],
      urlSite: 'https://pablotachella.github.io/lazy_loading/',
      urlCode: 'https://github.com/PabloTachella/lazy_loading',
    },
    {
      title: 'CALCULATOR APP',
      src: calculatorApp,
      description:
        'Esta es una solución al desafío de aplicación de Calculadora en Frontend Mentor, cuenta con 3 temas o paletas de colores, el objetivo era replicar el diseño dado tanto web como para movil.',
      platform: 'Web/Movile',
      category: 'Calculadora',
      developer: developer,
      technologies: ['HTML', 'CSS', 'JS'],
      urlSite: 'https://pablotachella.github.io/calculator-app-main/',
      urlCode: 'https://github.com/PabloTachella/calculator-app-main',
    },
  ],
};
