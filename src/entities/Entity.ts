import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractEntity {
  /**
   * Database identifier
   */
  @PrimaryGeneratedColumn()
  public id: number;

  /**
   * @createdAt Created timestamp.
   */
  @CreateDateColumn()
  public createdAt: Date;

  /**
   * @updatedAt Updated timestamp.
   */
  @UpdateDateColumn()
  public updatedAt: Date;

  constructor(id: number, createdAt: Date, updatedAt: Date, createdAtUnix: number, updatedAtUnix: number) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
