# Ce qu'on fait

Une API HTTP en clean archi / hexagonale

Ce qu'il y a en commun :
- la volonté d'isoler le métier --> un répertoire `domain`
- un extérieur, côté utilisateur --> un répertoire `presentation`
- un extérieur, côté base de donnée --> un répertoire `infrastructure`

Démarrage : par la couche extérieure côté utilisateur :
- les controleurs HTTP
- tout ce qui parle de HTTP

Feedback pour cette première partie : curl / httpie

Ensuite, des tests

Api qui me donne la liste des courses

`/courses` --> renvoie un json avec une liste de noms de produits à acheter
