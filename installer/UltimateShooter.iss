; Inno Setup script for the Ultimate Shooter installer.
; Build:  "%LOCALAPPDATA%\Programs\Inno Setup 6\ISCC.exe" UltimateShooter.iss /DSourceDir=<game build folder> /DOutDir=<output folder>
; Installs per-user (no admin prompt) and adds Start menu + optional desktop shortcuts, so the game shows up in Windows search.

#define AppName "Ultimate Shooter"
#define AppVersion "0.8"
#define AppExe "UltimateShooter.exe"
#ifndef SourceDir
  #define SourceDir "..\..\release\stage\UltimateShooter"
#endif
#ifndef OutDir
  #define OutDir "..\..\release"
#endif

[Setup]
AppId={{2C93A7C0-AB2C-497C-941B-ECC5862D58A8}
AppName={#AppName}
AppVersion={#AppVersion}
AppVerName={#AppName} {#AppVersion}
AppPublisher=Game Vault
AppPublisherURL=https://game-vault.owenswlee.workers.dev
DefaultDirName={autopf}\{#AppName}
DefaultGroupName={#AppName}
DisableProgramGroupPage=yes
PrivilegesRequired=lowest
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
OutputDir={#OutDir}
OutputBaseFilename=UltimateShooterSetup
SetupIconFile=UltimateShooter.ico
UninstallDisplayIcon={app}\UltimateShooter.ico
UninstallDisplayName={#AppName}
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
CloseApplications=yes

[Tasks]
Name: "desktopicon"; Description: "Create a &desktop shortcut"; GroupDescription: "Shortcuts:"

[Files]
Source: "{#SourceDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs; Excludes: "*_BackUpThisFolder_ButDontShipItWithYourGame\*"
Source: "UltimateShooter.ico"; DestDir: "{app}"; Flags: ignoreversion

[Icons]
Name: "{autoprograms}\{#AppName}"; Filename: "{app}\{#AppExe}"; IconFilename: "{app}\UltimateShooter.ico"; WorkingDir: "{app}"
Name: "{autodesktop}\{#AppName}"; Filename: "{app}\{#AppExe}"; IconFilename: "{app}\UltimateShooter.ico"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#AppExe}"; Description: "Play {#AppName} now"; Flags: nowait postinstall skipifsilent
