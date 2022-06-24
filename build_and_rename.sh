#!/usr/bin/env sh

mkdir static

for kind in "customer" "admin" "driver"
do
  echo "Start build for ${kind}"

  export REACT_APP_MODE=${kind}
  npm run build:front

  if [ ${kind} = "customer" ]
  then
    npm run build:static
    npm run build:storybook
  fi

  mv build "./static/${kind}-build"

  echo "End of build for ${kind}"
done
