sudo stop countly-supervisor

cd ..
cd api
cd node_modules
sudo mv time/ ../../../
cd ..
cd ..

git fetch --all
git reset --hard origin/master

cd ..
sudo mv time ./countly/api/node_modules/

sudo start countly-supervisor