sudo stop countly-supervisor

cd ..
cd api
cd node_modules
sudo mv time/ ../../../
cd ..
cd ..

git add -A
git commit -m "$1"
git pull -u origin master

cd ..
sudo mv time ./countly/api/node_modules/

sudo start countly-supervisor