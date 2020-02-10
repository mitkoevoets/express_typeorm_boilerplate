import { Column, Entity } from 'typeorm';
import { AbstractEntity } from './Entity';

@Entity({ name: 'images' })
export class ImageEntity extends AbstractEntity {
  @Column()
  label: string;

  @Column()
  tag: string;

  constructor(id: number, createdAt: Date, updatedAt: Date, createdAtUnix: number, updatedAtUnix: number, label: string, tag: string) {
    super(id, createdAt, updatedAt, createdAtUnix, updatedAtUnix);
    this.label = label;
    this.tag = tag;
  }
}
