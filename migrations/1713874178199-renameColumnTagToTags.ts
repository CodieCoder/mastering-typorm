import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameColumnTagToTags1713874178199 implements MigrationInterface {
  private readonly logger = new Logger(RenameColumnTagToTags1713874178199.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('ALTER TABLE item RENAME COLUMN tag TO tags');
    this.logger.log('rename column from tag to tags');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('ALTER TABLE item RENAME COLUMN tags TO tag');
    this.logger.log('revert rename column from tag to tags');
  }
}
