lint:
	go vet ./...

format:
	go fmt ./...

build:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/engine ./main.go

install:
	go vet ./...
	go fmt ./...
	rm -rf ./bin
	go build -o ./bin/engine ./main.go
	mkdir -p ~/bin
	cp ./bin/engine ~/bin/
	chmod +x ~/bin/engine
	export PATH="$(HOME)/bin:$(PATH)"
