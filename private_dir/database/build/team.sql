BEGIN;

DROP SCHEMA IF EXISTS team CASCADE;
CREATE SCHEMA team;

/*Create Tables*/
CREATE TABLE team.users (
    user_id         SERIAL PRIMARY KEY,
    first_name      VARCHAR(20),
    last_name       VARCHAR(20),
    phone_number    VARCHAR(15),
    email_address   VARCHAR(40),
    pwd_hash        VARCHAR(60)
);

/*TODO optional foriegn key into game table with same team_id*/
CREATE TABLE team.teams (
    team_id         SERIAL PRIMARY KEY,
    team_name       VARCHAR(50) NOT NULL,
    current_game    INTEGER
);


CREATE TABLE team.membership(
    user_id         INTEGER,
    team_id         INTEGER,
    privledge_level VARCHAR(5),
    CONSTRAINT membership_uid_fk FOREIGN KEY(user_id) REFERENCES team.users(user_id),
    CONSTRAINT membership_tid_fk FOREIGN KEY(team_id) REFERENCES team.teams(team_id),
    CONSTRAINT membership_privlvl_chk CHECK(privledge_level = 'admin' OR privledge_level = 'owner' 
        OR privledge_level = 'user')
);

END;