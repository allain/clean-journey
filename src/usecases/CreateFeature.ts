import Feature from "../entities/Feature";
import FeatureRegistry from "./interfaces/FeatureRegistry";

type CreateFeatureRequirements = {
  featureRegistry: FeatureRegistry;
};

type CreateFeatureInput = {
  title: string;
  description?: string;
};

type CreateFeatureOutput = Promise<Feature>;

export default class CreateFeature {
  public readonly featureRegistry: FeatureRegistry;

  constructor({ featureRegistry }: CreateFeatureRequirements) {
    this.featureRegistry = featureRegistry;
  }

  perform(featureSpec: CreateFeatureInput): CreateFeatureOutput {
    return this.featureRegistry.createFeature(featureSpec);
  }
}
