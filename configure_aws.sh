#!/usr/bin/env bash

mkdir -p ~/.aws

cat > ~/.aws/credentials << EOL
[default]
aws_access_key_id = ${AK}
aws_secret_access_key = ${SK}
region = us-west-2
EOL