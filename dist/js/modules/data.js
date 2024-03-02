export const trailerLinks = [
  'https://www.youtube.com/embed/ByAn8DF8Ykk',
  'https://www.youtube.com/embed/aVclaOeuPmM',
  'https://www.youtube.com/embed/xEmlE9Ianuo',
];

export const numOfTrailers = trailerLinks.length;

export const autoplayParam = '?&autoplay=1&mute=1';

export const imgVideoLink = ['https://img.youtube.com/vi/', '/maxresdefault.jpg'];

export const iframeStyle = `
  <style>
    * {
      padding: 0;
      margin: 0;
      overflow: hidden;
    }
    
    html, body {
      width: 100%;
      height: 100%;
    }
    
    img, svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }

    #button {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
      width: 64px;
      height: 64px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
    
    @media (max-width: 900px) {
      #button {
        width: 36px;
        height: 36px
      }
    }
  </style>
`;

export const iframeSvg = `
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#FF3D00"/>
    <path d="M42.5 31.134C43.1667 31.5189 43.1667 32.4811 42.5
      32.866L27.5 41.5263C26.8333 41.9112 26 41.4301 26 
      40.6603V23.3397C26 22.5699 26.8333 22.0888 27.5 22.4737L42.5
      31.134Z" 
      fill="white"
    />
  </svg>
`;
