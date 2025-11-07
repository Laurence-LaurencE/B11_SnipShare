export interface CommentTypeRow {
  couteint_comment: string;
}

export class Comments {
  protected couteint_comment: string;

  constructor(couteint_comment: string) {
    this.couteint_comment = couteint_comment;
  }

  getCouteintComment = () => {
    return this.couteint_comment;
  };
}
