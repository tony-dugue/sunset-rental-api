import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1668720859925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('sunset-rental', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('sunset-rental', true);
  }
}
