export interface SnippetsTypeRow {
  id_snippetpost: number | null;
  snipppetpost_title: string;
  language_name: string;
  visibility: boolean;
  snippet: string;
  id_actor: number | null;
}

export class Snippets {
  protected id_snippetpost: number | null;
  protected snipppetpost_title: string;
  protected language_name: string;
  protected visibility: boolean;
  protected snippet: string;
  protected id_actor: number | null;

  constructor(
    id_snippetpost: number | null,
    snipppetpost_title: string,
    language_name: string,
    visibility: boolean,
    snippet: string,
    id_actor: number | null
  ) {
    this.id_snippetpost = id_snippetpost;
    this.snipppetpost_title = snipppetpost_title;
    this.language_name = language_name;
    this.visibility = visibility;
    this.snippet = snippet;
    this.id_actor = id_actor;
  }

  getIdSnippetpost = () => {
    return this.id_snippetpost;
  };

  getSnippetpostTitle = () => {
    return this.snipppetpost_title;
  };

  getLanguageName = () => {
    return this.language_name;
  };

  getVisibility = () => {
    return this.visibility;
  };

  getSnippet = () => {
    return this.snippet;
  };

  getIdActor = () => {
    return this.id_actor;
  };
}
