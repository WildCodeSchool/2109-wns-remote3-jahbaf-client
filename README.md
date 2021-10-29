# Générer des fichiers

Lorsque vous clonez le projet, lancez les commandes suivantes :

```
yarn install
yarn build:tooling
```
Cette commande va build le contenu du folder tooling, vous pourrez ensuite l'utiliser comme ceci :

```
yarn create:component componentName
yarn create:page pageName
yarn create:store storeName
```

Ces commandes vont générer les fichiers correspondant à l'architecture que nous avons définies.