if [ "$1" = "preview" ]; then
	pnpm docs:dev
elif [ "$1" = "test" ]; then
	pnpm docs:build
	pnpm docs:serve
fi
