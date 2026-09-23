function  generateSquareMaze ( dimension )  {

    fonction  itérer ( champ ,  x ,  y )  {
        champ [ x ] [ y ]  =  faux ;
        tandis que ( vrai )  {
            direction  =  [ ] ;
            si ( x  >  1  &&  champ [ x - 2 ] [ y ]  ==  vrai )  {
                directions . appuyez sur ( [ - 1 ,  0 ] ) ;
            }
            if ( x  <  champ . dimension  -  2  &&  champ [ x + 2 ] [ y ]  ==  vrai )  {
                directions . pousser ( [ 1 ,  0 ] ) ;
            }
            si ( y  >  1  &&  champ [ x ] [ y - 2 ]  ==  vrai )  {
                directions . pousser ( [ 0 ,  - 1 ] ) ;
            }
            si ( y  <  champ . dimension  -  2  &&  champ [ x ] [ y + 2 ]  ==  vrai )  {
                directions . pousser ( [ 0 ,  1 ] ) ;
            }
            si ( directions . longueur  ==  0 )  {
                 champ de retour ;
            }
            dir  =  directions [ Math . sol ( Math . random ( ) * directions . longueur ) ] ;
            champ [ x + répertoire [ 0 ] ] [ y + répertoire [ 1 ] ]  =  faux ;
            champ  =  itérer ( champ ,  x + répertoire [ 0 ] * 2 ,  y + répertoire [ 1 ] * 2 ) ;
        }
    }

    // Initialise le champ.
    var  champ  =  new  Array ( dimension ) ;
    champ . dimension  =  dimension ;
    pour ( var  je  =  0 ;  je  <  dimension ;  je ++ )  {
        champ [ i ]  =  new  Array ( dimension ) ;
        pour  ( var  j  =  0 ;  j  <  dimension ;  j ++ )  {
            champ [ je ] [ j ]  =  vrai ;
        }
    }

    // Génère le labyrinthe de manière récursive.
    champ  =  itérer ( champ ,  1 ,  1 ) ;
    
     champ de retour ;

}