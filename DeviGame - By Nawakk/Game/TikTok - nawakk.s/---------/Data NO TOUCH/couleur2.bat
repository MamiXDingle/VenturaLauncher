@echo off
color 2e
title Jeu de devinettes par Nawakk
set /a guessnum=0
set /a answer=%RANDOM%
set variable1=surf33
echo -----------------------------------------------------
echo Bienvenue dans mon jeu de devinettes 
echo.
echo Essayez de deviner mon chiffre secret !
echo -----------------------------------------------------
echo.
:top
echo.
set /p guess=
echo.
if %guess% GTR %answer% ECHO plus bas !
if %guess% LSS %answer% ECHO plus haut !
if %guess%==%answer% GOTO EQUAL
set /a guessnum=%guessnum% +1
if %guess%==%variable1% ECHO Vous n'avez pas trouvé ? Le nombre est: %answer%
goto top
:equal
echo Félicitations, vous avez deviné juste !!!
echo.
echo Vous avez trouvé au bout de %guessnum% essais.
echo.
pause