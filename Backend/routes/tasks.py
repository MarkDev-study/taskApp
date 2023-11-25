from fastapi import APIRouter
from pydantic import BaseModel
from crudTask import *

tasks = APIRouter()

class Task(BaseModel):
    title: str
    content: str

@tasks.get('/tasks')
def tasks_all():
    return get_all_task()

@tasks.get('/tasks/{id}')
def tasks_one(id:int):
    task = get_one_task(id)
    return task

@tasks.post('/tasks/new')
def tasks_create(task: Task):
    create_task(task.title, task.content)
    

@tasks.put('/tasks/{id}')
def tasks_update(id, task: Task):
    update_task(id,task.title, task.content)

@tasks.delete('/tasks/{id}')
def tasks_delete(id):
    delete_task(id)
