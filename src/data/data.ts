export type dataElem = {
	label: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: dataElem[];
}
export const links: linkGroup[] = [
	{
		title: "Games",
		links: [
			{
				label: "Best Metroidvania",
				value: "https://www.hollowknight.com/",
			},
			{
				label: "GOTY",
				value: "https://store.steampowered.com/app/367520/Hollow_Knight/",
			},
			{
				label: "Best Story Game",
				value: "https://www.gog.com/en/game/hollow_knight",
			},
			{
				label: "Best Platformer",
				value: "https://www.humblebundle.com/store/hollow-knight",
			},
		]
	},
	{
		title: "Information",
		links: [
			{
				label: "Wiki",
				value: "https://hollowknight.fandom.com/wiki/Hollow_Knight_Wiki",
			},
			{
				label: "Lore",
				value: "https://www.youtube.com/channel/UCTvH45HvnOzqXvfNJqdc3xg",
			},
			{
				label: "A Nice Town",
				value: "https://hollowknight.fandom.com/wiki/Dirtmouth",
			},
			{
				label: "Worst City",
				value: "https://hollowknight.fandom.com/wiki/City_of_Tears",
			},
		]
	},
	{
		title: "Celebrities",
		links: [
			{
				label: "Mighty Hero",
				value: "https://hollowknight.fandom.com/wiki/Zote",
			},
			{
				label: "Great Author",
				value: "https://hollowknight.fandom.com/wiki/Bretta",
			},
			{
				label: "Kill stealing wimp",
				value: "https://hollowknight.fandom.com/wiki/Knight",
			},
		]
	},
	{
		title: "My Stuff",
		links: [
			{
				label: "Github",
				value: "https://github.com/JeremyToler",
			},
			{
				label: "My Other Github",
				value: "https://github.com/lostdutchman",
			},
			{
				label: "Lost Dutchman Software",
				value: "http://lostdutchmansoftware.com/",
			},
			{
				label: "Studio Peaches",
				value: "https://studiopeaches.com/",
			},
			{
				label: "Portfolio",
				value: "http://jeremytoler.github.io/",
			},
		]
	},
	{
		title: "Sources",
		links: [
			{
				label: "Fluidity - Source of this start page",
				value: "https://github.com/PrettyCoffee/fluidity",
			},
			{
				label: "Icons - FontAwesome",
				value: "https://fontawesome.com/icons",
			},
			{
				label: "Wave Animation - mburakerman",
				value: "https://codepen.io/mburakerman/pen/eRZZEv",
			},
		]
	},
]

export const searchEngines: dataElem[] = [
	{
		label: "DuckDuckGo",
		value: "duckduckgo.com/",
	},
	{
		label: "Google",
		value: "google.com/search",
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[0].value,
	fastForward: {
		"deepl": "https://deepl.com/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"gitlab": "https://gitlab.com/",
		"youtube": "https://youtube.com/",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string;
	colors: colorsType;
}

export const themes: Theme[] = [
	{
		name: "DeathAndMilk",
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#FFB4E6",
			"--accent-color2": "#B4FFE6",
		},
	},
	{
		name: "MilkAndDeath",
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#B4FFE6",
			"--accent-color2": "#FFB4E6",
		},
	},
	{
		name: "Pop!OS",
		colors: {
			"--bg-color": "#333136",
			"--default-color": "#2BC5EB",
			"--accent-color": "#FCD307",
			"--accent-color2": "#2BC5EB",
		},
	},
	{
		name: "Dark Souls",
		colors: {
			"--bg-color": "#32323C",
			"--default-color": "#A0A08C",
			"--accent-color": "#9A6650",
			"--accent-color2": "#461E28",
		},
	},
	{
		name: "S.E.Lain",
		colors: {
			"--bg-color": "#0a1a25",
			"--default-color": "#a6b7ab",
			"--accent-color": "#94656b",
			"--accent-color2": "#57182e"
		}
	},
	{
		name: "Kitties",
		colors: {
			"--bg-color": "#495662",
			"--default-color": "#d1f1fa",
			"--accent-color": "#80aad4",
			"--accent-color2": "#e8a9b7"
		}
	},
	{
		name: "Pretty Chill",
		colors: {
			"--bg-color": "#397d76",
			"--default-color": "#f1daba",
			"--accent-color": "#c5bdb5",
			"--accent-color2": "#93a662"
		}
	}
]