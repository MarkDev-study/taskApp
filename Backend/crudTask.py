from databases import Tasks


def create_task(title,content):
    new_task = Tasks.create(title=title, content=content)
    print(new_task)

def get_all_task():
    tasksdb = Tasks.select()
    tasks=[]
    for task in tasksdb:
        task = {
            "id": task.id,
            "title": task.title,
            "content": task.content
            }
        tasks.append(task)
    return tasks

def get_one_task(id):
    tasks = get_all_task()
    for task in tasks:
        if task['id'] == id :
            return task

def update_task(id, new_title, new_content):
    try:       
        taskUpdate = Tasks.get(Tasks.id == id)
        taskUpdate.title = new_title
        taskUpdate.title = new_content
        taskUpdate.save()
    except Tasks.DoesNotExist:
        return "la tarea no existe"

def delete_task(id):
    try:       
        taskDelete = Tasks.get(Tasks.id == id)
        taskDelete.delete_instance()
    except Tasks.DoesNotExist:
        print("la tarea no existe")
