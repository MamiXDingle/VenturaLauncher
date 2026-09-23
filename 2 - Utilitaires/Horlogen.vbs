Heure="Il est " & Hour(Now) & "h et " & Minute(Now) & "min "& Second(Now) & "sec."
if Hour(Now)=18 then
Message="Bonjour"
else
Message="Bonsoir"
end if
MsgBox Message & "!" & vbnewline & Heure