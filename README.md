Clone repository
```
git clone --recursive git@github.com:vitrukroman/OfflineKaraoke.git &&
cd OfflineKaraoke &&
git submodule sync --recursive &&
git submodule update --init --recursive &&
git submodule foreach -q --recursive 'git checkout $(git config -f $toplevel/.gitmodules submodule.$name.branch || echo master)'
```

Push to this repo and submodules
```
git push --recurse-submodules=on-demand
```
