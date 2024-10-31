const cvInfo = document.querySelectorAll<HTMLElement>("[data-cv-info]")

const updateHash = (newHash: string) => {
	if (!newHash) return
	window.location.hash = newHash
}

const observer = new IntersectionObserver(
	(entries) => {
		console.log(entries)

		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				updateHash((entry.target as HTMLElement).dataset.cvInfo ?? "")
			}
		})
	},
	{
		threshold: 0.6,
	}
)

const init = () => {
	if (!cvInfo) return
	cvInfo.forEach((info) => {
		observer.observe(info)
	})
}

init()
