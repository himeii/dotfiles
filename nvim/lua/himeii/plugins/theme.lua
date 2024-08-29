return {
	"folke/tokyonight.nvim",
	lazy = false,
	priority = 1000,
	config = function()
		require("tokyonight").setup({
			style = "night",
			dim_inactive = true,
			styles = {
				functions = { bold = true },
			},
		})
		vim.cmd("colorscheme tokyonight")
	end,
}
