export class Fixtures {
    /**
     * Selectionne le premier element correspondant au selecteur
     * @param selector Selecteur de l'element
     * @returns Element | null
     */
    protected query (selector: string): Element | null {
        return document.querySelector(selector);
    }

    /**
     * Selectionne tout les elements correspondant au selecteur
     * @param selector Selecteur des elements
     * @returns Element[] | null
     */
    protected queryAll (selector: string): Element[] | null {
        const els: Element[] = [];
        document.querySelectorAll(selector).forEach((el) => els.push(el));
        return els;
    }
}
