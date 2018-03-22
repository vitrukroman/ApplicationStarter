Clone repository
```
git clone --recursive git@github.com:vitrukroman/ApplicationStarter.git &&
cd ApplicationStarter &&
git submodule sync --recursive &&
git submodule update --init --recursive &&
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'
```

Push to this repo and submodules
```
git push --recurse-submodules=on-demand
```


Before start
```
cd NodeAPI && npm i && cd ..
```
```
cd IsomorphicReactApp && npm i && cd ..
```

Start App for development
```
docker-compose -f docker-compose.dev.yml up --build
```