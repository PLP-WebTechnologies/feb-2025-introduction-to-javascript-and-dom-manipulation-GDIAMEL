// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // ====== TEXT MANIPULATION ======
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    
    // Array of sample texts to cycle through
    const sampleTexts = [
        "This text was changed using JavaScript!",
        "DOM manipulation is powerful!",
        "JavaScript makes websites interactive!",
        "You can dynamically update content without page reload!",
        "I am Samuel Emmanuel Kimaro."
    ];
    
    let currentTextIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        // Update to the next text in the array
        currentTextIndex = (currentTextIndex + 1) % sampleTexts.length;
        dynamicText.textContent = sampleTexts[currentTextIndex];
    });
    
    // ====== STYLE MANIPULATION ======
    const styleText = document.getElementById('style-text');
    const changeColorBtn = document.getElementById('change-color-btn');
    const toggleHighlightBtn = document.getElementById('toggle-highlight-btn');
    const changeThemeBtn = document.getElementById('change-theme-btn');
    
    // Colors to cycle through
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#000000'];
    let currentColorIndex = 0;
    
    changeColorBtn.addEventListener('click', function() {
        // Change text color
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        styleText.style.color = colors[currentColorIndex];
    });
    
    toggleHighlightBtn.addEventListener('click', function() {
        // Toggle highlight class
        styleText.classList.toggle('highlight');
    });
    
    changeThemeBtn.addEventListener('click', function() {
        // Toggle between light and dark theme
        const body = document.body;
        
        if (body.style.backgroundColor === 'rgb(51, 51, 51)' || body.style.backgroundColor === '#333') {
            // Switch to light theme
            body.style.backgroundColor = '#fff';
            body.style.color = '#333';
        } else {
            // Switch to dark theme
            body.style.backgroundColor = '#333';
            body.style.color = '#fff';
        }
    });
    
    // ====== ELEMENT CREATION & REMOVAL ======
    const elementsContainer = document.getElementById('elements-container');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    
    let elementCount = 0;
    
    addElementBtn.addEventListener('click', function() {
        // Create a new element
        const newElement = document.createElement('div');
        elementCount++;
        
        // Add content and styling
        newElement.textContent = `Element ${elementCount}`;
        newElement.classList.add('dynamic-element');
        
        // Add a click event to the element itself
        newElement.addEventListener('click', function() {
            // Toggle a different background color when clicked
            if (this.style.backgroundColor === 'lightgreen') {
                this.style.backgroundColor = '';
            } else {
                this.style.backgroundColor = 'lightgreen';
            }
        });
        
        // Add the element to the container
        elementsContainer.appendChild(newElement);
    });
    
    removeElementBtn.addEventListener('click', function() {
        // Remove the last element if any exist
        const elements = elementsContainer.querySelectorAll('.dynamic-element');
        if (elements.length > 0) {
            elementsContainer.removeChild(elements[elements.length - 1]);
        }
    });
});