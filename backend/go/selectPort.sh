#!/bin/bash

# Check if port number argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <port_number>"
    exit 1
fi

port_number=$1

# Use sed to replace the port number
echo "PORT=${port_number}" > .env

echo "Port ${port_number} selected."
