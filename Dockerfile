FROM node:latest

RUN useradd -d /home/shaker -m shaker && echo 'shaker ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

USER shaker

RUN ln -nsf /srv/thinkshake-client ~/thinkshake-client

# RUN echo 'export LC_ALL="en_US.UTF-8" LANG="en_US.UTF-8" LANGUAGE="en_US.UTF-8"' >> ~/.bashrc
RUN echo 'export LANG="en_US.UTF-8" LANGUAGE="en_US.UTF-8"' >> ~/.bashrc

WORKDIR /srv/thinkshake-client

EXPOSE 5001
