from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.tasks import tasks


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Puedes especificar los orígenes permitidos en lugar de "*"
    allow_credentials=True,
    allow_methods=["*"],  # Puedes especificar los métodos permitidos (GET, POST, etc.)
    allow_headers=["*"],  # Puedes especificar los encabezados permitidos
)


@app.get('/')
def root():
    return {"Bienvenido": "Api-Task"}

app.include_router(tasks)