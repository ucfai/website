#!/bin/bash
JEKYLL_VERSION=3.6

docker run --rm \
  -v $(pwd):/srv/jekyll \
  -v $(pwd)/vendor/bundle:/usr/local/bundle \
  -p 4000:4000 \
  -p 80:80 \
  jekyll/jekyll:$JEKYLL_VERSION \
  bash -c "bundle install; jekyll s"
