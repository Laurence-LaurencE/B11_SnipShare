export interface taguerTypeRow {
    id_snippetpost: number;
    id_tag: number;
}

export class Taguer {
    protected id_snippetpost: number;
    protected id_tag: number;

    constructor(
        id_snippetpost: number,
        id_tag: number,
    ) {
        this.id_snippetpost = id_snippetpost;
        this.id_tag = id_tag;
    }

    getIdSnippetpost = () => {
        return this.id_snippetpost;
    }; 
  
    getIdTag = () => {
        return this.id_tag;
    };
}