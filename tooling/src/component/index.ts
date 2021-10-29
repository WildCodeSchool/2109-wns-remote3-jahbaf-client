import { strings, normalize } from '@angular-devkit/core';
import { apply, applyTemplates, MergeStrategy, mergeWith, move, Rule, SchematicContext, Tree, url } from '@angular-devkit/schematics';
import { ComponentOptions } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function component (_options: ComponentOptions): Rule {
    return (tree: Tree, _context: SchematicContext) => {
        const templateSource = apply(url('./templates/src'), [
            applyTemplates({
                classify: strings.classify,
                name: _options.name
            }),
            move(normalize('./src'))
        ]);

        const rule = mergeWith(templateSource, MergeStrategy.Default);
        return rule(tree, _context);
    };
}
