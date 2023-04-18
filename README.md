Helps to write OpenAPI files without headache

## Project structure

/web

contains the website for the project. It is written in [svelte](https://kit.svelte.dev/)
The final build of this project is embedded in the go binary

server is `main.go` that runs by default on port 5001
```bash
make build #builds the project
```
```bash
make pack #builds the project and packs the binary to reduce size. upx needs to be in path
```
