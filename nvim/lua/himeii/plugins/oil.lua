local visible = false
return {
	"stevearc/oil.nvim",
	dependencies = { "echasnovski/mini.icons", opts = {} },
	config = function()
		require("oil").setup({
			default_file_explorer = true,
			columns = { "icon" },
			delete_to_trash = true,
			watch_for_changes = true,
			skip_confirm_for_simple_edits = true,
			preview = {},
			float = {
				padding = 1,
				max_width = vim.api.nvim_win_get_width(0) - 20,
				max_height = vim.api.nvim_win_get_height(0) - 10,
			},
		})
	end,
	keys = {
		{
			"_",
			function()
				local oil = require("oil")
				local util = require("oil.util")
				oil.toggle_float()
				util.run_after_load(0, function()
					oil.open_preview()
				end)
			end,
			desc = "File Browser",
		},
		{
			">",
			function()
				local oil = require("oil")
				visible = not visible

				if visible then
					oil.set_columns({ "icon", "mtime", "size", "permissions" })
				else
					oil.set_columns({ "icon" })
				end

				oil.toggle_hidden()
			end,
		},
	},
}
