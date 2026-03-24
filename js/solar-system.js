const solarSystemData = [
  {
    id: 'sun',
    type: 'star',
    color: '#FFD700',
    size: 60, // visual size multiplier
    orbit: 0,
    speed: 0,
    image: 'sun',
    en: {
      name: 'Sun',
      type: 'Yellow Dwarf Star',
      mass: '1.989 × 10^30 kg',
      radius: '696,340 km',
      distance: '0 km',
      moons: '0',
      description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core.'
    },
    hi: {
      name: 'सूर्य (Sun)',
      type: 'पीला बौना तारा',
      mass: '1.989 × 10^30 किग्रा',
      radius: '696,340 किमी',
      distance: '0 किमी',
      moons: '0',
      description: 'सूर्य सौरमंडल के केंद्र में स्थित तारा है। यह गर्म प्लाज्मा का लगभग पूर्ण गोला है, जो इसके मूल में परमाणु संलयन प्रतिक्रियाओं द्वारा तापदीप्त होता है।'
    }
  },
  {
    id: 'mercury',
    type: 'planet',
    color: '#b0ada7',
    size: 15,
    orbit: 100,
    speed: 4.1,
    en: {
      name: 'Mercury',
      type: 'Terrestrial Planet',
      mass: '3.285 × 10^23 kg',
      radius: '2,439.7 km',
      distance: '57.91 million km',
      moons: '0',
      description: 'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the planets.'
    },
    hi: {
      name: 'बुध (Mercury)',
      type: 'स्थलीय ग्रह',
      mass: '3.285 × 10^23 किग्रा',
      radius: '2,439.7 किमी',
      distance: '57.91 मिलियन किमी',
      moons: '0',
      description: 'बुध सौरमंडल का सबसे छोटा ग्रह है और सूर्य के सबसे करीब है। सूर्य के चारों ओर इसकी कक्षा में 87.97 पृथ्वी दिन लगते हैं, जो सभी ग्रहों में सबसे छोटा है।'
    }
  },
  {
    id: 'venus',
    type: 'planet',
    color: '#e3bb76',
    size: 20,
    orbit: 140,
    speed: 1.6,
    en: {
      name: 'Venus',
      type: 'Terrestrial Planet',
      mass: '4.867 × 10^24 kg',
      radius: '6,051.8 km',
      distance: '108.2 million km',
      moons: '0',
      description: 'Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in the night sky after the Moon, Venus can cast shadows.'
    },
    hi: {
      name: 'शुक्र (Venus)',
      type: 'स्थलीय ग्रह',
      mass: '4.867 × 10^24 किग्रा',
      radius: '6,051.8 किमी',
      distance: '108.2 मिलियन किमी',
      moons: '0',
      description: 'शुक्र सूर्य से दूसरा ग्रह है। इसका नाम प्रेम और सौंदर्य की रोमन देवी के नाम पर रखा गया है। चंद्रमा के बाद रात के आकाश में दूसरी सबसे चमकीली प्राकृतिक वस्तु के रूप में, शुक्र छाया डाल सकता है।'
    }
  },
  {
    id: 'earth',
    type: 'planet',
    color: '#2b82c9',
    size: 22,
    orbit: 190,
    speed: 1,
    en: {
      name: 'Earth',
      type: 'Terrestrial Planet',
      mass: '5.972 × 10^24 kg',
      radius: '6,371 km',
      distance: '149.6 million km',
      moons: '1',
      description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth\'s surface is land consisting of continents and islands.'
    },
    hi: {
      name: 'पृथ्वी (Earth)',
      type: 'स्थलीय ग्रह',
      mass: '5.972 × 10^24 किग्रा',
      radius: '6,371 किमी',
      distance: '149.6 मिलियन किमी',
      moons: '1',
      description: 'पृथ्वी सूर्य से तीसरा ग्रह है और एकमात्र खगोलीय पिंड है जिसमें जीवन होने का पता चला है। पृथ्वी की सतह का लगभग 29.2% भाग महाद्वीपों और द्वीपों वाला भूमि है।'
    }
  },
  {
    id: 'mars',
    type: 'planet',
    color: '#c1440e',
    size: 18,
    orbit: 240,
    speed: 0.5,
    en: {
      name: 'Mars',
      type: 'Terrestrial Planet',
      mass: '6.39 × 10^23 kg',
      radius: '3,389.5 km',
      distance: '227.9 million km',
      moons: '2',
      description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. It carries the name of the Roman god of war and is often referred to as the "Red Planet".'
    },
    hi: {
      name: 'मंगल (Mars)',
      type: 'स्थलीय ग्रह',
      mass: '6.39 × 10^23 किग्रा',
      radius: '3,389.5 किमी',
      distance: '227.9 मिलियन किमी',
      moons: '2',
      description: 'मंगल सूर्य से चौथा ग्रह है और सौरमंडल का दूसरा सबसे छोटा ग्रह है। यह युद्ध के रोमन देवता का नाम रखता है और अक्सर इसे "लाल ग्रह" के रूप में जाना जाता है।'
    }
  },
  {
    id: 'jupiter',
    type: 'planet',
    color: '#d39c7e',
    size: 40,
    orbit: 320,
    speed: 0.08,
    en: {
      name: 'Jupiter',
      type: 'Gas Giant',
      mass: '1.898 × 10^27 kg',
      radius: '69,911 km',
      distance: '778.5 million km',
      moons: '79',
      description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.'
    },
    hi: {
      name: 'बृहस्पति (Jupiter)',
      type: 'गैस दानव',
      mass: '1.898 × 10^27 किग्रा',
      radius: '69,911 किमी',
      distance: '778.5 मिलियन किमी',
      moons: '79',
      description: 'बृहस्पति सूर्य से पांचवां ग्रह है और सौरमंडल में सबसे बड़ा है। यह एक गैस दानव है जिसका द्रव्यमान सौरमंडल के अन्य सभी ग्रहों की तुलना में ढाई गुना से अधिक है।'
    }
  },
  {
    id: 'saturn',
    type: 'planet',
    color: '#ead6b8',
    size: 35,
    orbit: 410,
    speed: 0.03,
    en: {
      name: 'Saturn',
      type: 'Gas Giant',
      mass: '5.683 × 10^26 kg',
      radius: '58,232 km',
      distance: '1.434 billion km',
      moons: '82',
      description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine times that of Earth. Known for its prominent ring system.'
    },
    hi: {
      name: 'शनि (Saturn)',
      type: 'गैस दानव',
      mass: '5.683 × 10^26 किग्रा',
      radius: '58,232 किमी',
      distance: '1.434 बिलियन किमी',
      moons: '82',
      description: 'शनि सूर्य से छठा ग्रह है और बृहस्पति के बाद सौरमंडल में दूसरा सबसे बड़ा ग्रह है। यह एक गैस दानव है जिसकी औसत त्रिज्या पृथ्वी की तुलना में लगभग नौ गुना है। अपने प्रमुख वलय प्रणाली के लिए जाना जाता है।'
    }
  },
  {
    id: 'uranus',
    type: 'planet',
    color: '#4b70dd',
    size: 28,
    orbit: 490,
    speed: 0.01,
    en: {
      name: 'Uranus',
      type: 'Ice Giant',
      mass: '8.681 × 10^25 kg',
      radius: '25,362 km',
      distance: '2.871 billion km',
      moons: '27',
      description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune.'
    },
    hi: {
      name: 'अरुण (Uranus)',
      type: 'बर्फ़ का दानव',
      mass: '8.681 × 10^25 किग्रा',
      radius: '25,362 किमी',
      distance: '2.871 बिलियन किमी',
      moons: '27',
      description: 'अरुण सूर्य से सातवां ग्रह है। इसका सौरमंडल में तीसरा सबसे बड़ा ग्रह त्रिज्या और चौथा सबसे बड़ा ग्रह द्रव्यमान है। अरुण संरचना में नेप्च्यून के समान है।'
    }
  },
  {
    id: 'neptune',
    type: 'planet',
    color: '#274687',
    size: 27,
    orbit: 560,
    speed: 0.006,
    en: {
      name: 'Neptune',
      type: 'Ice Giant',
      mass: '1.024 × 10^26 kg',
      radius: '24,622 km',
      distance: '4.495 billion km',
      moons: '14',
      description: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.'
    },
    hi: {
      name: 'वरुण (Neptune)',
      type: 'बर्फ़ का दानव',
      mass: '1.024 × 10^26 किग्रा',
      radius: '24,622 किमी',
      distance: '4.495 बिलियन किमी',
      moons: '14',
      description: 'वरुण सूर्य से आठवां और सबसे दूर ज्ञात ग्रह है। सौरमंडल में, यह व्यास के हिसाब से चौथा सबसे बड़ा ग्रह है, तीसरा सबसे विशाल ग्रह है, और सबसे घना विशाल ग्रह है।'
    }
  }
];

