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
		title: "Reddit",
		links: [
			{
				label: "r/startpages",
				value: "https://www.reddit.com/r/startpages/",
			},
			{
				label: "r/unixporn",
				value: "https://www.reddit.com/r/unixporn/",
			},
			{
				label: "r/rainmeter",
				value: "https://www.reddit.com/r/rainmeter/",
			},
			{
				label: "r/AnimalsBeingDerps",
				value: "https://www.reddit.com/r/AnimalsBeingDerps/",
			},
		]
	},
	{
		title: "3D Modelling",
		links: [
			{
				label: "Blender",
				value: "https://www.blender.org/",
			},
			{
				label: "BlenderGuru",
				value: "https://www.blenderguru.com/",
			},
			{
				label: "Poliigon",
				value: "https://www.poliigon.com/",
			},
			{
				label: "Blender tutorial",
				value: "https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U",
			},
			{
				label: "The other Blender tutorial",
				value: "https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1",
			},
		]
	},
	{
		title: "Design",
		links: [
			{
				label: "PixlrX",
				value: "https://pixlr.com/x/",
			},
			{
				label: "AI Image Enlarger",
				value: "https://bigjpg.com/en",
			},
			{
				label: "Img to Svg Converter",
				value: "https://picsvg.com/",
			},
			{
				label: "Affinity",
				value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/",
			},
			{
				label: "Affinity - YT",
				value: "https://www.youtube.com/c/AffinityRevolution/playlists",
			},
		]
	},
	{
		title: "Music",
		links: [
			{
				label: "i wanna be a cowboy",
				value: "https://www.youtube.com/watch?v=8zWz92f_HGs",
			},
			{
				label: "let the bodies hit the floor",
				value: "https://www.youtube.com/watch?v=b--VKaCB9u0",
			},
			{
				label: "Nobody Kanna Cross It",
				value: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
			},
			{
				label: "Smug Dancin",
				value: "https://www.youtube.com/watch?v=eNZ9Od1jQ4Q",
			},
			{
				label: "Utamaru - The Sanctified Mind Cover",
				value: "https://www.youtube.com/watch?v=MHlJKLlS07U",
			},
		]
	},
	{
		title: "Sauce",
		links: [
			{
				label: "Pictures - DeathAndMilk",
				value: "https://www.instagram.com/deathandmilk_/",
			},
			{
				label: "Icons - FontAwesome",
				value: "https://fontawesome.com/icons",
			},
			{
				label: "Text Flicker - CodeMyUI",
				value: "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/",
			},
			{
				label: "Wave Animation - mburakerman",
				value: "https://codepen.io/mburakerman/pen/eRZZEv",
			},
			{
				label: "Da real sauce ԅ(♡﹃♡ԅ)",
				value: "https://www.youtube.com/watch?v=qr89xoZyE1g",
			},
			{
				label: "Even more real sauce ( ͡° ͜ʖ ͡°)",
				value: "https://www.youtube.com/watch?v=VLhJOd_TFiI",
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
		name: "pretty chill",
		colors: {
			"--bg-color": "#397d76",
			"--default-color": "#f1daba",
			"--accent-color": "#c5bdb5",
			"--accent-color2": "#93a662"
		}
	}
]