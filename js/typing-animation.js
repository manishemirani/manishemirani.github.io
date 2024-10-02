document.addEventListener('DOMContentLoaded', function() {
    const finalText = `I'm currently an independent researcher working towards brain-like foundation models. My work focuses on Adaptive computation, Continuous-Depth models, Optimization algorithms, and making black-box models transparent.

    I'm also huge fan of engineering side of AI, like training large models on GPU clusters and developing frameworks for analyzing models during inference.
As an independent researcher, I have to make the most of my 3090, so I've gotten into GPU programming too.

I'm always looking forward to team up with other researchers and I'm actively seeking sponsors, especially for more computing resources. If you're interested in any of this, let's talk.`;

    const typingElement = document.getElementById('typing-text');
    let currentText = "";
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function typeWriter() {
        if (currentIndex < finalText.length) {
            if (!isDeleting) {
                currentText += finalText[currentIndex];
                currentIndex++;
                if (Math.random() < 0.1) { // 10% chance to make a typo
                    currentText += String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Add random lowercase letter
                    isDeleting = true;
                }
            } else {
                currentText = currentText.slice(0, -1);
                if (currentText.length <= currentIndex - 1) {
                    isDeleting = false;
                }
            }

            typingElement.innerHTML = currentText.replace(/\n/g, '<br>') + '<span class="cursor blink">|</span>';
            
            const delay = isDeleting ? 8 : (Math.random() * 8 + 8);
            timeoutId = setTimeout(typeWriter, delay);
        }
    }

    typeWriter();
});