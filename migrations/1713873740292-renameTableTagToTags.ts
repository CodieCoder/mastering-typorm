import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameTableTagToTags1713873740292 implements MigrationInterface {
  private readonly logger = new Logger(RenameTableTagToTags1713873740292.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE tag RENAME TO tags;');
    this.logger.log('Renamed table name from tag to tags');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE tags RENAME TO tag;');
    this.logger.log('Reverted table name from tags to tag');
  }
}
