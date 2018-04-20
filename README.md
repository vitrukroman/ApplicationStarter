# Clone repository
```
git clone git@github.com:vitrukroman/ApplicationStarter.git &&
cd ApplicationStarter &&
git clone git@github.com:vitrukroman/IsomorphicReactApp.git
git clone git@github.com:vitrukroman/NodeAPI.git &&
cp NodeAPI/.env.example NodeAPI/.env &&
cp IsomorphicReactApp/.env.example IsomorphicReactApp/.env
```

# Before start

1 Fullfill ENV variables in **`.env`** files with real values

2 Generate TLS certificates and put them into **`private`** folder of **IsomorphicReactApp** project
```
server.crt
server.key
```

# Start App for development
```
cd NodeAPI 
npm install
cd ..
cd IsomorphicReactApp
npm install
cd ..
docker-compose -f docker-compose.dev.yml up
```

# Start App for production
```
docker-compose up --build
```
