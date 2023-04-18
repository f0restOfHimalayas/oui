### About

Helps to write OpenAPI files without struggling with YAML syntax

### Project structure

/web

contains the website for the project. It is written in [svelte](https://kit.svelte.dev/)
The final build of this project is embedded into the go binary. This binary can be taken to anywhere and executed
directly.

server is written `golang` that runs by default on port 5001

### Build and run project

```bash
make build #builds the project
```

```bash
make pack #builds the project and packs the binary to reduce size. upx needs to be in path
```

```bash
./open-api-gui -port=5002
```

## Project status

Still in development
