---@diagnostic disable: undefined-global
local wezterm = require("wezterm")
local config = wezterm.config_builder()

config = {
	automatically_reload_config = true,
	color_scheme = "tokyonight_night",
	window_background_opacity = 0.95,
	macos_window_background_blur = 20,
	win32_system_backdrop = "Acrylic",
	enable_tab_bar = false,
	font_size = 13,
	window_decorations = "RESIZE",
	font = wezterm.font_with_fallback({ "CommitMono Nerd Font", weight = "Regular" }),
	freetype_load_target = "Light",
	max_fps = 100,
	animation_fps = 30,
	font_rules = {
		{
			intensity = "Normal",
			italic = true,
			font = wezterm.font({ family = "VictorMono Nerd Font", italic = true, weight = "Medium" }),
		},
		{
			intensity = "Bold",
			italic = true,
			font = wezterm.font({ family = "VictorMono Nerd Font", italic = true, weight = "Bold" }),
		},
	},
	window_padding = {
		left = 0,
		right = 0,
		top = 0,
		bottom = 0,
	},
}

return config
