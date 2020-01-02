$('document').ready(function(e){

    $(".cellule").click(function(e){  
        console.log('joueur', partie.joueur_courant);              
        let ligne = $(this).closest(".ligne");
        let ligne_index = $( ".ligne" ).index( ligne );

        let cellules_in_line = ".ligne.ligne_" + ligne_index + " .cellule";
        let cellule_index = $(cellules_in_line).index( $(this) ); 
        console.log('Click Ligne', ligne_index);
        console.log('Click Colonne', cellule_index);
            
        // tester qu'il n'y a pas de pion sur cette case
        if(partie.grille[ligne_index][cellule_index] != null){
            alert("Il y a deja un pion sur cette case !")
        } else {
            // mettre à jour la grille
            partie.grille[ligne_index][cellule_index] = partie.joueur_courant

            // Poser le pion et changer de joueur
            let joueur_suivant = 'cross';
            $(this).children(".forme.circle").css('display','block');                 

            $(".infos .tour .forme").toggle()

            partie.joueur_courant = joueur_suivant;

            /**Ordinateur */
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            
            /** Si le joueur a presque gagné, il y a 1/3 de chance que l'IA le bloque */
            for(let i=0;i<9;i++){
                switch (partie.grille){
                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][1] :
                    let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][2] :
                    let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][1] &&  'circle' == partie.grille[i][2] :
                    let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[0][i] &&  'circle' == partie.grille[2][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][i] &&  'circle' == partie.grille[2][i] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][5] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][5] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[3][i] &&  'circle' == partie.grille[4][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[3][i] &&  'circle' == partie.grille[5][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[4][i] &&  'circle' == partie.grille[5][i] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[i][6] &&  'circle' == partie.grille[i][7] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][6] &&  'circle' == partie.grille[i][8] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][7] &&  'circle' == partie.grille[i][8] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[6][i] &&  'circle' == partie.grille[7][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[6][i] &&  'circle' == partie.grille[8][i] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[7][i] &&  'circle' == partie.grille[8][i] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][3] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][6] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][6] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][8] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][8] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i+3] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[0][i] &&  'circle' == partie.grille[2][i+6] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][i+3] &&  'circle' == partie.grille[2][i+6] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][1] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[0][0] &&  'circle' == partie.grille[2][2] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][1] &&  'circle' == partie.grille[2][2] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[2][0] &&  'circle' == partie.grille[1][1] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[2][0] &&  'circle' == partie.grille[0][2] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][1] &&  'circle' == partie.grille[0][2] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[3][3] &&  'circle' == partie.grille[4][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[3][3] &&  'circle' == partie.grille[5][5] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[4][4] &&  'circle' == partie.grille[5][5] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[3][5] &&  'circle' == partie.grille[4][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[3][5] &&  'circle' == partie.grille[5][3] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[4][4] &&  'circle' == partie.grille[5][3] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[6][6] &&  'circle' == partie.grille[7][7] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[6][6] && 'circle' == partie.grille[8][8] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[7][7] &&  'circle' == partie.grille[8][8] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[6][8] &&  'circle' == partie.grille[7][7] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[6][8] &&  'circle' == partie.grille[8][6] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[7][7] &&  'circle' == partie.grille[8][6] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[0][0] &&  'circle' == partie.grille[2][8] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][4] &&  'circle' == partie.grille[2][8] :
                        let def = getRandomInt(3);
                    break;

                    case 'circle' == partie.grille[0][2] &&  'circle' == partie.grille[1][4] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[0][2] && 'circle' == partie.grille[2][6] :
                        let def = getRandomInt(3);
                    break;
                    case 'circle' == partie.grille[1][4] &&  'circle' == partie.grille[2][6] :
                        let def = getRandomInt(3);
                    break;
                }
                if (def == 1) {
                        
                } else {
                    
                }
            }


            /** Si l'IA a presque gagné, il y a 1/3 de chance que l'IA gagne */
            /*Instanciation chiffre al�atoire */
            let X = getRandomInt(3);
            let Y = getRandomInt(9);
    
            /*V�rification que la cellule est vide avant de finalis� la position*/
            while (partie.grille[X][Y] != null) {
                X = getRandomInt(3);
                Y = getRandomInt(9);
            }
            console.log('joueur', partie.joueur_courant);
            

            /** On assigne les valeurs al�atoire aux variables */
            ligne_index = X;
            cellule_index = Y;
            console.log('Random Ligne', ligne_index);
            console.log('Random Colonne', cellule_index);
            console.log('---');               
            
            // mettre à jour la grille
            partie.grille[ligne_index][cellule_index] = partie.joueur_courant;

            // Poser le pion et changer de joueur
            $('div#' + [ligne_index] + '_' + [cellule_index]).children(".forme.cross").css('display','block');
            /*
            console.log('this', $(this).children(".forme.cross"));
            console.log('test', $('div#' + [ligne_index] + '_' + [cellule_index]).children(".forme.cross"));
            */
            joueur_suivant = "circle";
            $(".infos .tour .forme").toggle();

            // tester si la combinaison est gagnante
            /** Alors ici j'ai remplacer la var joueur courant car il n'y a plus de switch case. Je commence toujours par le cercle car si c'est
             * le tour du joueur et qu'il gagne, je ne v�rifie pas � ce moment si c'est le cas donc je le met en priorit� lors de la v�rification.
             * Ensuite je colorie la combinaison gagante en vert.
             */
            for(let i=0;i<9;i++){
                /** Plateau 1 */
                if('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  'circle' == partie.grille[i][2]){  
                    $('div#' + [i] + '_' + [0]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [1]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [2]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [1]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [2]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  'circle' == partie.grille[2][i]){
                    $('div#' + [0] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [1] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [2] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [1] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [2] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle'; 
                    break;
                }

                if('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  'cross' == partie.grille[i][2]){
                    $('div#' + [i] + '_' + [0]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [1]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [2]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [1]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [2]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  'cross' == partie.grille[2][i]){
                    $('div#' + [0] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [1] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [2] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [1] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [2] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross'; 
                    break;
                }
                /** Plateau 2 */
                if('circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][5]){  
                    $('div#' + [i] + '_' + [3]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [4]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [5]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [3]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [4]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [5]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[3][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[5][i]){
                    $('div#' + [3] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [4] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [5] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [3] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [4] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [5] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle'; 
                    break;
                }

                if('cross' == partie.grille[i][3] &&  'cross' == partie.grille[i][4] &&  'cross' == partie.grille[i][5]){
                    $('div#' + [i] + '_' + [3]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [4]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [5]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [3]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [4]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [5]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[3][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[5][i]){
                    $('div#' + [3] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [4] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [5] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [3] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [4] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [5] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross'; 
                    break;
                }
                /** Plateau 3 */
                if('circle' == partie.grille[i][6] &&  'circle' == partie.grille[i][7] &&  'circle' == partie.grille[i][8]){  
                    $('div#' + [i] + '_' + [6]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [7]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [8]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [6]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [7]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [8]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[6][i] &&  'circle' == partie.grille[7][i] &&  'circle' == partie.grille[8][i]){
                    $('div#' + [6] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [7] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [8] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [6] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [7] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [8] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle'; 
                    break;
                }

                if('cross' == partie.grille[i][6] &&  'cross' == partie.grille[i][7] &&  'cross' == partie.grille[i][8]){
                    $('div#' + [i] + '_' + [6]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [7]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [8]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [6]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [7]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [8]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[6][i] &&  'cross' == partie.grille[7][i] &&  'cross' == partie.grille[8][i]){
                    $('div#' + [6] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [7] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [8] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [6] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [7] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [8] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross'; 
                    break;
                }

                /** Inter Plateau traverse */
                if('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][6]){  
                    $('div#' + [i] + '_' + [0]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [3]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [6]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [3]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [6]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][3] &&  'cross' == partie.grille[i][6]){
                    $('div#' + [i] + '_' + [0]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [3]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [6]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [3]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [6]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                /** Inter Plateau lignes */
                if('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][8]){
                    $('div#' + [i] + '_' + [0]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [4]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [8]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [4]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [8]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                }

                if('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][4] &&  'cross' == partie.grille[i][8]){
                    $('div#' + [i] + '_' + [0]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [4]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [8]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [4]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [8]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                }

                /** Inter Plateau colones */
                if('circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i+3] &&  'circle' == partie.grille[2][i+6]){
                    $('div#' + [0] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [1] + '_' + [i+3]).children(".forme.circle").css('display','none');
                    $('div#' + [2] + '_' + [i+6]).children(".forme.circle").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [1] + '_' + [i+3]).children(".forme.circleV").css('display','block');
                    $('div#' + [2] + '_' + [i+6]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                }

                if('cross' == partie.grille[0][i] &&  'cross' == partie.grille[1][i+3] &&  'cross' == partie.grille[2][i+6]){
                    $('div#' + [0] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [1] + '_' + [i+3]).children(".forme.cross").css('display','none');
                    $('div#' + [2] + '_' + [i+6]).children(".forme.cross").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [1] + '_' + [i+3]).children(".forme.crossV").css('display','block');
                    $('div#' + [2] + '_' + [i+6]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                }

            }

            /** Plateau 1  diagonales */
            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[2][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [2] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [2] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[0][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [0] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [0] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[2][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [2] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [2] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[0][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [0] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [0] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            /** Plateau 2  diagonales */
            if('circle' == partie.grille[3][3] &&  'circle' == partie.grille[4][4] &&  'circle' == partie.grille[5][5]){
                $('div#' + [3] + '_' + [3]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [4]).children(".forme.circle").css('display','none');
                $('div#' + [5] + '_' + [5]).children(".forme.circle").css('display','none');

                $('div#' + [3] + '_' + [3]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [4]).children(".forme.circleV").css('display','block');
                $('div#' + [5] + '_' + [5]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[3][5] &&  'circle' == partie.grille[4][4] &&  'circle' == partie.grille[5][3]){
                $('div#' + [3] + '_' + [5]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [4]).children(".forme.circle").css('display','none');
                $('div#' + [5] + '_' + [3]).children(".forme.circle").css('display','none');

                $('div#' + [3] + '_' + [5]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [4]).children(".forme.circleV").css('display','block');
                $('div#' + [5] + '_' + [3]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[3][3] &&  'cross' == partie.grille[4][4] &&  'cross' == partie.grille[5][5]){
                $('div#' + [3] + '_' + [3]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [4]).children(".forme.cross").css('display','none');
                $('div#' + [5] + '_' + [5]).children(".forme.cross").css('display','none');

                $('div#' + [3] + '_' + [3]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [4]).children(".forme.crossV").css('display','block');
                $('div#' + [5] + '_' + [5]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[3][5] &&  'cross' == partie.grille[4][4] &&  'cross' == partie.grille[5][3]){
                $('div#' + [3] + '_' + [5]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [4]).children(".forme.cross").css('display','none');
                $('div#' + [5] + '_' + [3]).children(".forme.cross").css('display','none');

                $('div#' + [3] + '_' + [5]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [4]).children(".forme.crossV").css('display','block');
                $('div#' + [5] + '_' + [3]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            /** Plateau 3 diagonales */
            if('circle' == partie.grille[6][6] &&  'circle' == partie.grille[7][7] &&  'circle' == partie.grille[8][8]){
                $('div#' + [6] + '_' + [6]).children(".forme.circle").css('display','none');
                $('div#' + [7] + '_' + [7]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [8]).children(".forme.circle").css('display','none');

                $('div#' + [6] + '_' + [6]).children(".forme.circleV").css('display','block');
                $('div#' + [7] + '_' + [7]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [8]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[6][8] &&  'circle' == partie.grille[7][7] &&  'circle' == partie.grille[8][6]){
                $('div#' + [6] + '_' + [8]).children(".forme.circle").css('display','none');
                $('div#' + [7] + '_' + [7]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [6]).children(".forme.circle").css('display','none');

                $('div#' + [6] + '_' + [8]).children(".forme.circleV").css('display','block');
                $('div#' + [7] + '_' + [7]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + []).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[6][6] &&  'cross' == partie.grille[7][7] &&  'cross' == partie.grille[8][8]){
                $('div#' + [6] + '_' + [6]).children(".forme.cross").css('display','none');
                $('div#' + [7] + '_' + [7]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [8]).children(".forme.cross").css('display','none');

                $('div#' + [6] + '_' + [6]).children(".forme.crossV").css('display','block');
                $('div#' + [7] + '_' + [7]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [8]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[6][8] &&  'cross' == partie.grille[7][7] &&  'cross' == partie.grille[8][6]){
                $('div#' + [6] + '_' + [8]).children(".forme.cross").css('display','none');
                $('div#' + [7] + '_' + [7]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [6]).children(".forme.cross").css('display','none');

                $('div#' + [6] + '_' + [8]).children(".forme.crossV").css('display','block');
                $('div#' + [7] + '_' + [7]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [6]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }     

            /** Inter Plateau diagonales */
            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][4] &&  'circle' == partie.grille[2][8]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [4]).children(".forme.circle").css('display','none');
                $('div#' + [2] + '_' + [8]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [4]).children(".forme.circleV").css('display','block');
                $('div#' + [2] + '_' + [8]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[0][2] &&  'circle' == partie.grille[1][4] &&  'circle' == partie.grille[2][6]){
                $('div#' + [0] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [4]).children(".forme.circle").css('display','none');
                $('div#' + [2] + '_' + [6]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [4]).children(".forme.circleV").css('display','block');
                $('div#' + [2] + '_' + [6]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[0][0] &&  'cross' == partie.grille[1][4] &&  'cross' == partie.grille[2][8]){
                $('div#' + [0] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [4]).children(".forme.cross").css('display','none');
                $('div#' + [2] + '_' + [8]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [4]).children(".forme.crossV").css('display','block');
                $('div#' + [2] + '_' + [8]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[0][2] &&  'cross' == partie.grille[1][4] &&  'cross' == partie.grille[2][6]){
                $('div#' + [0] + '_' + [2]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [4]).children(".forme.cross").css('display','none');
                $('div#' + [2] + '_' + [6]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [2]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [4]).children(".forme.crossV").css('display','block');
                $('div#' + [2] + '_' + [6]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }            

            if(partie.joueur_gagnant != null){
                partie.finish();
                $(".cellule").unbind( "click" );                
            } else {
                partie.joueur_courant = joueur_suivant;
            }
        }
    })
});