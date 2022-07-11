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
		name: "Hornet",
		colors: {
			"--bg-color": "#121b2a",
			"--default-color": "#ffffff",
			"--accent-color": "#5e182a",
			"--accent-color2": "#d6c4c8",
		},
	},
	{
		name: "Radiance",
		colors: {
			"--bg-color": "#ad6d51",
			"--default-color": "#ffffff",
			"--accent-color": "#e8b983",
			"--accent-color2": "#e8966a",
		},
	},
	{
		name: "Crystal Peaks",
		colors: {
			"--bg-color": "#131230",
			"--default-color": "#dcaedc",
			"--accent-color": "#7f5faa",
			"--accent-color2": "#3e3993",
		},
	},
	{
		name: "City of Tears",
		colors: {
			"--bg-color": "#121b2a",
			"--default-color": "#ffffff",
			"--accent-color": "#2e2961",
			"--accent-color2": "#326f8b",
		},
	},
	{
		name: "Greenpath",
		colors: {
			"--bg-color": "#153960",
			"--default-color": "#ffffff",
			"--accent-color": "#538d60",
			"--accent-color2": "#ec721f"
		}
	},
	{
		name: "Grimm",
		colors: {
			"--bg-color": "#231b26",
			"--default-color": "#c2b0ac",
			"--accent-color": "#a32e4b",
			"--accent-color2": "#df717c"
		}
	},
	{
		name: "The Hive",
		colors: {
			"--bg-color": "#703e3c",
			"--default-color": "#fed173",
			"--accent-color": "#ff9e53",
			"--accent-color2": "#ec711e"
		}
	}
]