let url = 'index.html';
let partie = {

    joueur_courant:"circle",
    joueur_gagnant:null,

    /** La grille est disproportionner c'est normal, même si concrètement il ne peut y avoir plus de 3 lignes
     * la boucle du scrip "run.js" a besoin de 9 valeurs pour fonctionner correctement
     */
    grille:[
        [null,null,null],[null,null,null],[null,null,null],
        [null,null,null],[null,null,null],[null,null,null],
        [null,null,null],[null,null,null],[null,null,null],
    ],

    combinaisons_gagnantes:[
        /** Plateau 1 */
        [[0,0],[0,1],[0,2]], // ligne 1
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]], // colonne 1
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]], // diagonales
        [[0,2],[1,1],[2,0]],
        /** Plateau 2 */
        [[3,0],[3,1],[3,2]], // ligne 1
        [[4,0],[4,1],[4,2]],
        [[5,0],[5,1],[5,2]],
        [[3,0],[4,0],[5,0]],  // colonne 4
        [[3,1],[4,1],[5,1]],
        [[3,2],[4,2],[5,2]],
        [[3,0],[4,1],[5,2]],   // diagonales
        [[3,2],[4,1],[5,0]],  
        /** Plateau 3 */
        [[6,0],[6,1],[6,2]], // ligne 1
        [[7,0],[7,1],[7,2]],
        [[8,0],[8,1],[8,2]],
        [[6,0],[7,0],[8,0]],  // colonne 7
        [[6,1],[7,1],[8,1]],
        [[6,2],[7,2],[8,2]],
        [[6,0],[7,1],[8,2]],   // diagonales
        [[6,2],[7,1],[8,0]],        
        /** Inter Plateau  */
        [[0,0],[3,0],[6,0]],  // traverse l1
        [[0,1],[3,1],[6,1]], 
        [[0,2],[3,2],[6,2]],
        [[1,0],[4,0],[7,0]],  // traverse l2
        [[1,1],[4,1],[7,1]], 
        [[1,2],[4,2],[7,2]], 
        [[2,0],[5,0],[8,0]],  // traverse l3
        [[2,1],[5,1],[8,1]], 
        [[2,2],[5,2],[8,2]], 
        [[0,0],[4,0],[8,0]],  // colonnes
        [[0,1],[4,1],[8,1]], 
        [[0,2],[4,2],[8,2]],

        [[8,0],[4,0],[2,0]],
        [[8,1],[4,1],[2,1]],
        [[8,2],[4,2],[2,2]],

        [[0,0],[3,1],[6,2]],  // ligne
        [[1,0],[4,1],[7,2]], 
        [[2,0],[5,1],[8,2]],

        [[8,2],[5,1],[2,0]],
        [[7,2],[4,1],[1,0]],
        [[6,2],[3,1],[0,0]],
        
        [[0,0],[4,1],[8,2]], // diagonales
        [[0,2],[4,1],[8,0]], 
    ],

    finish: function(){
        alert('Fin de partie, ' + partie.joueur_gagnant + ' a gagne !');
    }
}
// [[],[],[]],