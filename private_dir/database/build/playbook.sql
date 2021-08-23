BEGIN;

DROP SCHEMA IF EXISTS playbook CASCADE;
CREATE SCHEMA playbook;


CREATE TABLE playbook.personnel(
    team_id     INT,
    name        varchar[20],
    CONSTRAINT playbook_personnel_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.shifts(
    team_id     INT,
    name        varchar[10],
    CONSTRAINT playbook_shifts_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.formations(
    team_id     INT,
    name varchar[20],
    CONSTRAINT playbook_fromations_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.formation_tags(
    team_id     INT,
    name varchar[15],
    CONSTRAINT playbook_formation_tags_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.motions(
    team_id     INT,
    name varchar[15],
    CONSTRAINT playbook_motions_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.run_protections(
    team_id     INT,
    name        varchar[15],
    run_pass    CHAR(1),
    CONSTRAINT playbook_run_protections_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id),
    CONSTRAINT run_protection_rp_chk CHECK(run_pass = 'R' OR run_pass = 'P')
);

CREATE TABLE playbook.concepts(
    team_id     INT,
    name varchar[15],
    CONSTRAINT playbook_concepts_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE playbook.tags(
    team_id     INT,
    name varchar[15],
    CONSTRAINT playbook_tags_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

END;