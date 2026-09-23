nom = inputbox("Quel est ton nom ?")
prenom = inputbox("Quel est ton prenom ?")
age = inputbox("Quel est ton age ?")
age2 = Year(Now)- age
ville= inputbox("Quelle est le nom de ta ville ?")
msgbox("Bon je résume tu t'appelles " & nom & " " & prenom & " tu habite à " & ville & " et tu es né(e) en " & age2 & ".")
msgbox("Je dois partir au revoir " & prenom & ".")