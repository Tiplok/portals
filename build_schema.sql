CREATE DATABASE IF NOT EXISTS portal;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
	pk_user_id INT(6) NOT NULL AUTO_INCREMENT, 
	name VARCHAR(30), 
	password VARCHAR(30), 
	register_date DATE, 
	last_login_date DATE, 
	login_count INT(6),
	CONSTRAINT c_pk_user_id PRIMARY KEY (pk_user_id)
);

DROP TABLE IF EXISTS portal;
CREATE TABLE portal (
	pk_portal_id INT(6) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
	image_path VARCHAR(255),
	description TEXT,
	CONSTRAINT c_pk_portal_id PRIMARY KEY (pk_portal_id)
);

DROP TABLE IF EXISTS category;
CREATE TABLE category (
	pk_category_id INT(6) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
	image_path VARCHAR(255),
	description TEXT,
	CONSTRAINT c_pk_category_id PRIMARY KEY (pk_category_id)
);

DROP TABLE IF EXISTS article;
CREATE TABLE article (
	pk_article_id INT(6) NOT NULL AUTO_INCREMENT,
	name VARCHAR(30),
	image_path VARCHAR(255),
	CONSTRAINT c_pk_article_id PRIMARY KEY (pk_article_id)
);

DROP TABLE IF EXISTS user_portal;
CREATE TABLE user_portal (
	pk_user_portal_id INT(6) NOT NULL AUTO_INCREMENT,
	fk_user_id INT(6),
	fk_portal_id INT(6),
	CONSTRAINT c_pk_user_portal_id PRIMARY KEY (pk_user_portal_id),
	CONSTRAINT user_portal_fk_user_id FOREIGN KEY (fk_user_id) REFERENCES user(pk_user_id),
	CONSTRAINT user_portal_fk_portal_id FOREIGN KEY (fk_portal_id) REFERENCES portal(pk_portal_id)
);


DROP TABLE IF EXISTS portal_category;
CREATE TABLE portal_category (
	pk_portal_category_id INT(6) NOT NULL AUTO_INCREMENT,
	fk_portal_id INT(6),
	fk_category_id INT(6),
	CONSTRAINT c_pk_portal_category_id PRIMARY KEY (pk_portal_category_id),
	CONSTRAINT portal_category_fk_portal_id FOREIGN KEY (fk_portal_id) REFERENCES portal(pk_portal_id),
	CONSTRAINT portal_category_fk_category_id FOREIGN KEY (fk_category_id) REFERENCES category(pk_category_id)
);

DROP TABLE IF EXISTS category_article;
CREATE TABLE category_article (
	pk_category_article_id INT(6) NOT NULL AUTO_INCREMENT,
	fk_category_id INT(6),
	fk_article_id INT(6),
	CONSTRAINT c_pk_category_article_id PRIMARY KEY (pk_category_article_id),
	CONSTRAINT category_article_fk_category_id FOREIGN KEY (fk_category_id) REFERENCES category(pk_category_id),
	CONSTRAINT category_article_fk_article_id FOREIGN KEY (fk_article_id) REFERENCES article(pk_article_id)
);

DROP TABLE IF EXISTS article_content;
CREATE TABLE article_content (
	pk_article_content_id INT(6) NOT NULL AUTO_INCREMENT,
	fk_article_id INT(6),
	fk_content_id INT(6),
	CONSTRAINT c_pk_article_content_id PRIMARY KEY (pk_article_content_id),
	CONSTRAINT article_content_fk_article_id FOREIGN KEY (fk_article_id) REFERENCES article(pk_article_id)
);

DROP TABLE IF EXISTS content_text;
CREATE TABLE content_text (
	pk_content_text_id INT(6) NOT NULL AUTO_INCREMENT,
	content_text TEXT,
	CONSTRAINT c_pk_content_text_id PRIMARY KEY (pk_content_text_id)
);

DROP TABLE IF EXISTS content_multimedia;
CREATE TABLE content_multimedia (
	pk_content_multimedia_id INT(6) NOT NULL AUTO_INCREMENT,
	multimedia_path VARCHAR(255),
	multimedia_type VARCHAR(30),
	CONSTRAINT c_pk_content_multimedia_id PRIMARY KEY (pk_content_multimedia_id)
);
