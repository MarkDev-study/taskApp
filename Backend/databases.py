from peewee import Model, SqliteDatabase, CharField

db = SqliteDatabase('taskdb.db');

class Tasks(Model):
    title = CharField()
    content = CharField()

    class Meta:
        database = db

db.connect()
db.create_tables([Tasks], safe=True)