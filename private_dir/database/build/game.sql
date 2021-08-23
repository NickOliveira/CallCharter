BEGIN;

DROP SCHEMA IF EXISTS game CASCADE;
CREATE SCHEMA game;

CREATE TABLE game.games(
    game_id         SERIAL PRIMARY KEY NOT NULL,
    team_id         INTEGER NOT NULL,
    oppenant_team   VARCHAR(40) NOT NULL,
    date            DATE,
    CONSTRAINT game_tid_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);

CREATE TABLE game.call_sheet(
    game_id         INTEGER NOT NULL,
    team_id         INTEGER NOT NULL,
    sheet_number    INTEGER NOT NULL,
    personnel       varchar(20),
    shifts          varchar(10),
    formations      varchar(20),
    formation_tags  varchar(15),
    motions         varchar(15),
    run_protections varchar(15),
    concepts        varchar(15),
    tags            varchar(15),
    run_pass        char(1),
    CONSTRAINT callSheet_gid_fk FOREIGN KEY(team_id) REFERENCES game.games(game_id),
    CONSTRAINT callSheet_tid_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id),
    CONSTRAINT callsheet_rp_chk CHECK(run_pass = 'R' OR run_pass = 'P'),
    PRIMARY KEY (game_id, team_id, sheet_number)
);

CREATE TABLE game.plays(
    game_id         INTEGER NOT NULL,
    team_id         INTEGER NOT NULL,
    personnel       varchar(20),
    shifts          varchar(10),
    formations      varchar(20),
    formation_tags  varchar(15),
    motions         varchar(15),
    run_protections varchar(15),
    concepts        varchar(15),
    tags            varchar(15),
    run_pass        char(1),
    call_time       timestamp,
    result          VARCHAR(4),
    gain            INTEGER,
    down            INTEGER,
    distance        INTEGER,
    yard_line       INTEGER,
    CONSTRAINT calls_gid_fk FOREIGN KEY(team_id) REFERENCES game.games(game_id),
    CONSTRAINT calls_tid_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id)
);
END;