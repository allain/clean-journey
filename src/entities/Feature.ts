type FeatureSpec = {
  id?: string;
  title?: string;
  description?: string;
  createdAt?: number;
};

export default class Feature {
  public id: string;
  public title: string;
  public description: string;
  public createdAt: number;

  constructor(spec: FeatureSpec = {}) {
    this.id = spec.id || null;
    this.title = spec.title || null;
    this.description = spec.description || null;
    this.createdAt = spec.createdAt || Date.now();
  }
}
