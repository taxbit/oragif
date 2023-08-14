export interface IFeature {
  description: string;
  image: string;
  image_alt: string;
  model_name: string;
  sorting: number;
}

export interface IData {
  assets_domain: string;
  block_heading: string;
  features: IFeature[];
}

export type CardItem = IFeature;

export type filterValues = "Figaro" | "Nissan Z" | "Samsung";

export interface IFilter {
  fieldName: keyof IFeature;
  fieldValue?: filterValues;
  required?: boolean;
}
