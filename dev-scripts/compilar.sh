#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CDIR=$( pwd )
cd $DIR/../themes/teste-base
docker run -it -v `pwd`:/compilar node:20 bash -c "cd compilar && npm install && npm run production"
