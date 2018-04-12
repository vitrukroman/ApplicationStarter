# Clone repository
```
git clone --recursive git@github.com:vitrukroman/ApplicationStarter.git &&
cd ApplicationStarter &&
git submodule sync --recursive &&
git submodule update --init --recursive &&
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'
```

# Push to this repo and submodules
```
git push --recurse-submodules=on-demand
```


# Before start
1
```
cd NodeAPI && npm i && cd ..
```
2
```
cd IsomorphicReactApp && npm i && cd ..
```

3 Create .env files for each project based on .env.example and fulfil ENV variables with real values

4 Generate TLS certificates and put them into **`private`** folder of **IsomorphicReactApp** project
```
server.crt
server.key
```

# Start App for development
```
docker-compose -f docker-compose.dev.yml up
```

# Start App for production
```
docker-compose up --build
```