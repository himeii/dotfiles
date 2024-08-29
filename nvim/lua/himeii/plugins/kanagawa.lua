return {
	"rebelot/kanagawa.nvim",
	priority = 1000,
	lazy = false,
	config = function()
		require("kanagawa").setup({
			keywordStyle = { bold = true },
			functionStyle = { italic = true, bold = true },
			background = {
				dark = "dragon",
				light = "lotus",
			},
		})
		-- vim.cmd("colorscheme kanagawa-dragon")
	end,
}
