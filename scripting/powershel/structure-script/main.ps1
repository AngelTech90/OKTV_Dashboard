# PowerShell script

# I recommend installing a better comments extension for reading this

# We define vars for users response:
$response = "pepe"
$response2 = "jose"
$response3 = "tato"

# Optional:
Write-Host "Have you cloned the repo yet?"
$response2 = Read-Host

if ($response2 -eq "no" -or $response2 -eq "NO" -or $response2 -eq "No") {
    git clone https://github.com/AngelTech90/OKTV_Dashboard
    Set-Location OKTV_Dashboard
    git fetch
} elseif ($response2 -eq "yes" -or $response2 -eq "YES" -or $response2 -eq "Yes") {
    Write-Host "Fine, let's keep running the script"
}

# We define data structures
$list_of_dependencies = @("express", "axios", "bootstrap")

# We question the user to see if they have Node installed
Write-Host "Have you installed Node?"
$response = Read-Host

# If it isn't, we install Node.js
if ($response -eq "no" -or $response -eq "No" -or $response -eq "NO") {
    # Note: PowerShell does not have sudo, so you may need to run PowerShell as Administrator
    Invoke-WebRequest -Uri "https://deb.nodesource.com/setup_14.x" -OutFile "setup_14.x"
    Start-Process "powershell" -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File setup_14.x" -Wait
    Start-Process "powershell" -ArgumentList "npm install -g nodejs" -Wait
    node -v
    npm -v
    Write-Host "Node installed"
} elseif ($response -eq "yes" -or $response -eq "YES" -or $response -eq "Yes") {
    Write-Host "Good, let's keep setting the environment"
}

# We install React and create the project
Set-Location ..
npm install -y
npm install vite@latest 
npm create vite@latest project-oktv -- --template react

# We initialize Node.js in the project
Set-Location "./project-oktv"
npm install -y

# We install dependencies
foreach ($d in $list_of_dependencies) {
    npm install $d
}

# Here we define the initial structure of components of projects
Set-Location "./src"

New-Item -ItemType Directory -Name "general_components"
New-Item -ItemType Directory -Name "main_components"

Set-Location "main_components"

# Here create login component
New-Item -ItemType Directory -Name "login"
Set-Location "login"

# Here we define regions:
New-Item -ItemType Directory -Name "brand"
New-Item -ItemType Directory -Name "main_menu"
New-Item -ItemType Directory -Name "main_content"
New-Item -ItemType Directory -Name "footer"

# We set all files 
Set-Location "brand"
New-Item -ItemType File -Name "Brand.jsx"
New-Item -ItemType File -Name "brand.css"
Set-Location ../main_menu
New-Item -ItemType File -Name "MainMenu.jsx"
New-Item -ItemType File -Name "mainMenu.css"
Set-Location ../footer
New-Item -ItemType File -Name "Footer.jsx"
New-Item -ItemType File -Name "footer.css"
Set-Location ../main_content
New-Item -ItemType File -Name "MainContent.jsx"
New-Item -ItemType File -Name "mainContent.css"

# We define regions of components