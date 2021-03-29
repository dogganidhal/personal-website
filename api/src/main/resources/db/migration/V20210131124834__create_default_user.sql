insert into "user" (id, first_name, last_name, position, age)
values (1, 'Nidhal', 'Dogga', 'Full-stack software developer', 25);

insert into api_key (id, user_id, key)
values (1, 1, 'd9e062be-faa6-4228-8a09-92ce90ddf55a');

-- Education

insert into education (id, begin_year, degree_title, graduation_year, institute_name, institute_url, user_id)
values (1, 2015,
        'Classes préparatoires Informatique',
        2016, 'École nationale Supérieure d''Informatique',
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
values (2, '2018-06-01 00:00:00.000', 'Zenpark', 'https://zenpark.com', '2019-08-31 00:00:00.000', 'Développeur iOS & Android',
        1);

insert into experience (id, begin_date, company_name, company_url, end_date, job_title, user_id)
values (3, '2019-09-01 00:00:00.000', 'BNP Paribas', 'https://bnpparibas.com', '2021-08-31 00:00:00.000', 'Développeur Full-Stack',
        1);

insert into experience (id, begin_date, company_name, company_url, end_date, job_title, user_id)
values (4, '2019-10-01 00:00:00.000', 'Prize & Fun', 'https://prize-and-fun.com', null, 'CTO & Co-Fondateur',
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
values (3, 'Étudier la migration de monolith en microservices');

insert into experience_missions (experience_id, missions)
values (3, 'Étude d''automatisation et le monitoring du Business Process avec les moteurs de workflow (Camunda BPMN)');

insert into experience_missions (experience_id, missions)
values (3, 'Amélioration des tests de non régression en préparation pour les migrations');

insert into experience_missions (experience_id, missions)
values (3, 'Maximiser l''automatisation des process de développement avec Jenkins et Ansible');

insert into experience_missions (experience_id, missions)
values (4, 'Valider le concept avec une version alpha en Flutter, Unity & Firebase');

insert into experience_missions (experience_id, missions)
values (4, 'Développer la version stable en microservices avec Spring, Kotlin & GraphQL');

insert into user_experience (user_id, experience_id)
values (1, 1);

insert into user_experience (user_id, experience_id)
values (1, 2);

insert into user_experience (user_id, experience_id)
values (1, 3);

insert into user_experience (user_id, experience_id)
values (1, 4);

-- Skills

insert into skill_set (id, icon_url, title, user_id)
values (1, 'https://materialdesignicons.com/api/download/692F85E2-79A8-4207-ACF7-DEC8D675BE38/F44A4A/1/F44A4A/0/48', 'Développement Web', 1);

insert into skill_set (id, icon_url, title, user_id)
values (2, 'https://materialdesignicons.com/api/download/8898488F-1BE6-40A0-84B7-1C0832AA4754/F44A4A/1/F44A4A/0/48', 'Développement Mobile', 1);

insert into skill_set (id, icon_url, title, user_id)
values (3, 'https://materialdesignicons.com/api/download/4B4C339D-D581-44A3-95DE-4254CC42AC8D/F44A4A/1/F44A4A/0/48', 'Développement Frontend', 1);

insert into skill_set (id, icon_url, title, user_id)
values (4, 'https://materialdesignicons.com/api/download/CF07C502-388E-4A65-BD89-FACCFD00C245/F44A4A/1/F44A4A/0/48', 'DevOps', 1);

insert into skill_set (id, icon_url, title, user_id)
values (5, 'https://materialdesignicons.com/api/download/419C0A49-C751-4204-8C82-7E43B0896BD9/F44A4A/1/F44A4A/0/48', 'UI & UX', 1);

insert into skill_set (id, icon_url, title, user_id)
values (6, 'https://materialdesignicons.com/api/download/9156AFAA-25BB-4E97-9EC8-BB9BE9AF60B0/F44A4A/1/F44A4A/0/48', 'Et plus', 1);

-- Développement Web

insert into skill_set_skills (skill_set_id, skills)
values (1, 'Java, Kotlin, Spring Boot');

insert into skill_set_skills (skill_set_id, skills)
values (1, 'NodeJS, NestJS, Typescript');

insert into skill_set_skills (skill_set_id, skills)
values (1, 'REST, GraphQL, gRPC APIs');

insert into skill_set_skills (skill_set_id, skills)
values (1, 'SQL, NoSQL Databases');

insert into skill_set_skills (skill_set_id, skills)
values (1, 'Microservices');

insert into skill_set_skills (skill_set_id, skills)
values (1, 'Async messaging');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 1);

-- Développement Frontend

insert into skill_set_skills (skill_set_id, skills)
values (3, 'React.js');

insert into skill_set_skills (skill_set_id, skills)
values (3, 'Notions d''Angular');

insert into skill_set_skills (skill_set_id, skills)
values (3, 'MacOS natif');

insert into skill_set_skills (skill_set_id, skills)
values (3, 'Electron');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 3);

-- Développement Mobile

insert into skill_set_skills (skill_set_id, skills)
values (2, 'Android natif (Java, Kotlin)');

insert into skill_set_skills (skill_set_id, skills)
values (2, 'iOS natif (Swift, Objective-C)');

insert into skill_set_skills (skill_set_id, skills)
values (2, 'MacOS natif (Swift, Objective-C)');

insert into skill_set_skills (skill_set_id, skills)
values (2, 'Electron');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 2);

-- DevOps

insert into skill_set_skills (skill_set_id, skills)
values (4, 'Docker, Kubernetes');

insert into skill_set_skills (skill_set_id, skills)
values (4, 'Jenkins, Gitlab CI, Github Actions');

insert into skill_set_skills (skill_set_id, skills)
values (4, 'GCP, AWS');

insert into skill_set_skills (skill_set_id, skills)
values (4, 'Nginx');

insert into skill_set_skills (skill_set_id, skills)
values (4, 'Ansible');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 4);

-- UI & UX

insert into skill_set_skills (skill_set_id, skills)
values (5, 'Sketch, Figma, Adobe XD');

insert into skill_set_skills (skill_set_id, skills)
values (5, 'App Prototyping');

insert into skill_set_skills (skill_set_id, skills)
values (5, 'Material Design');

insert into skill_set_skills (skill_set_id, skills)
values (5, 'Final Cut Pro');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 5);

-- More

insert into skill_set_skills (skill_set_id, skills)
values (6, 'Git, Git-Flow');

insert into skill_set_skills (skill_set_id, skills)
values (6, 'Chatbots et assistants vocaux');

insert into skill_set_skills (skill_set_id, skills)
values (6, 'Méthodes agiles');

insert into user_skill_sets (user_id, skill_sets_id)
values (1, 6);

-- User description

insert into user_description (user_id, about_markdown)
values (1, 'Bonjour, je m''appelle Nidhal. j''adore créer tout types de logiciel, de la plus simple des applications mobiles, jusqu''au plus complexe des backends. Je suis actuellement apprentis chez [BNP Paribas](https://bnpparibas.com/).

N''hésitez pas jeter un coup d''œuil sur [mon CV](/resume), [mes projets](http://github.com/dogganidhal), ou [contactez moi](/contact).

Vous pouvez aussi trouver [le code source de ce site](http://github.com/dogganidhal/personal-website), écrit en React et Typescript ❤️');
