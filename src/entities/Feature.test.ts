import Feature from "./Feature";

describe("Feature", () => {
  it("can be created", () => {
    expect(new Feature()).toBeInstanceOf(Feature);
  });

  it("has expected properties", () => {
    expect(Object.keys(new Feature())).toEqual([
      "id",
      "title",
      "description",
      "createdAt"
    ]);
  });

  it("has expected default values", () => {
    const f = new Feature();
    expect(f.id).toBeNull();
    expect(f.title).toBeNull();
    expect(f.description).toBeNull();
    expect(typeof f.createdAt).toEqual("number");
  });

  it("supports setting props from constructor", () => {
    const f = new Feature({
      id: "1",
      title: "Testing",
      description: "Description",
      createdAt: 100000000
    });

    expect(f.id).toEqual("1");
    expect(f.title).toEqual("Testing");
    expect(f.description).toEqual("Description");
    expect(f.createdAt).toEqual(100000000);
  });
});
