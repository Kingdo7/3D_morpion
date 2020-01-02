$('document').ready(function(e){

    $(".cellule").click(function(e){  
        console.log('joueur', partie.joueur_courant);              
        let ligne = $(this).closest(".ligne");
        let ligne_index = $( ".ligne" ).index( ligne );

        let cellules_in_line = ".ligne.ligne_" + ligne_index + " .cellule";
        let cellule_index = $(cellules_in_line).index( $(this) ); 
        console.log('Joueur X: ', ligne_index);
        console.log('Joueur Y: ', cellule_index);
            
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
            let def = null;
            let X = null;
            let Y = null;
            
            /** 
             * Si le joueur a presque gagné, il y a 1/3 de chance que l'IA le bloque 
             * */
            for(let i=0;i<9;i++){
                /** Plateau 1 */
                if ('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  null == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 2;
                    } else {
                        /*/Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[i][0] &&  null == partie.grille[i][1] &&  'circle' == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 1;
                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  'circle' == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 0;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  null == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 2;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[0][i] &&  null == partie.grille[1][i] &&  'circle' == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 1;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  'circle' == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 0;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                /** Plateau 2 */
                if ('circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][4] &&  null == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 5;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[i][3] &&  null == partie.grille[i][4] &&  'circle' == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 4;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[i][3] &&  'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 3;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[3][i] &&  'circle' == partie.grille[4][i] &&  null == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 5;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[3][i] &&  null == partie.grille[4][i] &&  'circle' == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 4;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[3][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 3;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                /** Plateau 3 */
                if ('circle' == partie.grille[i][6] &&  'circle' == partie.grille[i][7] &&  null == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 8;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[i][6] &&  null == partie.grille[i][7] &&  'circle' == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 7;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[i][6] &&  'circle' == partie.grille[i][7] &&  'circle' == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 6;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[6][i] &&  'circle' == partie.grille[7][i] &&  null == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 8;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[6][i] &&  null == partie.grille[7][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 7;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[6][i] &&  'circle' == partie.grille[7][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 6;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                /** Inter Plateau Traverse */
                if ('circle' == partie.grille[0][i] &&  'circle' == partie.grille[3][i] &&  null == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 6;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[0][i] &&  null == partie.grille[3][i] &&  'circle' == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 3;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[0][i] &&  'circle' == partie.grille[3][i] &&  'circle' == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 0;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[1][i] &&  'circle' == partie.grille[4][i] &&  null == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 7;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[1][i] &&  null == partie.grille[4][i] &&  'circle' == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 4;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[1][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 1;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[2][i] &&  'circle' == partie.grille[5][i] &&  null == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 8;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if ('circle' == partie.grille[2][i] &&  null == partie.grille[5][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 5;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } else 
                if (null == partie.grille[2][i] &&  'circle' == partie.grille[5][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 2;
                        Y = i;

                    } else {
                        /*Instanciation chiffre al�atoire */
                        X = getRandomInt(9);
                        Y = getRandomInt(3);
                    }
                } 
            } //End for





            /**********************************************************/
            /** Plateau 1 diagonales */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][1] &&  null == partie.grille[2][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 2;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[1][1] &&  'circle' == partie.grille[2][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[2][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/                   
            if ('circle' == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  null == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[2][0] &&  null == partie.grille[1][1] &&  'circle' == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 2;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            /** Plateau 2 diagonales */
            if ('circle' == partie.grille[3][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[3][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[3][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[3][2] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[3][2] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[3][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            /** Plateau 3 diagonales */
            if ('circle' == partie.grille[6][0] &&  'circle' == partie.grille[7][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[6][0] &&  null == partie.grille[7][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[6][0] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[6][2] &&  'circle' == partie.grille[7][1] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[6][2] &&  null == partie.grille[7][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else 
            if (null == partie.grille[6][2] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else 
            /**********************************************************/
            /** Inter Plateau ligne */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[3][1] &&  null == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[3][1] &&  'circle' == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[3][1] &&  'circle' == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[1][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[1][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[1][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[2][0] &&  'circle' == partie.grille[5][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[2][0] &&  null == partie.grille[5][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[2][0] &&  'circle' == partie.grille[5][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 2;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            /** Inter plateau colonnes */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][0] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[4][0] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[4][0] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][1] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][1] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][1] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][2] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][2] &&  null == partie.grille[4][2] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else 
            if (null == partie.grille[0][2] &&  'circle' == partie.grille[4][2] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else 
            /**********************************************************/
            /** Inter plateau diagonales */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if ('circle' == partie.grille[0][2] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            } else  
            if (null == partie.grille[0][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;

                } else {
                    /*Instanciation chiffre al�atoire */
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            }
            console.log('Defense ordi: ', def);

            /*
            IA de base sans aucune logique 
            *
            X = getRandomInt(9);
            Y = getRandomInt(3);
        
            while (partie.grille[X][Y] != null) {
                X = getRandomInt(9);
                Y = getRandomInt(3);
            }
            */
           let att = null;
            /** 
             * Si l'IA a presque gagné, il y a 1/3 de chance que l'IA gagne 
             * */
            if ( def == null || def == 2){
                for(let i=0;i<9;i++){
                    /** Plateau 1 */
                    if ('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  null == partie.grille[i][2] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 2;     
                    } else 
                    if ('cross' == partie.grille[i][0] &&  null == partie.grille[i][1] &&  'cross' == partie.grille[i][2] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 1;
                    } else 
                    if (null == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  'cross' == partie.grille[i][2] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 0;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  null == partie.grille[2][i] && def == null) {
                        att = true;
                        
                            X = 2;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[0][i] &&  null == partie.grille[1][i] &&  'cross' == partie.grille[2][i] && def == null) {
                        att = true;
                        
                            X = 1;
                            Y = i;
                    } else 
                    if (null == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  'cross' == partie.grille[2][i] && def == null) {
                        att = true;
                        
                            X = 0;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Plateau 2 */
                    if ('cross' == partie.grille[i][3] &&  'cross' == partie.grille[i][4] &&  null == partie.grille[i][5] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 5;
                    } else 
                    if ('cross' == partie.grille[i][3] &&  null == partie.grille[i][4] &&  'cross' == partie.grille[i][5] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 4;
                    } else 
                    if (null == partie.grille[i][3] &&  'cross' == partie.grille[i][4] &&  'cross' == partie.grille[i][5] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 3;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[3][i] &&  'cross' == partie.grille[4][i] &&  null == partie.grille[5][i] && def == null) {
                        att = true;
                        
                            X = 5;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[3][i] &&  null == partie.grille[4][i] &&  'cross' == partie.grille[5][i] && def == null) {
                        att = true;
                        
                            X = 4;
                            Y = i;
                    } else 
                    if (null == partie.grille[3][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[5][i] && def == null) {
                        att = true;
                        
                            X = 3;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Plateau 3 */
                    if ('cross' == partie.grille[i][6] &&  'cross' == partie.grille[i][7] &&  null == partie.grille[i][8] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 8;
                    } else 
                    if ('cross' == partie.grille[i][6] &&  null == partie.grille[i][7] &&  'cross' == partie.grille[i][8] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 7;
                    } else 
                    if (null == partie.grille[i][6] &&  'cross' == partie.grille[i][7] &&  'cross' == partie.grille[i][8] && def == null) {
                        att = true;
                        
                            X = i;
                            Y = 6;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[6][i] &&  'cross' == partie.grille[7][i] &&  null == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 8;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[6][i] &&  null == partie.grille[7][i] &&  'cross' == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 7;
                            Y = i;
                    } else 
                    if (null == partie.grille[6][i] &&  'cross' == partie.grille[7][i] &&  'cross' == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 6;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Inter Plateau Traverse */
                    if ('cross' == partie.grille[0][i] &&  'cross' == partie.grille[3][i] &&  null == partie.grille[6][i] && def == null) {
                        att = true;
                        
                            X = 6;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[0][i] &&  null == partie.grille[3][i] &&  'cross' == partie.grille[6][i] && def == null) {
                        att = true;
                        
                            X = 3;
                            Y = i;
                    } else 
                    if (null == partie.grille[0][i] &&  'cross' == partie.grille[3][i] &&  'cross' == partie.grille[6][i] && def == null) {
                        att = true;
                        
                            X = 0;
                            Y = i;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[1][i] &&  'cross' == partie.grille[4][i] &&  null == partie.grille[7][i] && def == null) {
                        att = true;
                        
                            X = 7;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[1][i] &&  null == partie.grille[4][i] &&  'cross' == partie.grille[7][i] && def == null) {
                        att = true;
                        
                            X = 4;
                            Y = i;
                    } else 
                    if (null == partie.grille[1][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[7][i] && def == null) {
                        att = true;
                        
                            X = 1;
                            Y = i;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[2][i] &&  'cross' == partie.grille[5][i] &&  null == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 8;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[2][i] &&  null == partie.grille[5][i] &&  'cross' == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 5;
                            Y = i;
                    } else 
                    if (null == partie.grille[2][i] &&  'cross' == partie.grille[5][i] &&  'cross' == partie.grille[8][i] && def == null) {
                        att = true;
                        
                            X = 2;
                            Y = i;
                    } 
                } //End for
    
    
    
    
    
                /**********************************************************/
                /** Plateau 1 diagonales */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  null == partie.grille[2][2] && def == null) {
                    att = true;
                    
                        X = 2;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[1][1] &&  'cross' == partie.grille[2][2] && def == null) {
                    att = true;
                    
                        X = 1;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[2][2] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/                   
                if ('cross' == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  null == partie.grille[0][2] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[2][0] &&  null == partie.grille[1][1] &&  'cross' == partie.grille[0][2] && def == null) {
                    att = true;
                    
                        X = 1;
                        Y = 1;
                } else  
                if (null == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[0][2] && def == null) {
                    att = true;
                    
                        X = 2;
                        Y = 0;
                } else  
                /**********************************************************/
                /** Plateau 2 diagonales */
                if ('cross' == partie.grille[3][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[5][2] && def == null) {
                    att = true;
                    
                        X = 5;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[3][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[5][2] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[3][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][2] && def == null) {
                    att = true;
                    
                        X = 3;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[3][2] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[5][0] && def == null) {
                    att = true;
                    
                        X = 5;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[3][2] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[5][0] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[3][2] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][0] && def == null) {
                    att = true;
                    
                        X = 3;
                        Y = 2;
                } else  
                /**********************************************************/
                /** Plateau 3 diagonales */
                if ('cross' == partie.grille[6][0] &&  'cross' == partie.grille[7][1] &&  null == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[6][0] &&  null == partie.grille[7][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 7;
                        Y = 1;
                } else  
                if (null == partie.grille[6][0] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 6;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[6][2] &&  'cross' == partie.grille[7][1] &&  null == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[6][2] &&  null == partie.grille[7][1] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 7;
                        Y = 1;
                } else 
                if (null == partie.grille[6][2] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 6;
                        Y = 2;
                } else 
                /**********************************************************/
                /** Inter Plateau ligne */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[3][1] &&  null == partie.grille[6][2] && def == null) {
                    att = true;
                    
                        X = 6;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[3][1] &&  'cross' == partie.grille[6][2] && def == null) {
                    att = true;
                    
                        X = 3;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[3][1] &&  'cross' == partie.grille[6][2] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[1][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[7][2] && def == null) {
                    att = true;
                    
                        X = 7;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[1][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[7][2] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[1][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[7][2] && def == null) {
                    att = true;
                    
                        X = 1;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[2][0] &&  'cross' == partie.grille[5][1] &&  null == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[2][0] &&  null == partie.grille[5][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 5;
                        Y = 1;
                } else  
                if (null == partie.grille[2][0] &&  'cross' == partie.grille[5][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 2;
                        Y = 0;
                } else  
                /**********************************************************/
                /** Inter plateau colonnes */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[4][0] &&  null == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[4][0] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 0;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[4][0] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][1] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][1] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 1;
                } else  
                if ('cross' == partie.grille[0][1] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][1] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][1] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][1] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 1;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][2] &&  'cross' == partie.grille[4][2] &&  null == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][2] &&  null == partie.grille[4][2] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 2;
                } else 
                if (null == partie.grille[0][2] &&  'cross' == partie.grille[4][2] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 2;
                } else 
                /**********************************************************/
                /** Inter plateau diagonales */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][2] && def == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][2] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[0][2] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][2] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][0] && def == null) {
                    att = true;
                        X = 0;
                        Y = 2;
                }
            }

            /** Si il n'y a ni besoin de se d�fendre, ni occasion d'attaquer */
            if (att == null && def == null) {
                X = getRandomInt(9);
                Y = getRandomInt(3);
            
                while (partie.grille[X][Y] != null) {
                    X = getRandomInt(9);
                    Y = getRandomInt(3);
                }
            }
            console.log('Attaque ordi: ', att);    
            
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
                if('circle' == partie.grille[0][i] &&  'circle' == partie.grille[3][i] &&  'circle' == partie.grille[6][i]){  
                    $('div#' + [0] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [3] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [6] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [3] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [6] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[1][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[7][i]){  
                    $('div#' + [1] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [4] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [7] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [1] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [4] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [7] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[2][i] &&  'circle' == partie.grille[5][i] &&  'circle' == partie.grille[8][i]){  
                    $('div#' + [2] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [5] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [8] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [2] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [5] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [8] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('cross' == partie.grille[0][i] &&  'cross' == partie.grille[3][i] &&  'cross' == partie.grille[6][i]){  
                    $('div#' + [0] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [3] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [6] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [3] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [6] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[1][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[7][i]){  
                    $('div#' + [1] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [4] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [7] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [1] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [4] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [7] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[2][i] &&  'cross' == partie.grille[5][i] &&  'cross' == partie.grille[8][i]){  
                    $('div#' + [2] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [5] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [8] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [2] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [5] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [8] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
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
            if('circle' == partie.grille[3][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][2]){
                $('div#' + [3] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [5] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [3] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [5] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[3][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][0]){
                $('div#' + [3] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [5] + '_' + [0]).children(".forme.circle").css('display','none');

                $('div#' + [3] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [5] + '_' + [0]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[3][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][2]){
                $('div#' + [3] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [5] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [3] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [5] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[3][2] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][0]){
                $('div#' + [3] + '_' + [2]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [5] + '_' + [0]).children(".forme.cross").css('display','none');

                $('div#' + [3] + '_' + [2]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [5] + '_' + [0]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }



            /** Plateau 3 diagonales */
            if('circle' == partie.grille[6][0] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][2]){
                $('div#' + [6] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [7] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [6] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [7] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[6][2] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][0]){
                $('div#' + [6] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [7] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [0]).children(".forme.circle").css('display','none');

                $('div#' + [6] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [7] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [0]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[6][0] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][2]){
                $('div#' + [6] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [7] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [6] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [7] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[6][2] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][0]){
                $('div#' + [6] + '_' + [2]).children(".forme.cross").css('display','none');
                $('div#' + [7] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [0]).children(".forme.cross").css('display','none');

                $('div#' + [6] + '_' + [2]).children(".forme.crossV").css('display','block');
                $('div#' + [7] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [0]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            


            /** Inter Plateau lignes */
            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[3][1] &&  'circle' == partie.grille[6][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [3] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [6] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [3] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [6] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('circle' == partie.grille[1][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[7][2]){
                $('div#' + [1] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [7] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [1] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [7] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('circle' == partie.grille[2][0] &&  'circle' == partie.grille[5][1] &&  'circle' == partie.grille[8][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [5] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [5] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('cross' == partie.grille[0][0] &&  'cross' == partie.grille[3][1] &&  'cross' == partie.grille[6][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [3] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [6] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [3] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [6] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            if('cross' == partie.grille[1][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[7][2]){
                $('div#' + [1] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [7] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [1] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [7] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            if('cross' == partie.grille[2][0] &&  'cross' == partie.grille[5][1] &&  'cross' == partie.grille[8][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [5] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [5] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }



            /** Inter Plateau colones */
            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][0] &&  'circle' == partie.grille[8][0]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [0]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [0]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('circle' == partie.grille[0][1] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][1]){
                $('div#' + [0] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [1]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [1]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][2] &&  'circle' == partie.grille[8][2]){
                $('div#' + [0] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }
            if('cross' == partie.grille[0][0] &&  'cross' == partie.grille[4][0] &&  'cross' == partie.grille[8][0]){
                $('div#' + [0] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [0]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [0]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            if('cross' == partie.grille[0][1] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][1]){
                $('div#' + [0] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [1]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [1]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }
            if('cross' == partie.grille[0][2] &&  'cross' == partie.grille[4][2] &&  'cross' == partie.grille[8][2]){
                $('div#' + [0] + '_' + [2]).children(".forme.cross").css('display','none');
                $('div#' + [4] + '_' + [2]).children(".forme.cross").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [2]).children(".forme.crossV").css('display','block');
                $('div#' + [4] + '_' + [2]).children(".forme.crossV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }



            /** Inter Plateau diagonales */
            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][0]){
                $('div#' + [0] + '_' + [2]).children(".forme.circle").css('display','none');
                $('div#' + [4] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [8] + '_' + [0]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [2]).children(".forme.circleV").css('display','block');
                $('div#' + [4] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [8] + '_' + [0]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
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