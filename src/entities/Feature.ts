type FeatureSpec = {
  id?: string;
  title?: string;
  description?: string;
  createdAt?: number;
};

const DEFAULT_PROPS = { id: null, title: null, description: null };

export default class Feature {
  public id: string;
  public title: string;
  public description: string;
  public createdAt: number;

  constructor(props: FeatureSpec = DEFAULT_PROPS) {
    Object.assign(this, { ...props, createdAt: props.createdAt || Date.now() });
  }
}
