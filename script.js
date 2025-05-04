// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to the header when page loads
    const header = document.querySelector('header');
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 300);
    
    // ====== TEXT TRANSFORMATION ======
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    // Array of magical texts to cycle through
    const magicalTexts = [
        "Hello my fellow developers, The text has transformed!",
        "Behold the power of JavaScript DOM manipulation!",
        "With a wave of the DOM wand, text changes instantly!",
        "No page reload needed - that's the magic of JavaScript!",
        "Dynamic content by Emmanuel Kimaro makes websites come alive!"
    ];
    
    let currentTextIndex = 0;
    
    // Add animation class before changing text
    changeTextBtn.addEventListener('click', function() {
        // Add animation effect
        dynamicText.classList.add('text-transform-animation');
        
        // Update text after a short delay for animation effect
        setTimeout(() => {
            // Update to the next text in the array
            currentTextIndex = (currentTextIndex + 1) % magicalTexts.length;
            dynamicText.textContent = magicalTexts[currentTextIndex];
            
            // Remove animation class after animation completes
            setTimeout(() => {
                dynamicText.classList.remove('text-transform-animation');
            }, 600);
        }, 300);
    });
    
    // ====== STYLE SORCERY ======
    const styleText = document.getElementById('style-text');
    const changeColorBtn = document.getElementById('change-color-btn');
    const toggleHighlightBtn = document.getElementById('toggle-highlight-btn');
    const changeThemeBtn = document.getElementById('change-theme-btn');
    
    // Vibrant colors to cycle through
    const magicalColors = [
        '#FF6584', // Pink
        '#6C63FF', // Purple
        '#00BFA6', // Teal
        '#FFC107', // Gold
        '#4C40F7', // Blue
        '#FF4757'  // Red
    ];
    let currentColorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        // Add transition effect
        styleText.style.transition = 'color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        // Change text color with animation
        currentColorIndex = (currentColorIndex + 1) % magicalColors.length;
        styleText.style.color = magicalColors[currentColorIndex];
        
        // Add a brief scale effect
        styleText.style.transform = 'scale(1.05)';
        setTimeout(() => {
            styleText.style.transform = 'scale(1)';
        }, 300);
    });
    
    toggleHighlightBtn.addEventListener('click', function() {
        // Toggle highlight class with animation
        if (styleText.classList.contains('highlight')) {
            styleText.classList.add('highlight-exit');
            setTimeout(() => {
                styleText.classList.remove('highlight');
                styleText.classList.remove('highlight-exit');
            }, 300);
        } else {
            styleText.classList.add('highlight');
        }
    });
    
    changeThemeBtn.addEventListener('click', function() {
        // Toggle between light and dark theme with smooth transition
        const body = document.body;
        
        // Add transition effect to body
        body.style.transition = 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        if (body.classList.contains('dark-theme')) {
            // Switch to light theme
            body.classList.remove('dark-theme');
        } else {
            // Switch to dark theme
            body.classList.add('dark-theme');
        }
    });
    
    // ====== ELEMENT CONJURING ======
    const elementsContainer = document.getElementById('elements-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    
    // Array of magical element names
    const elementNames = [
        'Fire Element',
        'Water Element', 
        'Earth Element',
        'Air Element',
        'Lightning Element',
        'Crystal Element',
        'Shadow Element',
        'Light Element',
        'Nature Element',
        'Metal Element'
    ];
    
    // Array of gradient backgrounds for elements
    const elementGradients = [
        'linear-gradient(135deg, #ff7e5f, #feb47b)', // Fire
        'linear-gradient(135deg, #4facfe, #00f2fe)', // Water
        'linear-gradient(135deg, #a8ff78, #78ffd6)', // Earth
        'linear-gradient(135deg, #d4fc79, #96e6a1)', // Air
        'linear-gradient(135deg, #f83600, #f9d423)', // Lightning
        'linear-gradient(135deg, #aa4b6b, #6b6b83, #3b8d99)', // Crystal
        'linear-gradient(135deg, #5f2c82, #49a09d)', // Shadow
        'linear-gradient(135deg, #f5f7fa, #c3cfe2)', // Light
        'linear-gradient(135deg, #0ba360, #3cba92)', // Nature
        'linear-gradient(135deg, #8e9eab, #eef2f3)'  // Metal
    ];
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCount++;
        
        // Get random element type
        const randomIndex = Math.floor(Math.random() * elementNames.length);
        
        // Add content and styling
        newElement.innerHTML = `<span class="element-number">${elementCount}</span> ${elementNames[randomIndex]}`;
        newElement.classList.add('dynamic-element');
        newElement.style.opacity = '0';
        newElement.style.transform = 'translateY(20px)';
        
        // Set background gradient based on element type
        newElement.style.background = elementGradients[randomIndex];
        newElement.style.color = '#fff';
        newElement.style.textShadow = '1px 1px 2px rgba(0,0,0,0.2)';
        
        // Add a click event to the element itself
        newElement.addEventListener('click', function() {
            this.classList.toggle('element-active');
            
            if (this.classList.contains('element-active')) {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
            } else {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.03)';
            }
        });
        
        // Add the element to the container
        elementsContainer.appendChild(newElement);
        
        // Animate element entrance
        setTimeout(() => {
            newElement.style.opacity = '1';
            newElement.style.transform = 'translateY(0)';
        }, 50);
        
        // Add a sound effect using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.type = 'sine';
            oscillator.frequency.value = 300 + (elementCount * 50) % 200;
            gainNode.gain.value = 0.1;
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.start();
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            // Audio context not supported or other audio error
            console.log("Audio not supported");
        }
    });
    
    removeElementBtn.addEventListener('click', function() {
        // Remove the last element if any exist
        const elements = elementsContainer.querySelectorAll('.dynamic-element');
        if (elements.length > 0) {
            const lastElement = elements[elements.length - 1];
            
            // Animate element removal
            lastElement.style.opacity = '0';
            lastElement.style.transform = 'translateY(20px)';
            
            // Remove element after animation completes
            setTimeout(() => {
                elementsContainer.removeChild(lastElement);
            }, 300);
            
            // Add a different sound effect for removal
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.value = 200;
                gainNode.gain.value = 0.1;
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.start();
                oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
                oscillator.stop(audioContext.currentTime + 0.5);
            } catch (e) {
                // Audio context not supported or other audio error
                console.log("Audio not supported");
            }
        }
    });
    
    // Add CSS class for text animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes textTransform {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
        }
        
        .text-transform-animation {
            animation: textTransform 0.7s ease-in-out;
        }
        
        .element-active {
            border-left: 4px solid white !important;
        }
        
        .highlight-exit {
            transition: all 0.3s ease;
            opacity: 0;
            transform: translateY(-10px);
        }
        
        header {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.7s, transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .dynamic-element {
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .element-number {
            display: inline-block;
            background: rgba(255,255,255,0.25);
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            border-radius: 50%;
            margin-right: 8px;
        }
        
        .footer-note {
            font-size: 0.9rem;
            color: #999;
        }
    `;
    document.head.appendChild(style);
});
