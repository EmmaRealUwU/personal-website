#!/bin/sh
PATH=$PATH:/volume1/@appstore/Node.js_v20/usr/local/lib/node_modules/forever/bin

forever start --workingDir /volume1/server/HelloWorldServer --sourceDir /volume1/server/HelloWorldServer -l /volume1/server/HelloWorldServer/logs/log.txt -a -o /volume1/server/HelloWorldServer/logs/output.txt --minUptime 1000 --spinSleepTime 1000 .
