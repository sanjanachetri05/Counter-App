// Get the count from LocalStorage or start at 0
let count = localStorage.getItem('myCount') ? parseInt(localStorage.getItem('myCount')) : 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Initialize the display
updateDisplay();

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if (styles.contains("btn-decrease")) {
            count--;
        } else if (styles.contains("btn-increase")) {
            count++;
        } else if (styles.contains("btn-reset")) {
            count = 0;
        }

        // Save to Local Storage
        localStorage.setItem('myCount', count);
        
        updateDisplay();
    });
});

// Keyboard shortcuts: ArrowUp increases, ArrowDown decreases, R resets
document.addEventListener('keydown', (e) => {
    // ignore if modifier keys used
    if (e.altKey || e.ctrlKey || e.metaKey) return;

    const key = e.key.toLowerCase();
    if (key === 'arrowup') {
        count++;
    } else if (key === 'arrowdown') {
        count--;
    } else if (key === 'r') {
        count = 0;
    } else {
        return; // not a handled key
    }

    localStorage.setItem('myCount', count);
    updateDisplay();
    // prevent default arrow scroll behavior
    e.preventDefault();
});

function updateDisplay() {
    // Change color based on positive/negative
    if (count > 0) value.style.color = "#2ed573";
    if (count < 0) value.style.color = "#ff4757";
    if (count === 0) value.style.color = "#2f3542";
    
    value.textContent = count;
}