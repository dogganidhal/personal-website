insert into "user" (id, full_name, position)
values (1, 'Nidhal Dogga', 'Full-stack software developer');

insert into api_key (id, user_id, key)
values (1, 1, 'd9e062be-faa6-4228-8a09-92ce90ddf55a');

-- Education

insert into education (id, begin_year, degree_title, graduation_year, institute_name, institute_url, user_id)
values (1, 2015,
        'Classes préparatoires Informatique',
        2016, 'Ecole national Supérieure d''Informatique',
        'https://esi.dz/', 1);

insert into education (id, begin_year, degree_title, graduation_year, institute_name, institute_url, user_id)
values (2, 2016,
        'Licence Informatique',
        2018, 'Université de Strasbourg',
        'https://unistra.fr/', 1);

insert into education (id, begin_year, degree_title, graduation_year, institute_name, institute_url, user_id)
values (3, 2018,
        'BAC +5 Architecture Logiciel',
        2021, 'CFA INSTA',
        'https://cfa-insta.fr', 1);

insert into user_education (user_id, education_id)
values (1, 1);

insert into user_education (user_id, education_id)
values (1, 2);

insert into user_education (user_id, education_id)
values (1, 3);

-- Experience

insert into experience (id, begin_date, company_name, company_url, end_date, job_title, user_id)
values (1, '2017-05-25 00:00:00.000', 'Appsolute GmBH', 'https://appsolute.de', '2017-06-29 00:00:00.000', 'Développeur iOS & macOS',
        1 );

insert into experience (id, begin_date, company_name, company_url, end_date, job_title, user_id)
values (3, '2019-09-01 00:00:00.000', 'BNP Paribas', 'https://bnpparibas.com', '2021-08-31 00:00:00.000', 'Développeur Web Java - Spring',
        1);

insert into experience (id, begin_date, company_name, company_url, end_date, job_title, user_id)
values (2, '2018-06-01 00:00:00.000', 'Zenpark', 'https://zenpark.com', '2019-08-31 00:00:00.000', 'Développeur iOS & Android',
        1);

insert into experience_missions (experience_id, missions)
values (1, 'Conception d''une librarie de detection de notes musicales pour iOS et macOS basé sur CoreAudio, utilisée dans l''application BetterEars de iOS et macOS');

insert into experience_missions (experience_id, missions)
values (1, 'Développement d''une application de démonstration pour une librarie de calendrier sur iOS');

insert into experience_missions (experience_id, missions)
values (2, 'Développement iOS et Android natifs');

insert into experience_missions (experience_id, missions)
values (2, 'Proof of Concept de React Native');

insert into experience_missions (experience_id, missions)
values (2, 'Intégration continue avec Bitrise');

insert into experience_missions (experience_id, missions)
values (3, 'Etudier la migration de monolith en microservices');

insert into experience_missions (experience_id, missions)
values (3, 'Etude d''automatisation du Business Process avec les engines de workflow (Camunda BPMN)');

insert into experience_missions (experience_id, missions)
values (3, 'Amélioration des tests de non régression en préparation pour les migrations');

insert into experience_missions (experience_id, missions)
values (3, 'Maximiser l''automatisation des process de développement avec Jenkins et Ansible');

insert into user_experience (user_id, experience_id)
values (1, 1);

insert into user_experience (user_id, experience_id)
values (1, 2);

insert into user_experience (user_id, experience_id)
values (1, 3);

-- Skills

