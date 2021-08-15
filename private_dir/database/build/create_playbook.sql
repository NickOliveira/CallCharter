BEGIN;

DROP SCHEMA IF EXISTS playbook;
CREATE SCHEMA playbook;

DROP TABLE IF EXISTS playbook.shifts CASCADE;
CREATE TABLE playbook.shifts(
    name varchar[10]
);

DROP TABLE IF EXISTS playbook.formations CASCADE;
CREATE TABLE playbook.formations(
    name varchar[20]
);

DROP TABLE IF EXISTS playbook.run_protection CASCADE;
CREATE TABLE playbook.run_protection(
    name varchar[15]
);

END;