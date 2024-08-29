return {
	"b0o/incline.nvim",
	config = function()
		local helpers = require("incline.helpers")
		local devicons = require("nvim-web-devicons")
		require("incline").setup({
			window = {
				padding = 0,
				margin = { horizontal = 0 },
			},
			render = function(props)
				local filename = vim.fn.fnamemodify(vim.api.nvim_buf_get_name(props.buf), ":t")
				if filename == "" then
					filename = "[No Name]"
				end
				local ft_icon, ft_color = devicons.get_icon_color(filename)
				local modified = vim.bo[props.buf].modified
				local modes = {
					i = { icon = "󰬐 " },
					n = { icon = "󰬕 " },
					v = { icon = "󰬝 " },
					V = { icon = "󰬝 " },
					t = { icon = " " },
					s = { icon = "󰬚 " },
				}
				return {
					ft_icon and { ft_icon, " ", guifg = helpers.contrast_color(ft_color) } or "",
					modes[vim.fn.mode()].icon or "",
					{ filename, gui = modified and "bold,italic" or "bold" },
					" ",
				}
			end,
		})
	end,
	event = "VeryLazy",
}
-- ["vim-command-mode"] = "61933",
--   ["vim-insert-mode"] = "61934",
--   ["vim-normal-mode"] = "61935",
--   ["vim-replace-mode"] = "61936",
--   ["vim-select-mode"] = "61937",
--   ["vim-terminal-mode"] = "61938",
--   ["vim-visual-mode"] = "61939
