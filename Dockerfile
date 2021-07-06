FROM ruby:3.0.0-alpine
ENV BUNDLER_VERSION=2.2.21
RUN apk add --update --no-cache \
      binutils-gold \
      build-base \
      curl \
      file \
      g++ \
      gcc \
      git \
      less \
      libstdc++ \
      libffi-dev \
      libc-dev \
      linux-headers \
      libxml2-dev \
      libxslt-dev \
      libgcrypt-dev \
      make \
      netcat-openbsd \
      nodejs \
      openssl \
      pkgconfig \
      postgresql-dev \
      py-pip \
      tzdata \
      yarn
RUN gem install bundler -v 2.2.21
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle check || bundle install
COPY package.json yarn.lock ./
RUN yarn install --check-files
COPY . ./
RUN chmod +x ./entrypoints/docker-entrypoint.sh
ENTRYPOINT ["./entrypoints/docker-entrypoint.sh"]
