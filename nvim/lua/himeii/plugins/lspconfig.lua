return {
	"neovim/nvim-lspconfig",
	cmd = { "LspInfo", "LspInstall", "LspStart" },
	event = { "BufReadPre", "BufNewFile" },
	dependencies = {
		"hrsh7th/cmp-nvim-lsp",
		"williamboman/mason.nvim",
		"williamboman/mason-lspconfig.nvim",
	},
	config = function()
		local lsp_zero = require("lsp-zero")

		local lsp_attach = function(client, bufnr)
			local opts = { buffer = bufnr }

			vim.keymap.set("n", "K", "<cmd>lua vim.lsp.buf.hover()<cr>", opts)
			vim.keymap.set("n", "gd", "<cmd>lua vim.lsp.buf.definition()<cr>", opts)
			vim.keymap.set("n", "gD", "<cmd>lua vim.lsp.buf.declaration()<cr>", opts)
			vim.keymap.set("n", "gi", "<cmd>lua vim.lsp.buf.implementation()<cr>", opts)
			vim.keymap.set("n", "go", "<cmd>lua vim.lsp.buf.type_definition()<cr>", opts)
			vim.keymap.set("n", "gr", "<cmd>lua vim.lsp.buf.references()<cr>", opts)
			vim.keymap.set("n", "gs", "<cmd>lua vim.lsp.buf.signature_help()<cr>", opts)
			vim.keymap.set("n", "<C-r>", "<cmd>lua vim.lsp.buf.rename()<cr>", opts)
			vim.keymap.set("n", "<C-a>", "<cmd>lua vim.lsp.buf.code_action()<cr>", opts)
		end

		lsp_zero.extend_lspconfig({
			sign_text = {
				hint = " ",
				info = " ",
				warn = " ",
				error = "󰅚 ",
			},
			float_border = "rounded",
			lsp_attach = lsp_attach,
			capabilities = require("cmp_nvim_lsp").default_capabilities(),
		})

		require("mason-lspconfig").setup({})
		require("mason-lspconfig").setup_handlers({
			function(server_name) -- default handler (optional)
				require("lspconfig")[server_name].setup({})
			end,

			["vtsls"] = function()
				require("lspconfig").vtsls.setup({
					settings = {
						typescript = {
							inlayHints = {
								parameterNames = { enabled = "all" },
								parameterTypes = { enabled = true },
								variableTypes = { enabled = true },
								propertyDeclarationTypes = { enabled = true },
								functionLikeReturnTypes = { enabled = true },
								enumMemberValues = { enabled = true },
							},
						},
					},
				})
			end,
		})

		vim.lsp.inlay_hint.enable(true)
	end,
}
