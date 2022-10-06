local utils = require("utils")

local overseer = utils.fn.require("overseer")

local scriptPath = utils.fn.root_pattern() .. "/.nvim/task/task.sh"

overseer.register_template({
	name = "preview",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "preview" },
		}
	end,
})

overseer.register_template({
	name = "test",
	builder = function()
		return {
			cmd = { scriptPath },
			args = { "test" },
		}
	end,
})
