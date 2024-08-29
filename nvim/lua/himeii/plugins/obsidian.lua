return {
	"epwalsh/obsidian.nvim",
	version = "*", -- recommended, use latest release instead of latest commit
	lazy = true,
	event = {
		-- If you want to use the home shortcut '~' here you need to call 'vim.fn.expand'.
		-- E.g. "BufReadPre " .. vim.fn.expand "~" .. "/my-vault/*.md"
		-- refer to `:h file-pattern` for more examples
		"BufReadPre "
			.. vim.fn.expand("~")
			.. "/vaults/thevault/*.md",
		"BufNewFile " .. vim.fn.expand("~") .. "/vaults/thevault/*.md",
	},
	dependencies = {
		"nvim-lua/plenary.nvim",
	},
	opts = {
		ui = {
			conceallevel = 1,
		},
		dir = "~/vaults/thevault/",
		daily_notes = {
			folder = "dailies",
			default_tags = { "daily-notes", string.lower(tostring(os.date("%B"))), os.date("y%Y") },
		},
	},
}
