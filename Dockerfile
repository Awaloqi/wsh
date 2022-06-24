# Stage1 for Builder
FROM node:12.18.3-alpine3.12 as builder

RUN apk add --no-cache git chromium

# copy the package-lock.json, package.json to install dependencies
COPY package-lock.json package.json /app/
WORKDIR /app

ARG REACT_APP_STRIPE_PUBLIC_KEY
ARG REACT_APP_GOOGLE_PLACES_API_KEY
ARG REACT_APP_SENTRY_DSN
ARG REACT_APP_POS_DISCOUNT_PASSWORDS
ARG REACT_APP_GOOGLE_ANALYTICS_ID
ARG REACT_APP_GTM_ID
ENV NODE_ENV=production \
  REACT_APP_STRIPE_PUBLIC_KEY=$REACT_APP_STRIPE_PUBLIC_KEY \
  REACT_APP_GOOGLE_PLACES_API_KEY=$REACT_APP_GOOGLE_PLACES_API_KEY \
  REACT_APP_SENTRY_DSN=$REACT_APP_SENTRY_DSN \
  REACT_APP_POS_DISCOUNT_PASSWORDS=$REACT_APP_POS_DISCOUNT_PASSWORDS \
  REACT_APP_GOOGLE_ANALYTICS_ID=$REACT_APP_GOOGLE_ANALYTICS_ID \
  REACT_APP_GTM_ID=$REACT_APP_GTM_ID \
  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# install all JS dependencies
RUN npm ci

COPY . .

RUN ./build_and_rename.sh


# Stage2 for Web-server
FROM nginx:1.19.4

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
###Added for use in Heroku
COPY ./.nginx/nginx.conf.heroku /etc/nginx/nginx.template.heroku
###

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from build stage
COPY --from=builder /app/static /usr/share/nginx/html

###For testing
RUN apt-get update && apt-get install net-tools curl telnet postgresql-client -y

ENV REACT_APP_STRIPE_PUBLIC_KEY="" \
  REACT_APP_GOOGLE_PLACES_API_KEY="" \
  REACT_APP_SENTRY_DSN="" \
  REACT_APP_POS_DISCOUNT_PASSWORDS="" \
  REACT_APP_GOOGLE_ANALYTICS_ID="" \
  REACT_APP_GTM_ID=""

###Edited for use in Heroku
CMD ["nginx"]
###
