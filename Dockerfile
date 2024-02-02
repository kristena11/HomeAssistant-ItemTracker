FROM homeassistant/amd64-base:3.0.0

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm install sqlite3
RUN npm rebuild sqlite3

COPY . .

LABEL \
    io.hass.version="1.0.0" \
    io.hass.arch="amd64" \
    io.hass.type="addon" \
    io.hass.name="Your Add-on Name" \
    io.hass.description="A brief description of your add-on"

CMD ["/usr/bin/run.sh"]