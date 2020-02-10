import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ProgramBase1561912771968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "programs",
            columns: [
                // {
                //     name: "id",
                //     type: "int",
                //     isPrimary: true
                // },
                // {
                //     name: "programKey",
                //     type: "varchar",
                // },
                // {
                //     name: "title",
                //     type: "varchar",
                // }

            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
