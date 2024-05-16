FROM gitpod/workspace-full-vnc

USER gitpod

RUN bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh && \
    sdk install java 19.0.2-open && \
    sdk default java 19.0.2-open"
    
RUN npm install -g generator-jhipster@8.4.0

RUN sudo apt-get update && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    sudo apt-get install ./google-chrome-stable_current_amd64.deb -y && \
    sudo apt-get install xvfb -y

RUN wget -c "http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/2022-03/R/eclipse-jee-2022-03-R-linux-gtk-x86_64.tar.gz" \
    -O $HOME/eclipse-jee-2022-03-R-linux-gtk-x86_64.tar.gz