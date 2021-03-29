
create table education
(
    id integer not null
        primary key,
    begin_year integer,
    degree_title varchar(255),
    graduation_year integer,
    institute_name varchar(255),
    institute_url varchar(255),
    user_id integer,
    foreign key (user_id) references "user"(id)
);

create table experience
(
    id integer not null
        primary key,
    begin_date date,
    company_name varchar(255),
    company_url varchar(255),
    end_date date,
    job_title varchar(255),
    user_id integer,
    foreign key (user_id) references "user"(id)
);

create table experience_missions
(
    experience_id integer not null,
    missions varchar(255),
    foreign key (experience_id) references experience(id)
);

create table skill_set
(
    id integer not null
        primary key,
    icon_url varchar(255),
    title varchar(255),
    user_id integer,
    foreign key (user_id) references "user"(id)
);

create table skill_set_skills
(
    skill_set_id integer not null,
    skills varchar(255),
    foreign key (skill_set_id) references skill_set(id)
);

create table "user"
(
    id integer not null
        primary key,
    first_name varchar(255),
    last_name varchar(255),
    age integer,
    position varchar(255),
    picture_url varchar(255)
);

create table user_education
(
    user_id integer not null,
    education_id integer not null,
    foreign key (user_id) references "user"(id),
    foreign key (education_id) references education(id)
);

create table user_experience
(
    user_id integer not null,
    experience_id integer not null,
    foreign key (user_id) references "user"(id),
    foreign key (experience_id) references experience(id)
);

create table user_skill_sets
(
    user_id integer not null,
    skill_sets_id integer not null,
    foreign key (user_id) references "user"(id),
    foreign key (skill_sets_id) references skill_set(id)
);

create table api_key
(
    id integer not null,
    user_id integer not null,
    key varchar(255) not null,
    foreign key (user_id) references "user"(id)
);

create table user_description
(
    id integer not null primary key,
    user_id integer not null,
    about_markdown varchar(8192) not null,
    foreign key (user_id) references "user"(id)
);
