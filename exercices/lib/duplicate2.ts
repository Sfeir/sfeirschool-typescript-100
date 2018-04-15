const foo = "foo";

// export {}

// sans import ni export, le typescript serveur
// ne va pas interpréter le ficher comme un module es6 !!!
// il considère que tous les fichiers qui ne sont pas
// des modules "vivent" dans le même scope global