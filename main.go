package main

import (
	"embed"
	"fmt"
	"net/http"
	"strings"
)

//go:embed web/dist
var f embed.FS

var rootFolder = "web/dist"

func main() {
	fmt.Println("starting server on :5001 ....")

	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		path := request.URL.Path
		if path == "/" {
			path = "index.html"
		}

		path = strings.TrimPrefix(path, "/")

		mime := GetMimeType(path)

		if mime != "" {
			writer.Header().Set("Content-Type", mime)
		}

		file, err := f.ReadFile(fmt.Sprintf("%s/%s", rootFolder, path))
		if err != nil {
			writer.WriteHeader(404)
			eMessage := fmt.Errorf("failed to read file %s", err.Error())
			fmt.Printf(eMessage.Error())
			_, _ = writer.Write([]byte("not found"))
			return
		}

		_, err = writer.Write(file)
		if err != nil {
			writer.WriteHeader(501)
			eMessage := fmt.Errorf("failed to send file")
			fmt.Printf(eMessage.Error())

			return
		}
	})

	server := http.Server{
		Addr: ":5001",
	}

	err := server.ListenAndServe()
	if err != nil {
		fmt.Printf(err.Error())
		return
	}
}
