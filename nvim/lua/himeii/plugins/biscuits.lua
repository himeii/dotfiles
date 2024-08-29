return {
	"code-biscuits/nvim-biscuits",
	dependencies = {
		"nvim-treesitter/nvim-treesitter",
		run = ":TSUpdate",
	},
	config = function()
		require("nvim-biscuits").setup({
			cursor_line_only = true,
			default_config = { prefix_string = "󱃖 ", max_length = 4, trim_by_words = true },
		})
	end,
}
