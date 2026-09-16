@echo off
setlocal
set "THEME=%~dp0telegram-neon-flow.json"
set "OPENCODE=C:\Users\%USERNAME%\AppData\Local\Programs\@opencode-aidesktop\OpenCode.exe"
set "RUNNER=C:\Users\%USERNAME%\AppData\Local\hermes\node\opencode-zh-desktop.cmd"
if not exist "%RUNNER%" (
  echo opencode-zh-desktop is not installed.
  pause
  exit /b 1
)
if not exist "%OPENCODE%" (
  echo OpenCode Desktop was not found at:
  echo %OPENCODE%
  pause
  exit /b 1
)
"%RUNNER%" --daemon --theme "%THEME%" --exe "%OPENCODE%"
