// Confetti function
function createConfetti() {
	const container = document.getElementById('confetti-container');
	const colors = ['#f39c12', '#e74c3c', '#2ecc71', '#3498db', '#9b59b6'];

	for (let i = 0; i < 100; i++) {
		const confettiPiece = document.createElement('div');
		confettiPiece.className = 'confetti-piece';
		confettiPiece.style.left = Math.random() * 100 + 'vw';
		confettiPiece.style.animationDuration = Math.random() * 2 + 2 + 's';
		confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		confettiPiece.style.opacity = Math.random() + 0.5; // Random opacity
		container.appendChild(confettiPiece);
	}

	// Remove confetti after animation
	setTimeout(() => {
		container.innerHTML = '';
	}, 4000);
}

// Trigger confetti on page load
window.onload = () => {
	createConfetti();
};

// Ticket flip functionality
document.getElementById('ticket-flip').addEventListener('click', function () {
	this.classList.toggle('flip--flipped');
});
