--
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE survey;
--
-- Name: survey; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE survey WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';


ALTER DATABASE survey OWNER TO postgres;

\connect survey

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: answer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.answer (
    id_answer integer NOT NULL,
    answer_option character varying(100),
    id_question integer,
    id_result integer
);


ALTER TABLE public.answer OWNER TO postgres;

--
-- Name: answer_id_answer_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.answer ALTER COLUMN id_answer ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.answer_id_answer_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.question (
    id_question integer NOT NULL,
    formulation character varying(256) NOT NULL,
    id_questionnaire integer NOT NULL
);


ALTER TABLE public.question OWNER TO postgres;

--
-- Name: question_id_question_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.question ALTER COLUMN id_question ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.question_id_question_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: questionnaire; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.questionnaire (
    id_questionnaire integer NOT NULL,
    name_questionnaire character varying(100) NOT NULL,
    sex character varying(30) NOT NULL,
    year_birth integer NOT NULL
);


ALTER TABLE public.questionnaire OWNER TO postgres;

--
-- Name: questionnaire_id_questionnaire_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.questionnaire ALTER COLUMN id_questionnaire ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.questionnaire_id_questionnaire_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: result; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.result (
    id_result integer NOT NULL,
    id_questionnaire integer NOT NULL
);


ALTER TABLE public.result OWNER TO postgres;

--
-- Name: result_id_result_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.result ALTER COLUMN id_result ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.result_id_result_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: answer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.answer (id_answer, answer_option, id_question, id_result) FROM stdin;
\.
COPY public.answer (id_answer, answer_option, id_question, id_result) FROM '$$PATH$$/3332.dat';

--
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.question (id_question, formulation, id_questionnaire) FROM stdin;
\.
COPY public.question (id_question, formulation, id_questionnaire) FROM '$$PATH$$/3331.dat';

--
-- Data for Name: questionnaire; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.questionnaire (id_questionnaire, name_questionnaire, sex, year_birth) FROM stdin;
\.
COPY public.questionnaire (id_questionnaire, name_questionnaire, sex, year_birth) FROM '$$PATH$$/3330.dat';

--
-- Data for Name: result; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.result (id_result, id_questionnaire) FROM stdin;
\.
COPY public.result (id_result, id_questionnaire) FROM '$$PATH$$/3333.dat';

--
-- Name: answer_id_answer_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.answer_id_answer_seq', 1, false);


--
-- Name: question_id_question_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.question_id_question_seq', 1359, true);


--
-- Name: questionnaire_id_questionnaire_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.questionnaire_id_questionnaire_seq', 203, true);


--
-- Name: result_id_result_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.result_id_result_seq', 1, false);


--
-- Name: answer answer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_pkey PRIMARY KEY (id_answer);


--
-- Name: question question_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id_question);


--
-- Name: questionnaire questionnaire_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.questionnaire
    ADD CONSTRAINT questionnaire_pkey PRIMARY KEY (id_questionnaire);


--
-- Name: result result_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_pkey PRIMARY KEY (id_result);


--
-- Name: answer answer_question; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_question FOREIGN KEY (id_question) REFERENCES public.question(id_question) NOT VALID;


--
-- Name: answer answer_result; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.answer
    ADD CONSTRAINT answer_result FOREIGN KEY (id_result) REFERENCES public.result(id_result) NOT VALID;


--
-- Name: question question_questionnaire; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_questionnaire FOREIGN KEY (id_questionnaire) REFERENCES public.questionnaire(id_questionnaire) NOT VALID;


--
-- Name: result result_questionnaire; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_questionnaire FOREIGN KEY (id_questionnaire) REFERENCES public.questionnaire(id_questionnaire) NOT VALID;


--
-- PostgreSQL database dump complete
--

