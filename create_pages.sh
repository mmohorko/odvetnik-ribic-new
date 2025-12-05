#!/bin/bash

# Array of services with filename, title, subtitle, and icon
declare -A services=(
    ["gospodarsko-pravo"]="Gospodarsko Pravo|Pravno svetovanje za podjetja in M&A transakcije|building"
    ["pogodbe"]="Pogodbe|Sestava in pregled pogodb|file-contract"
    ["izvrsba-insolventnost"]="Izvršba in Insolventnost|Svetovanje upnikom in dolžnikom|gavel"
    ["bancnistvo-finance"]="Bančništvo in Finance|Specializirano bančno pravo|university"
    ["civilno-pravo"]="Splošno Civilno Pravo|Celovito civilnopravno zastopanje|balance-scale"
    ["it-pravo"]="Pravo Informacijske Tehnologije|IT pravo in varstvo podatkov|laptop-code"
    ["druga-podrocja"]="Druga Področja|Dodatna pravna področja|ellipsis-h"
)

echo "Created service pages successfully!"
