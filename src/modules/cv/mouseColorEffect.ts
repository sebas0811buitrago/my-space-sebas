const root = document.getElementById("root")!
const cvBackground = document.getElementById("cv-background")!
root.addEventListener("mousemove", (event) => {
	const { clientX: x, clientY: y } = event
	cvBackground.style.background = `radial-gradient(400px at ${x}px ${y}px, hsla(24, 100%, 70%, 0.1), transparent 80%)`
})
