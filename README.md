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

# Tester votre code

Lorsque vous testerez vos composants vous aurez besoin de récupérer des éléments du DOM afin de contrôler leur état.
Pour cela nous passons par des fixtures.

Il y a un fichier à la racine 
```
fixtures.ts
```
Contenant des méthodes utilitaires pour recupérer des éléments du DOM, d'autres méthodes peuvent y être ajouter si le besoin s'en fait sentir.

## Utilisation

Une fixture se crée comme suit :

```typescript
interface ButtonFixturesInterface {
    /** Returns the button element */
    getButton: () => HTMLButtonElement
}

export default class ButtonFixtures extends Fixtures implements ButtonFixturesInterface {
    private readonly BUTTON_SELECTOR = 'button';

    public getButton () {
        return this.query(this.BUTTON_SELECTOR) as HTMLButtonElement;
    }
}
```

L'interface va définir les methodes existantes pour recuperer vos elements et permettra surtout d'y indiquer une documentation.

La classe etends le fichiers fixtures.ts pour en utiliser les méthodes, et implemente les methodes définies dans l'interface.

Vous pouvez indiquer tout les sélecteurs que vous souhaitez utiliser en tant que private readonly.

L'implementation de la fonction met en usage les methodes définies dans le fichier de fixtures afin de recuperer l'élément.

Cette fixture s'utilise ensuite dans vos tests de la façon suivante :

```typescript
describe('[Component] Button', () => {
    let fixtures: ButtonFixtures;

    beforeEach(() => {
        fixtures = new ButtonFixtures();
    });

    it('should display the correct button content', () => {
        render(<Button content="Test" onClickAction={onClickMock}/>, container);

        expect(fixtures.getButton().textContent).toEqual('Test');
    });

    it('should trigger the click action when button is clicked', () => {
        render(<Button content="Test" onClickAction={onClickMock}/>, container);

        const button = fixtures.getButton();
        button.click();
        expect(onClickMock).toHaveBeenCalled();
    });
});
```