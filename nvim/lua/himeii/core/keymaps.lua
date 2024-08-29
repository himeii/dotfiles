vim.g.mapleader = " "
vim.g.localleader = ","

local function modekeymap(mode)
	return function(lhs, rhs, desc)
		vim.keymap.set(mode, lhs, rhs, { desc = desc })
	end
end

local v = modekeymap("v")
local n = modekeymap("n")
local i = modekeymap("i")
local t = modekeymap("t")

i("jj", "<Esc>", "Esc")
v("p", '"_dP')

n("<leader>q", "<cmd>bd<CR>", "Close Buffer")
n("q", "<cmd>bd<CR>", "Close Buffer")
n("<leader>w", "<cmd>bp|bd #<CR>", "Close Buffer; Retain Split")

v("<", "<gv")
v(">", ">gv")

n("<leader>t", "<cmd>ToggleTerm direction=float<CR>", "Toggle Terminal")
n("<leader>tv", "<cmd>ToggleTerm direction=vertical<CR>", "Toggle Terminal")
n("<leader>th", "<cmd>ToggleTerm direction=horizontal<CR>", "Toggle Terminal")

t("<C-t>", "<cmd>ToggleTerm<CR>")

vim.keymap.set({ "n", "o", "x" }, "<s-h>", "^", { desc = "Jump to beginning of line" })
vim.keymap.set({ "n", "o", "x" }, "<s-l>", "g_", { desc = "Jump to end of line" })

-- Move block
v("J", ":m '>+1<CR>gv=gv", "Move Block Down")
v("K", ":m '<-2<CR>gv=gv", "Move Block Up")

n("<leader>f", "<cmd>FzfLua files<CR>", "Find files")
n("<leader>r", "<cmd>FzfLua grep_project<CR>", "Live Grep")
n("gd", "<cmd>Lspsaga goto_definition<CR>", "Go To Definition")
n("GD", "<cmd>Lspsaga peek_definition<CR>", "Peek Definition")
n("gr", "<cmd>lua vim.lsp.buf.references()<CR>", "References")
n("GR", "<cmd>Lspsaga finder<CR>", "References")

n("<leader>bb", "<cmd>FzfLua buffers<CR>", "Buffers")
n("<leader>g", "<cmd>LazyGit<CR>", "Git")

n("<Left>", "<C-w><C-h>", "Move to left window")
n("<Down>", "<C-w><C-j>", "Move to lower window")
n("<Up>", "<C-w><C-k>", "Move to upper window")
n("<Right>", "<C-w><C-l>", "Move to right window")
