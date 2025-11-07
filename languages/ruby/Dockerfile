FROM ruby:3.2-slim

WORKDIR /app

COPY Gemfile* ./

RUN bundle install

COPY hello.rb .

CMD ["ruby", "hello.rb"]