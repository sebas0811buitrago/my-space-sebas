const links = document.querySelectorAll<HTMLAnchorElement>(".navigation-item")

const addActiveStyles = (link: HTMLAnchorElement) => {
	link.classList.add("text-primary")
	link.classList.add("font-bold")
	link.querySelector("hr")?.classList.remove("w-6")
	link.querySelector("hr")?.classList.add("w-14")
}

const removeActiveStyles = (link: HTMLAnchorElement) => {
	link.classList.remove("text-primary")
	link.classList.remove("font-bold")
	link.querySelector("hr")?.classList.remove("w-14")
	link.querySelector("hr")?.classList.add("w-6")
}

const updateLinkStylesWhenIsActive = () => {
	const currentPath = `${window.location.pathname}${window.location.hash ?? ""}`

	links.forEach((link) => {
		const isHomeLink = "isHomeLink" in link.dataset

		const isCurrentPath = link.getAttribute("href") === currentPath
		const isCurrentPathHome = Boolean(isHomeLink) && currentPath === "/"

		if (isCurrentPath || isCurrentPathHome) {
			addActiveStyles(link)
			return
		}
		removeActiveStyles(link)
	})
}

updateLinkStylesWhenIsActive()

window.addEventListener("hashchange", updateLinkStylesWhenIsActive)
