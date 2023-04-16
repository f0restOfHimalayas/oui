.PHONY : help clean build run pack all

help:
	echo "help: available targets: clean, build, run, pack, all"

clean:
	rm open-api-gui

build:
	go build -ldflags="-s -w" -o open-api-gui main.go mime.go

run:
	go run -ldflags="-s -w" -o open-api-gui main.go mime.go

pack:
	$(MAKE) build
	upx open-api-gui

all:
	GOOS=linux GOARCH=arm go build -o open-api-gui-linux-arm main.go mime.go
	GOOS=linux GOARCH=arm64 go build -o open-api-gui-linux-arm64 main.go mime.go
	GOOS=freebsd GOARCH=386 go build -o open-api-gui-breebsd-386 main.go mime.go
	GOOS=windows GOARCH=amd64 go build -o open-api-gui-win-64 main.go mime.go
	GOOS=windows GOARCH=arm64 go build -o open-api-gui-win-arm64 main.go mime.go
