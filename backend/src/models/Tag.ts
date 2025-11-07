export interface TagsTypeRow {
  id_tag: number | null;
  tag_name: string;
}

export class Tags {
  protected id_tag: number | null;
  protected tag_name: string;

  constructor(id_tag: number | null, tag_name: string) {
    this.id_tag = id_tag;
    this.tag_name = tag_name;
  }

  getIdTag = () => {
    return this.id_tag;
  };

  getTagName = () => {
    return this.tag_name;
  };
}
