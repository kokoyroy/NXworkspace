export interface IRecipy {
  name: string;
  description: string;
  imagePath: string;
}

export class Recipy implements IRecipy {
  name: string;
  description: string;
  imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}