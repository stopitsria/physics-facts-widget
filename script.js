const physicsFactsArray = [
    "Time slows down as you move faster. This is called time dilation.",
    "Light behaves like both a particle and a wave.",
    "Gravity isn't a force — it's a curve in spacetime!",
    "Every second, the sun fuses 620 million metric tons of hydrogen.",
    "Quantum particles can exist in multiple states until observed.",
    "There's enough empty space inside atoms that you're mostly... nothing.",
    "A teaspoon of neutron star weighs about 6 billion tons.",
    "Nothing can travel faster than light — in a vacuum.",
    "Black holes can evaporate via Hawking radiation.",
    "Antimatter is real — and explodes on contact with matter.",
    "The universe is expanding, and the rate of expansion is accelerating.",
    "The Planck length is the smallest meaningful length in physics.",
    "Electrons don't orbit atoms like planets — they exist in probability clouds.",
    "Quantum tunneling allows particles to pass through barriers.",
    "Entangled particles affect each other instantly across any distance.",
    "A photon takes thousands of years to escape the sun's core.",
    "Supernovae can briefly outshine entire galaxies.",
    "The speed of light is 299,792,458 meters per second.",
    "Absolute zero is the coldest possible temperature: -273.15°C.",
    "In a vacuum, all objects fall at the same rate — regardless of mass.",
    "Neutrinos pass through your body by the trillions every second.",
    "The Higgs boson gives particles their mass.",
    "Einstein's E=mc² means mass and energy are interchangeable.",
    "A magnet always has both a north and south pole — you can't split them.",
    "Dark matter makes up about 27% of the universe — we can't see it.",
    "Dark energy makes up about 68% — we don't know what it is.",
    "The observable universe is about 93 billion light-years across.",
    "Stars twinkle because of Earth's atmosphere.",
    "Black holes can stretch you like spaghetti — it's called spaghettification.",
    "Particles in quantum mechanics don't have definite states until measured.",
    "Fusion powers the sun — not fission like nuclear reactors on Earth.",
    "Some particles can travel backward in time in Feynman diagrams.",
    "Superfluid helium can climb walls against gravity.",
    "Your GPS uses general relativity to stay accurate.",
    "Electromagnetic waves include visible light, X-rays, and radio waves.",
    "Laser stands for Light Amplification by Stimulated Emission of Radiation.",
    "Muons are like heavy electrons and are used to image pyramids.",
    "The double-slit experiment shows light acting like a wave and a particle.",
    "Vacuum fluctuations mean empty space is full of virtual particles.",
    "Plasma is the fourth state of matter, found in stars and lightning.",
    "Chandrasekhar limit defines the max mass of a stable white dwarf.",
    "String theory suggests particles are tiny vibrating strings.",
    "An object in motion stays in motion unless acted on by a force — Newton's First Law.",
    "The Large Hadron Collider is the world's most powerful particle accelerator.",
    "Sound can't travel in space — no air, no medium.",
    "The Milky Way is on a collision course with the Andromeda galaxy.",
    "A single grain of sand has more atoms than stars in the universe.",
    "Earth's magnetic field protects us from solar wind.",
    "Most of the universe's gold was formed in neutron star collisions."
];

const factDisplay = document.getElementById('fact-display');
const factButton = document.getElementById('fact-button');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * physicsFactsArray.length);
    return physicsFactsArray[randomIndex];
}

factButton.addEventListener('click', () => {
    factDisplay.textContent = getRandomFact();
}); 