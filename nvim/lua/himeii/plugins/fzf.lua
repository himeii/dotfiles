return {
	"ibhagwan/fzf-lua",
	-- optional for icon support
	dependencies = { "nvim-tree/nvim-web-devicons" },
	config = function()
		-- calling `setup` is optional for customization
		local fzf = require("fzf-lua")
		fzf.setup({})
		fzf.register_ui_select()
	end,
}
