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

cp ./countly/api/config.sample.js countly/api/config.js
cp ./countly/frontend/express/config.sample.js countly/frontend/express/config.js

cp ./countly/frontend/express/public/javascripts/countly/countly.config.sample.js countly/frontend/express/public/javascripts/countly/countly.config.js

sudo start countly-supervisor