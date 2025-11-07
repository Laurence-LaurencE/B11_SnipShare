export interface CommentTypeRow {
  id_actor: number;
  id_snippetpost: number;
  couteint_comment: string;
}

export class Comments {
  protected id_actor: number;
  protected id_snippetpost: number;
  protected couteint_comment: string;

  constructor(
    id_actor: number,
    id_snippetpost: number,
    couteint_comment: string
  ) {
    this.id_actor = id_actor;
    this.id_snippetpost = id_snippetpost;
    this.couteint_comment = couteint_comment;
  }

  getIdActor = () => {
    return this.id_actor;
  };

  getIdsnippetpost = () => {
    return this.id_snippetpost;
  };

  getCouteintComment = () => {
    return this.couteint_comment;
  };
}
