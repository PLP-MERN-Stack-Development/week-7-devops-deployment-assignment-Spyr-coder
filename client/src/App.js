import './styles.css';
import React from 'react';
import './App.css';

// Import images
import img1 from './assets/GridArt_20250509_141651242.jpg';
import img2 from './assets/GridArt_20250509_143039265.jpg';
import img3 from './assets/IMG-20250228-WA0042.jpg';
import img4 from './assets/IMG-20250508-WA0013.jpg';
import img5 from './assets/IMG-20250508-WA0014.jpg';
import img6 from './assets/IMG-20250508-WA0015.jpg';
import img7 from './assets/IMG-20250508-WA0016.jpg';
import img8 from './assets/IMG-20250508-WA0017.jpg';
import img9 from './assets/IMG-20250508-WA0019.jpg';
import img10 from './assets/IMG-20250508-WA0021.jpg';
import img11 from './assets/IMG-20250508-WA0025.jpg';
import img12 from './assets/IMG-20250508-WA0026.jpg';
import img13 from './assets/IMG-20250508-WA0027.jpg';
import img14 from './assets/IMG-20250508-WA0029.jpg';
import img15 from './assets/IMG-20250508-WA0031.jpg';
import img16 from './assets/IMG-20250508-WA0032.jpg';
import img17 from './assets/IMG-20250508-WA0034.jpg';
import img18 from './assets/IMG-20250508-WA0035.jpg';
import img19 from './assets/IMG-20250508-WA0036.jpg';
import img20 from './assets/IMG-20250508-WA0037.jpg';
import img21 from './assets/IMG-20250508-WA0039.jpg';
import img22 from './assets/IMG-20250508-WA0040.jpg';
import img23 from './assets/IMG-20250508-WA0043.jpg';
import img24 from './assets/IMG-20250508-WA0044.jpg';
import img25 from './assets/IMG-20250508-WA0045.jpg';
import img26 from './assets/IMG-20250508-WA0046.jpg';
import img27 from './assets/IMG-20250508-WA0048.jpg';
import img28 from './assets/IMG-20250508-WA0049.jpg';
import img29 from './assets/IMG_20250508_183351.jpg';
import img30 from './assets/IMG_20250508_183424.jpg';
import img31 from './assets/IMG_20250509_115405.jpg';
import img32 from './assets/IMG_20250509_115437.jpg';
import img33 from './assets/IMG_20250509_115653.jpg';
import img34 from './assets/IMG_20250509_115847.jpg';
import img35 from './assets/IMG_20250509_120053.jpg';
import img36 from './assets/IMG_20250509_120130.jpg';
import img37 from './assets/IMG_20250509_120211.jpg';
import img38 from './assets/IMG_20250509_120311.jpg';
import img39 from './assets/IMG_20250509_120434.jpg';
import img40 from './assets/IMG_20250509_120807.jpg';
import img41 from './assets/IMG_20250509_120811.jpg';
import img42 from './assets/IMG_20250509_121247.jpg';
import img43 from './assets/IMG_20250509_121305.jpg';

function App() {
  const imagePhrases = [
    { img: img1, text: "Breathe deep, the forest whispers peace." },
    { img: img2, text: "Find your stillness in nature's embrace." },
    { img: img3, text: "Let the gentle breeze carry your worries away." },
    { img: img4, text: "Where the light touches, calm resides." },
    { img: img5, text: "A moment of quiet, a world of green." },
    { img: img6, text: "Nature's rhythm, a balm for the soul." },
    { img: img7, text: "Unwind, the earth holds you gently." },
    { img: img8, text: "Listen to the silence, it speaks volumes." },
    { img: img9, text: "In every petal, a perfect serenity." },
    { img: img10, text: "The sky's vastness, a reminder of peace." },
    { img: img11, text: "Let the water flow, let your mind clear." },
    { img: img12, text: "A sanctuary found in simple beauty." },
    { img: img13, text: "Feel the sun, surrender to the moment." },
    { img: img14, text: "Here, the world slows down for you." },
    { img: img15, text: "Nature's canvas, painted with tranquility." },
    { img: img16, text: "Step into peace, leave the noise behind." },
    { img: img17, text: "The quiet strength of growing things." },
    { img: img18, text: "Find solace in the rustling leaves." },
    { img: img19, text: "A gentle reminder to just be." },
    { img: img20, text: "Let the wild beauty soothe your spirit." },
    { img: img21, text: "The soft glow of dawn, a new beginning." },
    { img: img22, text: "Evening's hush, a peaceful close." },
    { img: img23, text: "Every drop of rain, a cleansing calm." },
    { img: img24, text: "The steadfast mountains, silent and strong." },
    { img: img25, text: "Find your anchor in the natural world." },
    { img: img26, text: "Where roots run deep, peace can bloom." },
    { img: img27, text: "The subtle dance of light and shadow." },
    { img: img28, text: "A whisper of calm in every scene." },
    { img: img29, text: "Let nature's artistry heal your heart." },
    { img: img30, text: "The vastness of the ocean, endless peace." },
    { img: img31, text: "Rest your eyes on nature's gentle hues." },
    { img: img32, text: "A quiet corner, just for you." },
    { img: img33, text: "The world outside melts away here." },
    { img: img34, text: "Embrace the quietude of the wild." },
    { img: img35, text: "The soft murmur of a hidden stream." },
    { img: img36, text: "Where beauty blooms, so does peace." },
    { img: img37, text: "Let the natural world ground you." },
    { img: img38, text: "A moment suspended in timeless grace." },
    { img: img39, text: "The comforting embrace of the earth." },
    { img: img40, text: "Find your calm in nature's quiet hum." },
    { img: img41, text: "Let the leaves whisper secrets of serenity." },
    { img: img42, text: "The sky above, a blanket of calm." },
    { img: img43, text: "A gentle escape, a breath of fresh air." }
  ];

  return (
    <div className="gallery-container">
      <h1>🌿 Nature Gallery</h1>
      {imagePhrases.map((item, index) => (
        <div key={index} className="gallery-item">
          <img src={item.img} alt={`Nature ${index}`} width="400" />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
