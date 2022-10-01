# import psycopg2
# from faker import Faker
# import random
#
# fake = Faker(['ru_RU'])
#
# conn = psycopg2.connect("host='localhost' port='5432' dbname='survey' user='postgres' password='zelelo'")
# cur = conn.cursor()
# formulation = open('resources/voprosy.txt', 'r', encoding='utf8')


#Заполнение таблицы question
# arr = [line[:len(line) - 1] for line in formulation.readlines()]
# for i in range(1000):
#     cur.execute(f"INSERT INTO question (formulation, id_questionnaire) VALUES "
#                 f"('{random.choice(arr)}', {random.randint(210, 600)})")


#Заполнение таблицы questionnaire
# arr = ['мужской', 'женский']
# arrName = ['о мире', 'о жизни', 'о наболевшем']
# for i in range(200):
#     cur.execute(f"INSERT INTO questionnaire (name_questionnaire, sex, year_birth) "
#             f"VALUES ('{fake.bothify(text=f'Анкета {random.choice(arrName)} номер ########')}', "
#             f"'{random.choice(arr)}', {random.randint(1950, 2010)})")


# formulation.close()
# conn.commit()
# conn.close()
