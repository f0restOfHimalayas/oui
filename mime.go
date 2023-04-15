package main

import "strings"

var extensionsMap = map[string]string{
	"html":  "text/html",
	"htm":   "text/html",
	"json":  "application/json",
	"css":   "text/css",
	"mjs":   "text/javascript",
	"js":    "text/javascript",
	"png":   "image/png",
	"txt":   "text/plain",
	"xhtml": "application/xhtml+xml",
	"xml":   "application/xml",
	"svg":   "image/svg+xml",
	"jpg":   "image/jpeg",
	"jpeg":  "image/jpeg",
}

func GetMimeType(path string) string {
	var splits = strings.Split(path, ".")
	var extension = splits[len(splits)-1]
	if val, ok := extensionsMap[extension]; ok {
		return val
	}
	return ""
}
