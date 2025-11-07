export interface SnippetLikeTypeRow {
    id_actor: number;
    id_snippetpost: number;
}

export class SnippetLikes {
    protected id_actor: number;
    protected id_snippetpost: number;

    constructor(
        id_actor: number,
        id_snippetpost: number,
    ) {
        this.id_actor = id_actor;
        this.id_snippetpost = id_snippetpost;
    };

    getIdActor = () => {
        return this.id_actor;
    };
    getIdsnippetpost = () => {
        return this.id_snippetpost;
    };

}