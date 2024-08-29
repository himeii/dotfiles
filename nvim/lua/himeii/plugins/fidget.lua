return {
	"j-hui/fidget.nvim",
	config = function()
		require("fidget").setup({
			progress = {
				display = {
					render_limit = 5,
					done_ttl = 10,
				},
			},
			notification = { window = { winblend = 0 }, override_vim_notify = true },
		})
	end,
}
