#!/bin/bash

podman run -v ./dist:/app -it --rm mcr.microsoft.com/playwright:v1.49.1-noble /bin/bash