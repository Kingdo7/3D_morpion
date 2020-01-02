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

            console.log('joueur', partie.joueur_courant);  

            /**Ordinateur */
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            /**
             * 
             * 
             * DEFENSE
             * 
             * 
             */

            let def = null;
            let X = null;
            let Y = null;
            
            /** 
             * Ration, 2/3 de chance que l'ordi se defends
             * */
            for(let i=0;i<9;i++){
                /** Plateau 1 */
                if ('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  null == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 2;
                    }
                } else 
                if ('circle' == partie.grille[i][0] &&  null == partie.grille[i][1] &&  'circle' == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 1;
                    } 
                } else 
                if (null == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  'circle' == partie.grille[i][2] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 0;

                    } 
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  null == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 2;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[0][i] &&  null == partie.grille[1][i] &&  'circle' == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 1;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  'circle' == partie.grille[2][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 0;
                        Y = i;

                    }
                } else 
                /**********************************************************/
                /** Plateau 2 */
                if ('circle' == partie.grille[i][3] &&  'circle' == partie.grille[i][4] &&  null == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 5;

                    }
                } else 
                if ('circle' == partie.grille[i][3] &&  null == partie.grille[i][4] &&  'circle' == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 4;

                    }
                } else 
                if (null == partie.grille[i][3] &&  'circle' == partie.grille[i][4] &&  'circle' == partie.grille[i][5] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 3;

                    } 
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[3][i] &&  'circle' == partie.grille[4][i] &&  null == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 5;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[3][i] &&  null == partie.grille[4][i] &&  'circle' == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 4;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[3][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[5][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 3;
                        Y = i;

                    }
                } else 
                /**********************************************************/
                /** Plateau 3 */
                if ('circle' == partie.grille[i][6] &&  'circle' == partie.grille[i][7] &&  null == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 8;

                    }
                } else 
                if ('circle' == partie.grille[i][6] &&  null == partie.grille[i][7] &&  'circle' == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 7;

                    }
                } else 
                if (null == partie.grille[i][6] &&  'circle' == partie.grille[i][7] &&  'circle' == partie.grille[i][8] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = i;
                        Y = 6;

                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[6][i] &&  'circle' == partie.grille[7][i] &&  null == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 8;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[6][i] &&  null == partie.grille[7][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 7;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[6][i] &&  'circle' == partie.grille[7][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 6;
                        Y = i;

                    }
                } else 
                /**********************************************************/
                /** Inter Plateau Traverse */
                if ('circle' == partie.grille[0][i] &&  'circle' == partie.grille[3][i] &&  null == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 6;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[0][i] &&  null == partie.grille[3][i] &&  'circle' == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 3;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[0][i] &&  'circle' == partie.grille[3][i] &&  'circle' == partie.grille[6][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 0;
                        Y = i;

                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[1][i] &&  'circle' == partie.grille[4][i] &&  null == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 7;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[1][i] &&  null == partie.grille[4][i] &&  'circle' == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 4;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[1][i] &&  'circle' == partie.grille[4][i] &&  'circle' == partie.grille[7][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 1;
                        Y = i;

                    }
                } else 
                /**********************************************************/
                if ('circle' == partie.grille[2][i] &&  'circle' == partie.grille[5][i] &&  null == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 8;
                        Y = i;

                    }
                } else 
                if ('circle' == partie.grille[2][i] &&  null == partie.grille[5][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 5;
                        Y = i;

                    }
                } else 
                if (null == partie.grille[2][i] &&  'circle' == partie.grille[5][i] &&  'circle' == partie.grille[8][i] && def == null) {
                    def = getRandomInt(3);
                    if (def == 0 || def == 1) {
                        X = 2;
                        Y = i;

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

                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[1][1] &&  'circle' == partie.grille[2][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 1;

                } 
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[2][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                }
            } else  
            /**********************************************************/                   
            if ('circle' == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  null == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;

                }
            } else  
            if ('circle' == partie.grille[2][0] &&  null == partie.grille[1][1] &&  'circle' == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[0][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 2;
                    Y = 0;

                }
            } else  
            /**********************************************************/
            /** Plateau 2 diagonales */
            if ('circle' == partie.grille[3][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 2;

                }
            } else  
            if ('circle' == partie.grille[3][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[3][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 0;

                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[3][2] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 0;

                } 
            } else  
            if ('circle' == partie.grille[3][2] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[3][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[5][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 2;

                }
            } else  
            /**********************************************************/
            /** Plateau 3 diagonales */
            if ('circle' == partie.grille[6][0] &&  'circle' == partie.grille[7][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                }
            } else  
            if ('circle' == partie.grille[6][0] &&  null == partie.grille[7][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[6][0] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 0;

                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[6][2] &&  'circle' == partie.grille[7][1] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                }
            } else  
            if ('circle' == partie.grille[6][2] &&  null == partie.grille[7][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 1;

                } 
            } else 
            if (null == partie.grille[6][2] &&  'circle' == partie.grille[7][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 2;

                } 
            } else 
            /**********************************************************/
            /** Inter Plateau ligne */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[3][1] &&  null == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 6;
                    Y = 2;

                } 
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[3][1] &&  'circle' == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 3;
                    Y = 1;

                } 
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[3][1] &&  'circle' == partie.grille[6][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } 
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[1][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 7;
                    Y = 2;

                } 
            } else  
            if ('circle' == partie.grille[1][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[1][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[7][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 1;
                    Y = 0;

                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[2][0] &&  'circle' == partie.grille[5][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                }
            } else  
            if ('circle' == partie.grille[2][0] &&  null == partie.grille[5][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 5;
                    Y = 1;

                } 
            } else  
            if (null == partie.grille[2][0] &&  'circle' == partie.grille[5][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 2;
                    Y = 0;

                } 
            } else  
            /**********************************************************/
            /** Inter plateau colonnes */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][0] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                }
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[4][0] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 0;

                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[4][0] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][1] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 1;

                } 
            } else  
            if ('circle' == partie.grille[0][1] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[0][1] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][1] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 1;

                }
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][2] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                }
            } else  
            if ('circle' == partie.grille[0][2] &&  null == partie.grille[4][2] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 2;

                } 
            } else 
            if (null == partie.grille[0][2] &&  'circle' == partie.grille[4][2] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;

                } 
            } else 
            /**********************************************************/
            /** Inter plateau diagonales */
            if ('circle' == partie.grille[0][0] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 2;

                } 
            } else  
            if ('circle' == partie.grille[0][0] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                }
            } else  
            if (null == partie.grille[0][0] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][2] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 0;

                } 
            } else  
            /**********************************************************/
            if ('circle' == partie.grille[0][2] &&  'circle' == partie.grille[4][1] &&  null == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 8;
                    Y = 0;

                } 
            } else  
            if ('circle' == partie.grille[0][2] &&  null == partie.grille[4][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 4;
                    Y = 1;

                } 
            } else  
            if (null == partie.grille[0][2] &&  'circle' == partie.grille[4][1] &&  'circle' == partie.grille[8][0] && def == null) {
                def = getRandomInt(3);
                if (def == 0 || def == 1) {
                    X = 0;
                    Y = 2;
                } 
            }
            /** Coordonee si defense */
            console.log('Defense ordi: ', def);
            if (def == 0 || def == 1) {                
                console.log('Def X: ', X);
                console.log('Def Y: ', Y);
            } 
            /**
             * 
             * 
             * ATTAQUE
             * 
             * 
             */
           let att = null;
            
            if ( def == null || def == 2){
                for(let i=0;i<9;i++){
                    /** Plateau 1 */
                    if ('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  null == partie.grille[i][2] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 2;     
                    } else 
                    if ('cross' == partie.grille[i][0] &&  null == partie.grille[i][1] &&  'cross' == partie.grille[i][2] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 1;
                    } else 
                    if (null == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  'cross' == partie.grille[i][2] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 0;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  null == partie.grille[2][i] && att == null) {
                        att = true;
                        
                            X = 2;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[0][i] &&  null == partie.grille[1][i] &&  'cross' == partie.grille[2][i] && att == null) {
                        att = true;
                        
                            X = 1;
                            Y = i;
                    } else 
                    if (null == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  'cross' == partie.grille[2][i] && att == null) {
                        att = true;
                        
                            X = 0;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Plateau 2 */
                    if ('cross' == partie.grille[i][3] &&  'cross' == partie.grille[i][4] &&  null == partie.grille[i][5] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 5;
                    } else 
                    if ('cross' == partie.grille[i][3] &&  null == partie.grille[i][4] &&  'cross' == partie.grille[i][5] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 4;
                    } else 
                    if (null == partie.grille[i][3] &&  'cross' == partie.grille[i][4] &&  'cross' == partie.grille[i][5] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 3;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[3][i] &&  'cross' == partie.grille[4][i] &&  null == partie.grille[5][i] && att == null) {
                        att = true;
                        
                            X = 5;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[3][i] &&  null == partie.grille[4][i] &&  'cross' == partie.grille[5][i] && att == null) {
                        att = true;
                        
                            X = 4;
                            Y = i;
                    } else 
                    if (null == partie.grille[3][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[5][i] && att == null) {
                        att = true;
                        
                            X = 3;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Plateau 3 */
                    if ('cross' == partie.grille[i][6] &&  'cross' == partie.grille[i][7] &&  null == partie.grille[i][8] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 8;
                    } else 
                    if ('cross' == partie.grille[i][6] &&  null == partie.grille[i][7] &&  'cross' == partie.grille[i][8] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 7;
                    } else 
                    if (null == partie.grille[i][6] &&  'cross' == partie.grille[i][7] &&  'cross' == partie.grille[i][8] && att == null) {
                        att = true;
                        
                            X = i;
                            Y = 6;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[6][i] &&  'cross' == partie.grille[7][i] &&  null == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 8;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[6][i] &&  null == partie.grille[7][i] &&  'cross' == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 7;
                            Y = i;
                    } else 
                    if (null == partie.grille[6][i] &&  'cross' == partie.grille[7][i] &&  'cross' == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 6;
                            Y = i;
                    } else 
                    /**********************************************************/
                    /** Inter Plateau Traverse */
                    if ('cross' == partie.grille[0][i] &&  'cross' == partie.grille[3][i] &&  null == partie.grille[6][i] && att == null) {
                        att = true;
                        
                            X = 6;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[0][i] &&  null == partie.grille[3][i] &&  'cross' == partie.grille[6][i] && att == null) {
                        att = true;
                        
                            X = 3;
                            Y = i;
                    } else 
                    if (null == partie.grille[0][i] &&  'cross' == partie.grille[3][i] &&  'cross' == partie.grille[6][i] && att == null) {
                        att = true;
                        
                            X = 0;
                            Y = i;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[1][i] &&  'cross' == partie.grille[4][i] &&  null == partie.grille[7][i] && att == null) {
                        att = true;
                        
                            X = 7;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[1][i] &&  null == partie.grille[4][i] &&  'cross' == partie.grille[7][i] && att == null) {
                        att = true;
                        
                            X = 4;
                            Y = i;
                    } else 
                    if (null == partie.grille[1][i] &&  'cross' == partie.grille[4][i] &&  'cross' == partie.grille[7][i] && att == null) {
                        att = true;
                        
                            X = 1;
                            Y = i;
                    } else 
                    /**********************************************************/
                    if ('cross' == partie.grille[2][i] &&  'cross' == partie.grille[5][i] &&  null == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 8;
                            Y = i;
                    } else 
                    if ('cross' == partie.grille[2][i] &&  null == partie.grille[5][i] &&  'cross' == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 5;
                            Y = i;
                    } else 
                    if (null == partie.grille[2][i] &&  'cross' == partie.grille[5][i] &&  'cross' == partie.grille[8][i] && att == null) {
                        att = true;
                        
                            X = 2;
                            Y = i;
                    } 
                } //End for
    
    
    
    
    
                /**********************************************************/
                /** Plateau 1 diagonales */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  null == partie.grille[2][2] && att == null) {
                    att = true;
                    
                        X = 2;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[1][1] &&  'cross' == partie.grille[2][2] && att == null) {
                    att = true;
                    
                        X = 1;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[2][2] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/                   
                if ('cross' == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  null == partie.grille[0][2] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[2][0] &&  null == partie.grille[1][1] &&  'cross' == partie.grille[0][2] && att == null) {
                    att = true;
                    
                        X = 1;
                        Y = 1;
                } else  
                if (null == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[0][2] && att == null) {
                    att = true;
                    
                        X = 2;
                        Y = 0;
                } else  
                /**********************************************************/
                /** Plateau 2 diagonales */
                if ('cross' == partie.grille[3][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[5][2] && att == null) {
                    att = true;
                    
                        X = 5;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[3][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[5][2] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[3][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][2] && att == null) {
                    att = true;
                    
                        X = 3;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[3][2] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[5][0] && att == null) {
                    att = true;
                    
                        X = 5;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[3][2] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[5][0] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[3][2] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[5][0] && att == null) {
                    att = true;
                    
                        X = 3;
                        Y = 2;
                } else  
                /**********************************************************/
                /** Plateau 3 diagonales */
                if ('cross' == partie.grille[6][0] &&  'cross' == partie.grille[7][1] &&  null == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[6][0] &&  null == partie.grille[7][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 7;
                        Y = 1;
                } else  
                if (null == partie.grille[6][0] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 6;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[6][2] &&  'cross' == partie.grille[7][1] &&  null == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[6][2] &&  null == partie.grille[7][1] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 7;
                        Y = 1;
                } else 
                if (null == partie.grille[6][2] &&  'cross' == partie.grille[7][1] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 6;
                        Y = 2;
                } else 
                /**********************************************************/
                /** Inter Plateau ligne */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[3][1] &&  null == partie.grille[6][2] && att == null) {
                    att = true;
                    
                        X = 6;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[3][1] &&  'cross' == partie.grille[6][2] && att == null) {
                    att = true;
                    
                        X = 3;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[3][1] &&  'cross' == partie.grille[6][2] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[1][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[7][2] && att == null) {
                    att = true;
                    
                        X = 7;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[1][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[7][2] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[1][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[7][2] && att == null) {
                    att = true;
                    
                        X = 1;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[2][0] &&  'cross' == partie.grille[5][1] &&  null == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[2][0] &&  null == partie.grille[5][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 5;
                        Y = 1;
                } else  
                if (null == partie.grille[2][0] &&  'cross' == partie.grille[5][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 2;
                        Y = 0;
                } else  
                /**********************************************************/
                /** Inter plateau colonnes */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[4][0] &&  null == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[4][0] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 0;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[4][0] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][1] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][1] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 1;
                } else  
                if ('cross' == partie.grille[0][1] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][1] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][1] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][1] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 1;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][2] &&  'cross' == partie.grille[4][2] &&  null == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][2] &&  null == partie.grille[4][2] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 2;
                } else 
                if (null == partie.grille[0][2] &&  'cross' == partie.grille[4][2] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 2;
                } else 
                /**********************************************************/
                /** Inter plateau diagonales */
                if ('cross' == partie.grille[0][0] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 2;
                } else  
                if ('cross' == partie.grille[0][0] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][0] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][2] && att == null) {
                    att = true;
                    
                        X = 0;
                        Y = 0;
                } else  
                /**********************************************************/
                if ('cross' == partie.grille[0][2] &&  'cross' == partie.grille[4][1] &&  null == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 8;
                        Y = 0;
                } else  
                if ('cross' == partie.grille[0][2] &&  null == partie.grille[4][1] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                    
                        X = 4;
                        Y = 1;
                } else  
                if (null == partie.grille[0][2] &&  'cross' == partie.grille[4][1] &&  'cross' == partie.grille[8][0] && att == null) {
                    att = true;
                        X = 0;
                        Y = 2;
                }
            }
            /** Coordonnee si attaque */
            console.log('Attaque ordi: ', att); 
            if (att == true) {
                console.log('Att X: ', X); 
                console.log('Att Y: ', Y); 
            }

            /**
             * 
             * 
             * STRATEGIE
             * 
             */
            let strat = false;
            let luck = null;

            if (att == null && def == null || att == null && def == 2) {
                /** Maitrise du centre si joueur start avec un coin */
                /** Plateau 1 */
                if (null == partie.grille[1][1] && strat == false){
                    if ('circle' == partie.grille[0][0] || 'circle' == partie.grille[2][0] || 'circle' == partie.grille[0][2] || 'circle' == partie.grille[2][2]){
                        X = 1;
                        Y = 1;
                        strat = true;
                    }
                }
                /** Plateau 2 */
                if (null == partie.grille[4][1] && strat == false){
                    if ('circle' == partie.grille[3][0] || 'circle' == partie.grille[5][0] || 'circle' == partie.grille[3][2] || 'circle' == partie.grille[5][2]){
                        X = 4;
                        Y = 1;
                        strat = true;
                    }
                }
                /** Plateau 3 */
                if (null == partie.grille[7][1] && strat == false){
                    if ('circle' == partie.grille[6][0] || 'circle' == partie.grille[8][0] || 'circle' == partie.grille[6][2] || 'circle' == partie.grille[8][2]){
                        X = 7;
                        Y = 1;
                        strat = true;
                    }
                }
                /** Maitrise des coins si joueur start avec centre */
                X = partie.joueur_courant;
                Y = partie.joueur_courant;
                /** Plateau 1 */
                if ('circle' == partie.grille[1][1] && strat == false){                    
                    while (partie.grille[X][Y] != null) {
                        luck = getRandomInt(4);
                        if(null == partie.grille[0][0] && luck == 0 && strat == false) {
                            X = 0;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[0][2] && luck == 1  && strat == false) {
                            X = 0;
                            Y = 2;
                            strat = true;
                        }
                        if(null == partie.grille[2][0] && luck == 2  && strat == false) {
                            X = 2;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[2][2] && luck == 3  && strat == false) {
                            X = 2;
                            Y = 2;
                            strat = true;
                        }
                    }  
                }
                /** Plateau 2 */
                if ('circle' == partie.grille[4][1] && strat == false){
                    while (partie.grille[X][Y] != null) {
                        luck = getRandomInt(4);
                        if(null == partie.grille[3][0] && luck == 0 && strat == false) {
                            X = 3;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[3][2] && luck == 1  && strat == false) {
                            X = 3;
                            Y = 2;
                            strat = true;
                        }
                        if(null == partie.grille[5][0] && luck == 2  && strat == false) {
                            X = 5;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[5][2] && luck == 3  && strat == false) {
                            X = 5;
                            Y = 2;
                            strat = true;
                        }
                    }  
                }
                /** Plateau 3 */
                if ('circle' == partie.grille[6][1] && strat == false){
                    while (partie.grille[X][Y] != null) {
                        luck = getRandomInt(4);
                        if(null == partie.grille[6][0] && luck == 0 && strat == false) {
                            X = 6;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[6][2] && luck == 1  && strat == false) {
                            X = 6;
                            Y = 2;
                            strat = true;
                        }
                        if(null == partie.grille[8][0] && luck == 2  && strat == false) {
                            X = 8;
                            Y = 0;
                            strat = true;
                        }
                        if(null == partie.grille[8][2] && luck == 3  && strat == false) {
                            X = 8;
                            Y = 2;
                            strat = true;
                        }
                    }  
                }

                /** Si le joueur ne fait ni les coins, ni le centre, l'ordi le fera */
                if (strat == false) {
                    X = ligne_index;
                    Y = cellule_index;
                    alea = null;
                    while (partie.grille[X][Y] != null) {
                        luck = getRandomInt(6); // 1/2 chance de prendre un coins ou le centre 0,1,2 centre| 3,4,5 coins
                        if (luck <= 2){ // centre
                            if (luck == 0 && strat == false){
                                /** Plateau 1 */
                                if (null == partie.grille[1][1]){
                                    X = 1;
                                    Y = 1;
                                    strat = true;
                                }
                            }
                            if (luck == 1 && strat == false){
                                /** Plateau 2 */
                                if (null == partie.grille[4][1]){
                                    X = 4;
                                    Y = 1;
                                    strat = true;
                                }
                            }
                            if (luck == 2 && strat == false){
                                /** Plateau 3 */
                                if (null == partie.grille[7][1]){
                                    X = 7;
                                    Y = 1;
                                    strat = true;
                                }
                            }
                        } else 
                        if (luck >= 3) { // coins
                            /** Plateau 1 */                            
                            if (luck == 3 && strat == false){
                                alea =  getRandomInt(4);
                                if(null == partie.grille[0][0] && alea == 0 && strat == false) {
                                    X = 0;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[0][2] && alea == 1  && strat == false) {
                                    X = 0;
                                    Y = 2;
                                    strat = true;
                                }
                                if(null == partie.grille[2][0] && alea == 2  && strat == false) {
                                    X = 2;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[2][2] && alea == 3  && strat == false) {
                                    X = 2;
                                    Y = 2;
                                    strat = true;
                                }
                            }
                            /** Plateau 2 */
                            if (luck == 4 && strat == false) {
                                alea =  getRandomInt(4);
                                if(null == partie.grille[3][0] && alea == 0 && strat == false) {
                                    X = 3;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[3][2] && alea == 1  && strat == false) {
                                    X = 3;
                                    Y = 2;
                                    strat = true;
                                }
                                if(null == partie.grille[5][0] && alea == 2  && strat == false) {
                                    X = 5;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[5][2] && alea == 3  && strat == false) {
                                    X = 5;
                                    Y = 2;
                                    strat = true;
                                }
                            }
                            /** Plateau 3 */
                            if (luck == 5 && strat == false) {
                                alea =  getRandomInt(4);
                                if(null == partie.grille[6][0] && alea == 0 && strat == false) {
                                    X = 6;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[6][2] && alea == 1  && strat == false) {
                                    X = 6;
                                    Y = 2;
                                    strat = true;
                                }
                                if(null == partie.grille[8][0] && alea == 2  && strat == false) {
                                    X = 8;
                                    Y = 0;
                                    strat = true;
                                }
                                if(null == partie.grille[8][2] && alea == 3  && strat == false) {
                                    X = 8;
                                    Y = 2;
                                    strat = true;
                                }
                            }                            
                        } 
                        if (null != partie.grille[1][1] && null != partie.grille[4][1] && null != partie.grille[7][1] //centre
                            && null != partie.grille[0][0] && null != partie.grille[0][2] && null != partie.grille[2][0] && null != partie.grille[2][2] // P1
                            && null != partie.grille[3][0] && null != partie.grille[3][2] && null != partie.grille[5][0] && null != partie.grille[5][2] // P2
                            && null != partie.grille[6][0] && null != partie.grille[6][2] && null != partie.grille[8][0] && null != partie.grille[8][2] // P3
                            && strat == false) { //si toute les possibilité voulus sont prise
                            X = getRandomInt(9);
                            Y = getRandomInt(3);
                        }
                    }
                }
            }

            /** Coordonnee strat*/
            if (att == null && def == null || att == null && def == 2) {
                console.log('Strat ordi: ', strat);
                console.log('Strat X: ', X);
                console.log('Strat Y: ', Y);
            }

            /** Je reprend la var de base car j'ai la flemme de tout renommer */
            ligne_index = X;
            cellule_index = Y;
            console.log('---');         
            
            // mettre a jour la grille
            partie.grille[ligne_index][cellule_index] = partie.joueur_courant;

            // Poser le pion et changer de joueur
            $('div#' + [ligne_index] + '_' + [cellule_index]).children(".forme.cross").css('display','block');

            joueur_suivant = "circle";
            $(".infos .tour .forme").toggle();
            /**
             * 
             * 
             * VICTOIRE
             * 
             * 
             */

            // tester si la combinaison est gagnante
            /** Alors ici j'ai remplacer la var joueur courant car il n'y a plus de switch case. Je commence toujours par le cercle car si c'est
             * le tour du joueur et qu'il gagne, je ne le verifie pas a ce moment la, donc je le met en priorite lors de la verification.
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