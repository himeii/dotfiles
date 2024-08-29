vim.opt.cursorline = true
vim.opt.cursorlineopt = "number"

vim.opt.splitkeep = "screen"
vim.opt.fillchars:append(",eob: ")
vim.opt.scrolloff = 10
vim.opt.splitbelow = true
vim.opt.splitright = true

vim.opt.mouse = "a"
vim.opt.guicursor =
	"n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50,a:blinkwait700-blinkoff400-blinkon250-Cursor/lCursor,sm:block-blinkwait175-blinkoff150-blinkon175"
vim.opt.cursorline = true

vim.opt.number = true
vim.opt.encoding = "UTF-8"

vim.opt.syntax = "enable"
vim.opt.termguicolors = true

vim.opt.clipboard:append("unnamedplus")

vim.opt.background = "dark"
vim.opt.ignorecase = true
vim.opt.cmdheight = 0

vim.opt.splitright = true
vim.opt.splitbelow = true

vim.opt.wrap = false

vim.opt.conceallevel = 2

vim.opt.tabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.softtabstop = 2

vim.opt.smartindent = true
vim.opt.smartcase = true

vim.opt.hlsearch = false
vim.opt.incsearch = true

vim.opt.signcolumn = "yes"
vim.opt.completeopt = "menu,menuone,noselect,noinsert"

vim.o.backspace = "indent,eol,start"

vim.o.wildmenu = true
vim.o.wildmode = "longest,list,full"

vim.o.wrapscan = true

vim.o.autoread = true
vim.o.swapfile = false
vim.o.backup = true
vim.o.backupdir = vim.fn.stdpath("state") .. "/backup/"
vim.fn.mkdir(vim.o.backupdir, "p")
vim.o.backupskip = ""
vim.o.directory = vim.fn.stdpath("state") .. "/swap/"
vim.fn.mkdir(vim.o.directory, "p")
vim.o.updatecount = 100
vim.o.undofile = true
vim.o.undodir = vim.fn.stdpath("state") .. "/undo/"
vim.fn.mkdir(vim.o.undodir, "p")
vim.o.modeline = false

vim.o.errorbells = false
vim.o.visualbell = false

vim.cmd([[let &t_Cs = "\e[4:3m"]])
vim.cmd([[let &t_Ce = "\e[4:0m"]])
