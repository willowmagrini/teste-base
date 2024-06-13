#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CDIR=$( pwd )
cd $DIR/../themes
zip -r ../zips/teste-base.zip teste-base -x "teste-base/node_modules/*"
