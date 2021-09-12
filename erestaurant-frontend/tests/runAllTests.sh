#!/bin/bash

cd "$(dirname "$0")"
node homePageTest.js
node customerLoginPageTest.js
node staffLoginPageTest.js
node registerPageTest.js
