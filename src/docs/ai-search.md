## Authorized types(18)

Normal, Fire, Water, Electric, Grass, Ice, Fighting, Poison, Ground,
Flying, Psychic, Bug, Rock, Ghost, Dragon, Dark, Steel, Fairy

## Authorized criteria

| Identifiant | Définition                             | Stats utilisées            | Tri         |
| ----------- | -------------------------------------- | -------------------------- | ----------- |
| bulky       | encaisse beaucoup de dégâts            | HP + Defense + Sp. Defense | décroissant |
| fast        | rapide                                 | Speed                      | décroissant |
| slow        | lent                                   | Speed                      | croissant   |
| physical    | gros attaquant physique                | Attack                     | décroissant |
| special     | gros attaquant spécial                 | Sp. Attack                 | décroissant |
| strong      | fort en attaque, sans préciser le type | Attack + Sp. Attack        | décroissant |

## Input/Output example

| Input                          | Output                                                                |
| ------------------------------ | --------------------------------------------------------------------- |
| bulky grass pokemon            | `{"types":["Grass"],"criterion":"bulky","name":null}`                 |
| fast electric                  | `{"types":["Electric"],"criterion":"fast","name":null}`               |
| water                          | `{"types":["Water"],"criterion":null,"name":null}`                    |
| grass or poison                | `{"types":["Grass","Poison"],"criterion":null,"name":null}`           |
| pikachu                        | `{"types":[],"criterion":null,"name":"pikachu"}`                      |
| what’s the weather             | `{"types":[],"criterion":null,"name":null}`                           |
| strong dragon electric pokemon | `{"types": ["Dragon", "Electric"], "criterion": "fast", "name":null}` |
