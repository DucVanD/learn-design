/* ============================================
   YŪGEN COFFEE — Premium Interactions & Effects
   ============================================ */

(function () {
    'use strict';

    /* ---- LOADING SCREEN ---- */
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            if (loader) loader.classList.add('hidden');
            document.body.style.overflow = '';
            initHeroAnimations();
            initCustomCursor();
        }, 2400);
    });
    document.body.style.overflow = 'hidden';

    /* ---- DYNAMIC BACKGROUND SYSTEM (Sakura + Gold Dust Particles) ---- */
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let petals = [];
    const PARTICLE_COUNT = 45;
    const PETAL_COUNT = 6;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Gold Dust Particle Class
    class Particle {
        constructor() { this.reset(true); }
        reset(init) {
            this.x = Math.random() * canvas.width;
            this.y = init ? Math.random() * canvas.height : -10;
            this.size = Math.random() * 2 + 0.5;
            this.speedY = Math.random() * 0.25 + 0.08;
            this.speedX = (Math.random() - 0.5) * 0.15;
            this.opacity = Math.random() * 0.45 + 0.1;
            this.life = 0;
            this.maxLife = Math.random() * 600 + 300;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.life * 0.008) * 0.1;
            this.life++;
            const fadeFactor = this.life < 60 ? this.life / 60 : this.life > this.maxLife - 60 ? (this.maxLife - this.life) / 60 : 1;
            this.currentOpacity = this.opacity * fadeFactor;
            if (this.y > canvas.height || this.life > this.maxLife) this.reset(false);
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201,169,110,${this.currentOpacity})`;
            ctx.fill();
        }
    }

    // Sakura Petal Class
    class SakuraPetal {
        constructor() { this.reset(true); }
        reset(init) {
            this.x = Math.random() * canvas.width;
            this.y = init ? Math.random() * canvas.height : -20;
            this.size = Math.random() * 7 + 4;
            this.speedY = Math.random() * 0.7 + 0.4;
            this.speedX = Math.random() * 0.4 + 0.2;
            this.rotation = Math.random() * Math.PI;
            this.rotationSpeed = (Math.random() - 0.5) * 0.015;
            this.swingSpeed = Math.random() * 0.015 + 0.005;
            this.opacity = Math.random() * 0.35 + 0.2;
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.y * this.swingSpeed) * 0.35;
            this.rotation += this.rotationSpeed;
            if (this.y > canvas.height + 20 || this.x > canvas.width + 20) this.reset(false);
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.beginPath();
            // Draw realistic curved cherry blossom shape
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-this.size, -this.size / 2, -this.size / 2, -this.size * 1.4, 0, -this.size * 1.1);
            ctx.bezierCurveTo(this.size / 2, -this.size * 1.4, this.size, -this.size / 2, 0, 0);
            ctx.fillStyle = `rgba(235, 172, 185, ${this.opacity})`;
            ctx.fill();
            ctx.restore();
        }
    }

    // Initialize Dust & Sakura arrays
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    for (let i = 0; i < PETAL_COUNT; i++) petals.push(new SakuraPetal());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        petals.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    /* ---- CUSTOM GOLD RING CURSOR ---- */
    const cursor = document.getElementById('custom-cursor');
    const cursorDot = document.getElementById('custom-cursor-dot');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    function initCustomCursor() {
        if (!cursor || !cursorDot) return;
        
        // Show cursor elements once active
        cursor.style.opacity = '1';
        cursorDot.style.opacity = '1';

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot follows instantly
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        // Elastic animation loop for the outer golden ring
        function animateCursor() {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Add interactive hover states for elements
        const interactiveElements = document.querySelectorAll('a, button, .menu-tab, .sig-card, .space-option, input, select, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('active'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
        });
    }

    /* ---- 3D HOVER TILT EFFECT FOR CARDS ---- */
    const cards = document.querySelectorAll('.sig-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Normalise positions from -0.5 to 0.5
            const normX = (x / rect.width) - 0.5;
            const normY = (y / rect.height) - 0.5;
            
            // Set rotation degrees (subtle 8 deg max)
            const rotX = -normY * 12;
            const rotY = normX * 12;

            card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });

    /* ---- INTERACTIVE SEATING SPACE PICKER ---- */
    const spaceOptions = document.querySelectorAll('.space-option');
    const guestInput = document.getElementById('book-guests');

    spaceOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            spaceOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            
            if (guestInput) {
                guestInput.value = opt.dataset.space;
            }
        });
    });

    /* ---- WEB AUDIO API LUXURY CINEMATIC INTERACTIVE SOUNDSCAPE ENGINE ---- */
    const widget = document.getElementById('ambient-widget');
    const toggleBtn = document.getElementById('ambient-toggle');
    const label = toggleBtn ? toggleBtn.querySelector('.ambient-label') : null    // Audio Engine Nodes & Handles
    let audioCtx = null;
    let masterGain = null;
    
    // Gain Nodes per Layer
    let roomGainNode = null;
    let fireGainNode = null;
    let windGainNode = null;
    let furinGainNode = null;
    let bookingGainNode = null;
    let muffleFilter = null; // Cinematic scroll velocity muffle filter

    // Sources and Oscs
    let roomToneSource = null;
    let vinylStaticSource = null;
    let fireRumbleSource = null;
    let windSource = null;

    // Timeouts & Loops
    let firePopTimeout = null;
    let windModulationTimeout = null;
    let furinChimeTimeout = null;
    let cupClickTimeout = null;
    let chordInterval = null;

    // Base calibrated slider volumes (Perfect balance)
    let baseVolRoom = 0.40;   // ☕ Cafe room tone (40%)
    let baseVolFire = 0.25;   // 🔥 Fireplace (25%)
    let baseVolWind = 0.20;   // 🍃 Soft night wind (20%)
    let baseVolFurin = 0.15;  // 🎐 Chuông gió Nhật (15%)

    let bookingPadActive = false;
    let steamOsc = null;
    let steamGain = null;

    function initAudio() {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // 1. Master Gain
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.7, audioCtx.currentTime + 1.5); // Master at 70%
        masterGain.connect(audioCtx.destination);

        // 1.5. Setup Dynamic Low-pass Muffle Filter for scroll speed camera effects
        muffleFilter = audioCtx.createBiquadFilter();
        muffleFilter.type = 'lowpass';
        muffleFilter.frequency.setValueAtTime(20000, audioCtx.currentTime); // fully open
        muffleFilter.connect(masterGain);

        // 2. Setup Layer Gain Nodes connected to the muffleFilter
        roomGainNode = audioCtx.createGain();
        roomGainNode.gain.setValueAtTime(baseVolRoom, audioCtx.currentTime);
        roomGainNode.connect(muffleFilter);

        fireGainNode = audioCtx.createGain();
        fireGainNode.gain.setValueAtTime(baseVolFire, audioCtx.currentTime);
        fireGainNode.connect(muffleFilter);

        windGainNode = audioCtx.createGain();
        windGainNode.gain.setValueAtTime(baseVolWind, audioCtx.currentTime);
        windGainNode.connect(muffleFilter);

        furinGainNode = audioCtx.createGain();
        furinGainNode.gain.setValueAtTime(baseVolFurin, audioCtx.currentTime);
        furinGainNode.connect(muffleFilter);

        bookingGainNode = audioCtx.createGain();
        bookingGainNode.gain.setValueAtTime(0, audioCtx.currentTime); // Starts muted, scroll fades in
        bookingGainNode.connect(muffleFilter);

        // --- LAYER 1: ☕ CAFE ROOM TONE & VINYL NOISE (40% Volume) ---
        const bufferSize = audioCtx.sampleRate * 2.0;
        
        // Deep room hum
        const roomToneBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const roomOut = roomToneBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            roomOut[i] = Math.random() * 2.0 - 1.0;
        }
        roomToneSource = audioCtx.createBufferSource();
        roomToneSource.buffer = roomToneBuffer;
        roomToneSource.loop = true;

        const roomFilter = audioCtx.createBiquadFilter();
        roomFilter.type = 'lowpass';
        roomFilter.frequency.setValueAtTime(65, audioCtx.currentTime); // deep atmospheric air hum
        roomFilter.Q.setValueAtTime(1.2, audioCtx.currentTime);

        roomToneSource.connect(roomFilter);
        roomFilter.connect(roomGainNode);
        roomToneSource.start();

        // Vinyl dust crackle (Pure sparse cozy pops, absolutely no rain-like continuous hiss!)
        const vinylBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const vinylOut = vinylBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const pop = Math.random() > 0.99992 ? (Math.random() * 2.0 - 1.0) * 0.35 : 0;
            vinylOut[i] = pop;
        }
        vinylStaticSource = audioCtx.createBufferSource();
        vinylStaticSource.buffer = vinylBuffer;
        vinylStaticSource.loop = true;

        const vinylFilter = audioCtx.createBiquadFilter();
        vinylFilter.type = 'bandpass';
        vinylFilter.frequency.setValueAtTime(1200, audioCtx.currentTime); // warmer low-mid click
        vinylFilter.Q.setValueAtTime(1.0, audioCtx.currentTime);

        vinylStaticSource.connect(vinylFilter);
        vinylFilter.connect(roomGainNode);
        vinylStaticSource.start();

        // Occasional faint ceramic cup clinking
        function triggerCupClick() {
            if (!audioCtx || audioCtx.state === 'suspended') return;
            const now = audioCtx.currentTime;
            const osc = audioCtx.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(Math.random() * 1000 + 2000, now); // soft high cup contact
            
            const g = audioCtx.createGain();
            g.gain.setValueAtTime(0, now);
            g.gain.linearRampToValueAtTime(0.005, now + 0.002);
            g.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
            
            const delay = audioCtx.createDelay();
            delay.delayTime.setValueAtTime(0.3, now);
            const delayGain = audioCtx.createGain();
            delayGain.gain.setValueAtTime(0.2, now);

            osc.connect(g);
            g.connect(roomGainNode);
            g.connect(delay);
            delay.connect(delayGain);
            delayGain.connect(roomGainNode);

            osc.start(now);
            osc.stop(now + 0.5);

            cupClickTimeout = setTimeout(triggerCupClick, Math.random() * 25000 + 20000); // trigger every 20-45s
        }
        triggerCupClick();

        // --- LAYER 2: 🔥 COZY FIREPLACE CRACKLE (25% Volume) ---
        const rumbleBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const rumbleOut = rumbleBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            rumbleOut[i] = Math.random() * 2.0 - 1.0;
        }
        fireRumbleSource = audioCtx.createBufferSource();
        fireRumbleSource.buffer = rumbleBuffer;
        fireRumbleSource.loop = true;

        const fireFilter = audioCtx.createBiquadFilter();
        fireFilter.type = 'lowpass';
        fireFilter.frequency.setValueAtTime(80, audioCtx.currentTime);
        fireFilter.Q.setValueAtTime(2.0, audioCtx.currentTime);

        fireRumbleSource.connect(fireFilter);
        fireFilter.connect(fireGainNode);
        fireRumbleSource.start();

        function triggerFirePop() {
            if (!audioCtx || audioCtx.state === 'suspended') return;
            const now = audioCtx.currentTime;
            
            const osc = audioCtx.createOscillator();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(Math.random() * 400 + 100, now);
            
            const popG = audioCtx.createGain();
            popG.gain.setValueAtTime(0, now);
            popG.gain.linearRampToValueAtTime(Math.random() * 0.04 + 0.015, now + 0.001); 
            popG.gain.exponentialRampToValueAtTime(0.0001, now + Math.random() * 0.02 + 0.008);
            
            osc.connect(popG);
            popG.connect(fireGainNode);
            osc.start(now);
            osc.stop(now + 0.04);
            
            firePopTimeout = setTimeout(triggerFirePop, Math.random() * 1800 + 900); // Cozy sparse fireplace crackling pops
        }
        triggerFirePop();

        // --- LAYER 3: 🍃 SOFT NIGHT WIND WITH GUST MODULATION (20% Volume) ---
        const windBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const windOut = windBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            windOut[i] = Math.random() * 2.0 - 1.0;
        }
        windSource = audioCtx.createBufferSource();
        windSource.buffer = windBuffer;
        windSource.loop = true;

        const windFilter = audioCtx.createBiquadFilter();
        windFilter.type = 'bandpass';
        windFilter.Q.setValueAtTime(1.2, audioCtx.currentTime); // Gentle "night air" hum instead of storm wind!

        windSource.connect(windFilter);
        windFilter.connect(windGainNode);
        windSource.start();

        function modulateWind() {
            if (!audioCtx || audioCtx.state === 'suspended') return;
            const now = audioCtx.currentTime;
            const targetFreq = Math.random() * 80 + 140; // Gentle sweeps between 140Hz and 220Hz
            const duration = Math.random() * 6 + 4; // sweeps take 4 to 10s
            windFilter.frequency.exponentialRampToValueAtTime(targetFreq, now + duration);
            windModulationTimeout = setTimeout(modulateWind, duration * 1000);
        }
        modulateWind();

        // --- LAYER 4: 🎐 GENTLE JAPANESE FURIN WIND CHIME (15% Volume) ---
        const furinScales = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // Beautiful Pentatonic C Major scale
        
        function playFurinChime() {
            if (!audioCtx || audioCtx.state === 'suspended') return;
            const now = audioCtx.currentTime;
            const pitch = furinScales[Math.floor(Math.random() * furinScales.length)];

            // Main Glass body oscillator (Sine)
            const chimeOsc = audioCtx.createOscillator();
            chimeOsc.type = 'sine';
            chimeOsc.frequency.setValueAtTime(pitch, now);

            // Metal/Cozy overtone oscillator (Triangle)
            const chimeOsc2 = audioCtx.createOscillator();
            chimeOsc2.type = 'triangle';
            chimeOsc2.frequency.setValueAtTime(pitch, now);

            // Subtle balances for premium resonance
            const mainGainNode = audioCtx.createGain();
            mainGainNode.gain.setValueAtTime(0.024, now);

            const subGainNode = audioCtx.createGain();
            subGainNode.gain.setValueAtTime(0.006, now); // soft triangle component

            chimeOsc.connect(mainGainNode);
            chimeOsc2.connect(subGainNode);

            const chimeFilter = audioCtx.createBiquadFilter();
            chimeFilter.type = 'bandpass';
            chimeFilter.frequency.setValueAtTime(pitch, now);
            chimeFilter.Q.setValueAtTime(1.8, now);

            const chimeGain = audioCtx.createGain();
            chimeGain.gain.setValueAtTime(0, now);
            chimeGain.gain.linearRampToValueAtTime(1.0, now + 0.04);
            chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.6);

            mainGainNode.connect(chimeFilter);
            subGainNode.connect(chimeFilter);
            chimeFilter.connect(chimeGain);
            chimeGain.connect(furinGainNode);

            // Reverb/Echo Feedback Loop
            const delay = audioCtx.createDelay();
            delay.delayTime.setValueAtTime(0.4, now);
            const delayGain = audioCtx.createGain();
            delayGain.gain.setValueAtTime(0.3, now);

            chimeGain.connect(delay);
            delay.connect(delayGain);
            delayGain.connect(furinGainNode);
            delayGain.connect(delay); // feedback

            chimeOsc.start(now);
            chimeOsc2.start(now);
            chimeOsc.stop(now + 2.8);
            chimeOsc2.stop(now + 2.8);

            furinChimeTimeout = setTimeout(playFurinChime, Math.random() * 60000 + 30000); // Trigger chimes every 30s to 90s
        }
        // Start first wind chime with a pleasant 2.5 seconds entrance delay
        setTimeout(playFurinChime, 2500);

        // --- LAYER E: EMOTIONAL RHODES PIANO PAD FOR BOOKING SECTION ---
        const chords = [
            [220.00, 261.63, 329.63], // Am
            [174.61, 261.63, 349.23], // Fmaj
            [261.63, 329.63, 392.00], // Cmaj
            [196.00, 293.66, 392.00]  // Gmaj
        ];
        let chordIdx = 0;

        function triggerNextChord() {
            if (!audioCtx || audioCtx.state === 'suspended' || !bookingPadActive) return;
            const now = audioCtx.currentTime;
            const notes = chords[chordIdx];
            chordIdx = (chordIdx + 1) % chords.length;

            notes.forEach(freq => {
                const osc = audioCtx.createOscillator();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);

                const filter = audioCtx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(450, now);

                const gNode = audioCtx.createGain();
                gNode.gain.setValueAtTime(0, now);
                gNode.gain.linearRampToValueAtTime(0.02, now + 2.2); // soft attack
                gNode.gain.exponentialRampToValueAtTime(0.0001, now + 7.8); // elegant long release

                osc.connect(filter);
                filter.connect(gNode);
                gNode.connect(bookingGainNode);
                
                osc.start(now);
                osc.stop(now + 8.0);
            });
        }
        chordInterval = setInterval(triggerNextChord, 8000);
        triggerNextChord();
    }

    // Cinematic Whoosh transition riser sound (triggers on reveal)
    function triggerWhoosh() {
        if (!audioCtx || audioCtx.state === 'suspended') return;
        const now = audioCtx.currentTime;
        
        const whooshOsc = audioCtx.createOscillator();
        whooshOsc.type = 'triangle'; // Soft, warm triangle wave
        whooshOsc.frequency.setValueAtTime(95, now);
        whooshOsc.frequency.exponentialRampToValueAtTime(32, now + 1.4); // deep cinematic roll
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(100, now);
        
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.02, now + 0.15); // soft elegant rise (0.02)
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4); // warm tail
        
        whooshOsc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        
        whooshOsc.start(now);
        whooshOsc.stop(now + 1.5);
    }

    // Soft Steam Hiss interaction sound (when hovering coffee cup)
    function playSteamHiss() {
        if (!audioCtx || audioCtx.state === 'suspended') return;
        const now = audioCtx.currentTime;
        
        steamGain = audioCtx.createGain();
        steamGain.gain.setValueAtTime(0, now);
        steamGain.gain.linearRampToValueAtTime(0.03, now + 0.4); // extremely soft
        
        const bufferSize = audioCtx.sampleRate * 2.0;
        const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2.0 - 1.0;
        }
        
        const hissSource = audioCtx.createBufferSource();
        hissSource.buffer = noiseBuffer;
        hissSource.loop = true;
        
        const steamFilter = audioCtx.createBiquadFilter();
        steamFilter.type = 'highpass';
        steamFilter.frequency.setValueAtTime(5800, now); // soft high hiss
        
        hissSource.connect(steamFilter);
        steamFilter.connect(steamGain);
        steamGain.connect(masterGain);
        
        hissSource.start(now);
        steamOsc = hissSource;
    }

    function stopSteamHiss() {
        if (steamGain && steamOsc) {
            const now = audioCtx.currentTime;
            steamGain.gain.cancelScheduledValues(now);
            steamGain.gain.setValueAtTime(steamGain.gain.value, now);
            steamGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4); // soft decay
            const oldSource = steamOsc;
            steamOsc = null;
            setTimeout(() => {
                try { oldSource.stop(); } catch(e) {}
            }, 500);
        }
    }

    // Bind Hover Steam SFX to coffee-cup elements
    const coffeeCup = document.getElementById('coffee-cup');
    if (coffeeCup) {
        coffeeCup.addEventListener('mouseenter', playSteamHiss);
        coffeeCup.addEventListener('mouseleave', stopSteamHiss);
    }

    // Dynamic Scroll Speed Lowpass Filter (Muffle Effect) tracking variables
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let muffleTimeout = null;

    // Dynamic Sound modulation based on Scroll depth
    function handleScrollSoundDynamics() {
        if (!audioCtx || audioCtx.state === 'suspended') return;
        const scrollY = window.scrollY;
        const now = audioCtx.currentTime;

        // --- DYNAMIC LOW-PASS MUFFLE EFFECT ---
        const currentTime = performance.now();
        const dt = currentTime - lastScrollTime;
        const dy = Math.abs(scrollY - lastScrollY);
        const speed = dt > 0 ? (dy / dt) * 1000 : 0; // velocity in pixels per second

        if (speed > 120 && muffleFilter) {
            // Muffle high frequencies on fast scrolls (simulate cinematic camera speed blur)
            const targetCutoff = Math.max(350, 20000 - (speed * 13));
            muffleFilter.frequency.setTargetAtTime(targetCutoff, now, 0.08);

            // Smoothly sweep back open when scrolling decelerates or stops
            clearTimeout(muffleTimeout);
            muffleTimeout = setTimeout(() => {
                if (audioCtx && muffleFilter) {
                    muffleFilter.frequency.setTargetAtTime(20000, audioCtx.currentTime, 0.35);
                }
            }, 120);
        }
        lastScrollY = scrollY;
        lastScrollTime = currentTime;

        // --- SCROLL ZONE VOLUME BALANCES ---
        if (scrollY < 650) {
            // --- HERO ZONE ---
            roomGainNode.gain.linearRampToValueAtTime(baseVolRoom * 0.4, now + 0.5);
            fireGainNode.gain.linearRampToValueAtTime(baseVolFire * 1.5, now + 0.5);
            windGainNode.gain.linearRampToValueAtTime(baseVolWind * 0.4, now + 0.5);
            furinGainNode.gain.linearRampToValueAtTime(baseVolFurin * 0.2, now + 0.5);
            
            // Disable booking piano pad
            bookingPadActive = false;
            bookingGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        } else if (scrollY >= 650 && scrollY < 1850) {
            // --- MID ZONE (Menu & Space) ---
            roomGainNode.gain.linearRampToValueAtTime(baseVolRoom * 1.3, now + 0.5);
            fireGainNode.gain.linearRampToValueAtTime(baseVolFire * 0.4, now + 0.5);
            windGainNode.gain.linearRampToValueAtTime(baseVolWind * 1.0, now + 0.5);
            furinGainNode.gain.linearRampToValueAtTime(baseVolFurin * 1.0, now + 0.5);
            
            bookingPadActive = false;
            bookingGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.5);
        } else {
            // --- BOOKING ZONE ---
            roomGainNode.gain.linearRampToValueAtTime(baseVolRoom * 0.3, now + 0.8);
            fireGainNode.gain.linearRampToValueAtTime(baseVolFire * 0.2, now + 0.8);
            windGainNode.gain.linearRampToValueAtTime(baseVolWind * 0.4, now + 0.8);
            furinGainNode.gain.linearRampToValueAtTime(baseVolFurin * 0.2, now + 0.8);
            
            // Trigger piano Rhodes progression
            if (!bookingPadActive) {
                bookingPadActive = true;
            }
            bookingGainNode.gain.linearRampToValueAtTime(0.14, now + 1.2); // Fades in booking pad subtly
        }
    }

    window.addEventListener('scroll', handleScrollSoundDynamics);

    function toggleAmbientSound() {
        if (!audioCtx) {
            initAudio();
            widget.classList.add('playing');
            if (label) label.textContent = "SOUND: ON";
            // Start dynamics on play
            setTimeout(handleScrollSoundDynamics, 200);
            return;
        }

        if (audioCtx.state === 'running') {
            audioCtx.suspend().then(() => {
                widget.classList.remove('playing');
                if (label) label.textContent = "SOUND: OFF";
            });
        } else if (audioCtx.state === 'suspended') {
            audioCtx.resume().then(() => {
                widget.classList.add('playing');
                if (label) label.textContent = "SOUND: ON";
                handleScrollSoundDynamics();
            });
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAmbientSound);
    }

    /* ---- NAVBAR ---- */
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 80);
    });

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    /* ---- HERO ANIMATIONS ---- */
    function initHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero [data-anim]');
        heroElements.forEach((el, i) => {
            const delay = parseInt(el.dataset.delay || 0) + i * 50;
            setTimeout(() => el.classList.add('visible'), delay);
        });
    }

    /* ---- SCROLL REVEAL ---- */
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || 0);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    triggerWhoosh(); // Trigger premium cinematic transition whoosh!
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-anim]:not(.hero [data-anim])').forEach(el => {
        revealObserver.observe(el);
    });

    /* ---- PARALLAX SCROLLING ---- */
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                // Hero background smooth camera movement
                const heroBg = document.querySelector('.hero-bg-img');
                if (heroBg) {
                    heroBg.style.transform = `scale(1.1) translateY(${scrollY * 0.12}px)`;
                }
                // Space background parallax
                const spaceBg = document.querySelector('.space-parallax');
                if (spaceBg) {
                    const rect = spaceBg.closest('.space-section').getBoundingClientRect();
                    const progress = -rect.top / window.innerHeight;
                    spaceBg.style.transform = `translateY(${progress * 60}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    /* ---- COUNTER ANIMATION ---- */
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const duration = 2000;
                const start = performance.now();
                function update(now) {
                    const progress = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(eased * target);
                    el.textContent = current >= 1000 ? (current / 1000).toFixed(0) + 'K+' : current + '+';
                    if (progress < 1) requestAnimationFrame(update);
                }
                requestAnimationFrame(update);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    /* ---- MENU TABS ---- */
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            menuTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const category = tab.dataset.tab;
            menuItems.forEach(item => {
                if (item.dataset.cat === category) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp .5s var(--ease-out) forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // Add fadeInUp keyframe dynamically
    const style = document.createElement('style');
    style.textContent = `@keyframes fadeInUp { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:translateY(0); } }`;
    document.head.appendChild(style);

    /* ---- BOOKING FORM ---- */
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('booking-submit');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>Xác nhận đặt bàn thành công! ✓</span>';
            btn.style.background = '#2d5a27';
            
            // Simple visual response
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                bookingForm.reset();
                // Reset seating options
                spaceOptions.forEach((o, i) => {
                    if (i === 0) o.classList.add('active');
                    else o.classList.remove('active');
                });
                if (guestInput) guestInput.value = spaceOptions[0].dataset.space;
            }, 3000);
        });
    }

    /* ---- SMOOTH SCROLL ---- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

})();
