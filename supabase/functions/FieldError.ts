export class FieldError {
    public readonly field: string;

    public readonly scope?: string;

    constructor(field: string, scope?: string) {
        this.field = field;
        this.scope = scope;
    }

    toJSON() {
        return {
            field: this.field,
            scope: this.scope,
        };
    }
}
