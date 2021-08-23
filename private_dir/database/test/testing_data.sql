BEGIN;

/*Create Team*/
INSERT INTO team.teams(
	team_name)
	VALUES ('Test Titans');

/*Create Users*/
INSERT INTO team.users(
	first_name, last_name, phone_number, email_address, pwd_hash)
	VALUES ( 
        'Nicholas', 'Oliveira', '858-442-1979', 'nicholas@oliveira.me', 'test1'
    );

/*make user a member of team*/
INSERT INTO team.membership(
	user_id, team_id, privledge_level)
	VALUES (1, 1, 'owner');

/*Create Game*/
INSERT INTO game.games(
	game_id, team_id, oppenant_team, date)
	VALUES (1, 1, 'EastLake H.S.', NOW());

/*Todo make the current game*/
INSERT INTO playbook.concepts(
	team_id, name)
	VALUES 
    (1, 'Irish'),
    (1, 'Stick'),
    (1, 'Vegas');

INSERT INTO playbook.personnel(
	team_id, name)
	VALUES 
    (1, 'Titan'),
    (1, 'Spartan'),
    (1, 'Regular');

INSERT INTO playbook.formations(
	team_id, name)
	VALUES 
    (1, 'Duece'),
    (1, 'Trey'),
    (1, 'Trio'),
    (1, 'I');

INSERT INTO playbook.shifts(
	team_id, name)
	VALUES 
    (1, 'Hop'),
    (1, 'Move'),
    (1, 'Switch');

INSERT INTO playbook.formation_tags(
	team_id, name)
	VALUES 
    (1, 'Tight');

INSERT INTO playbook.motions(
	team_id, name)
	VALUES 
    (1, 'X-Fly');

INSERT INTO playbook.run_protections(
	team_id, name, run_pass)
	VALUES 
    (1, 'Raider', 'R'),
    (1, 'Laker', 'R'),
    (1, 'Red', 'P'),
    (1, 'Yellow', 'P');

INSERT INTO playbook.tags(
	team_id, name)
	VALUES 
    (1, 'Y-Shallow');

END;