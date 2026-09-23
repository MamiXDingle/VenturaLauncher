@echo off

if "%b2eprogramfilename%"==""  (

	echo To see any results you need to convert this file into an exe
	pause
	goto :eof

)

%extd% /showself

%extd% /tempfile %temp%

set headerfile="%result%"

%extd% /downloadheader http://www.f2ko.de/downloads/Bat_To_Exe_Converter.zip %headerfile%

type %headerfile%

del %headerfile%

pause