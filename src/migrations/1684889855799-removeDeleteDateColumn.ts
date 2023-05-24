import { MigrationInterface, QueryRunner } from "typeorm";

export class removeDeleteDateColumn1684889855799 implements MigrationInterface {
    name = 'removeDeleteDateColumn1684889855799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" date`);
    }

}
