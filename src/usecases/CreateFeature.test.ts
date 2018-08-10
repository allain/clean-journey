import CreateFeature from "./CreateFeature";
import FeatureRegistry from "./interfaces/FeatureRegistry";
import Feature from "../entities/Feature";

class MemoryFeatureRegistry implements FeatureRegistry {
  private id: number = 0;

  async createFeature({ title, description }): Promise<Feature> {
    return new Feature({
      id: "" + ++this.id,
      title,
      description
    });
  }
}

describe("CreateFeature", () => {
  it("can be created", () => {
    expect(
      new CreateFeature({ featureRegistry: new MemoryFeatureRegistry() })
    ).toBeInstanceOf(CreateFeature);
  });

  it("calls out to featureRegistry", () => {
    const mockFeatureRegistry = new MemoryFeatureRegistry();
    mockFeatureRegistry.createFeature = jest.fn(
      mockFeatureRegistry.createFeature.bind(mockFeatureRegistry)
    );

    const createFeature = new CreateFeature({
      featureRegistry: mockFeatureRegistry
    });

    createFeature.perform({ title: "test", description: "Testing" });
    expect(mockFeatureRegistry.createFeature).toBeCalledWith({
      title: "test",
      description: "Testing"
    });
  });

  it("returns a Promise that resolves to a valid Feature", async () => {
    const mockFeatureRegistry = new MemoryFeatureRegistry();
    const createFeature = new CreateFeature({
      featureRegistry: mockFeatureRegistry
    });

    const result = createFeature.perform({
      title: "test",
      description: "Testing"
    });

    expect(result).toBeInstanceOf(Promise);
    const feature = await result;
    expect(feature).toBeInstanceOf(Feature);

    expect(feature.id).toEqual("1");
    expect(feature.title).toEqual("test");
    expect(feature.description).toEqual("Testing");
    expect(typeof feature.createdAt).toEqual("number");
  });
});