// Initialize Solar System
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('solar-system-container');
  const detailsPanel = document.getElementById('planet-details');
  const detailsContent = document.getElementById('details-content');
  const closeDetails = document.getElementById('close-details');
  
  if (!container) return;

  // Build the system
  solarSystemData.forEach(celestial => {
    // Create orbit ring for planets
    if (celestial.type === 'planet') {
      const orbitRing = document.createElement('div');
      orbitRing.className = 'orbit-ring';
      orbitRing.style.width = `${celestial.orbit * 2}px`;
      orbitRing.style.height = `${celestial.orbit * 2}px`;
      container.appendChild(orbitRing);
    }

    // Create celestial body
    const orbitContainer = document.createElement('div');
    orbitContainer.className = `orbit-container ${celestial.id}-orbit`;
    
    // Size and animation duration
    if (celestial.type === 'planet') {
      orbitContainer.style.width = `${celestial.orbit * 2}px`;
      orbitContainer.style.height = `${celestial.orbit * 2}px`;
      // Convert speed to animation duration (lower speed = longer duration)
      const duration = 100 / celestial.speed;
      orbitContainer.style.animationDuration = `${duration}s`;
    } else {
      orbitContainer.style.width = `0px`;
      orbitContainer.style.height = `0px`;
    }

    const body = document.createElement('div');
    body.className = `celestial-body ${celestial.type} ${celestial.id}`;
    body.style.width = `${celestial.size}px`;
    body.style.height = `${celestial.size}px`;
    body.style.backgroundColor = celestial.color;
    
    if (celestial.id === 'saturn') {
        const ring = document.createElement('div');
        ring.className = 'saturn-ring';
        body.appendChild(ring);
    }
    
    // Add glow for sun
    if (celestial.id === 'sun') {
        body.style.boxShadow = `0 0 40px ${celestial.color}`;
    }

    body.addEventListener('click', () => showDetails(celestial));

    orbitContainer.appendChild(body);
    container.appendChild(orbitContainer);
  });

  // Handle details panel
  function showDetails(celestial) {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const data = celestial[currentLang] || celestial['en'];
    
    // Get translations for labels
    const labels = {
        en: { type: 'Type', mass: 'Mass', radius: 'Radius', distance: 'Distance from Sun', moons: 'Moons' },
        hi: { type: 'प्रकार', mass: 'द्रव्यमान', radius: 'त्रिज्या', distance: 'सूर्य से दूरी', moons: 'चंद्रमा' }
    };
    const l = labels[currentLang];
    
    let html = `
      <div class="details-header" style="border-bottom: 3px solid ${celestial.color}">
        <h2>${data.name}</h2>
      </div>
      <div class="details-info">
        <p><strong>${l.type}:</strong> ${data.type}</p>
        <p><strong>${l.mass}:</strong> ${data.mass}</p>
        <p><strong>${l.radius}:</strong> ${data.radius}</p>
        <p><strong>${l.distance}:</strong> ${data.distance}</p>
        <p><strong>${l.moons}:</strong> ${data.moons}</p>
      </div>
      <div class="details-desc">
        <p>${data.description}</p>
      </div>
    `;
    
    detailsContent.innerHTML = html;
    detailsPanel.classList.add('active');
  }

  if (closeDetails) {
    closeDetails.addEventListener('click', () => {
      detailsPanel.classList.remove('active');
    });
  }
  
  // Custom language switcher logic for study pages since they dynamically render content
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hide details panel on language switch to prevent stale data
        if(detailsPanel) detailsPanel.classList.remove('active');
    });
  });

});
