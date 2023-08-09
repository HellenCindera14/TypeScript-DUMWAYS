import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1691486104014 implements MigrationInterface {
  name = "MyMigration1691486104014";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "follows" ("id" SERIAL NOT NULL, "followerId" integer NOT NULL, "followedId" integer NOT NULL, CONSTRAINT "PK_8988f607744e16ff79da3b8a627" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "replies" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_08f619ebe431e27e9d206bea132" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Likes" ("id" SERIAL NOT NULL, "userId" character varying NOT NULL, "ThreadId" character varying NOT NULL, CONSTRAINT "PK_1c26def97ac3b554ea7c21be2c9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "fullname" character varying NOT NULL, "email" TIMESTAMP NOT NULL, "password" integer NOT NULL, "profil_picture" integer NOT NULL, "Profil_deskcripsi" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Threads" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "image" character varying NOT NULL, "post_at" TIMESTAMP NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_2f6752df1cf82267f50c96dbb8c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Threads"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "Likes"`);
    await queryRunner.query(`DROP TABLE "replies"`);
    await queryRunner.query(`DROP TABLE "follows"`);
  }
}
