setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E')

// A votre avis, dans quel ordre s'affiche les lettres
// 1 - A B C D E
// 2 - B E A D C
// 3 - E B A D C

// pile d'appel
// ^
// |
// |
// |                                                            [log]              [log][log]        [log]
// |[setTimeout][setTimeout][setTimeout][setTimeout][log] ..⟳.. [=> ] ..⟳..        [=> ][=> ] ..⟳.. [=> ]
// +----------------------------------------------------------------------------------------------------->
//                                                  E            B                  A    D           C

// File d'attente (0ms) : () => console.log('B')
// File d'attente (3ms) :
// File d'attente (500ms) : () => console.log('A'), () => console.log('D')


