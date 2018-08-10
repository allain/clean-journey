import Feature from '../../entities/Feature'

type FeatureSpec = {
    title: string
    description?: string
}

export default interface FeatureRegistry {
    createFeature(feature: FeatureSpec) : Promise<Feature>
}