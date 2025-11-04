from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth
from app.database import Base, engine

# Crear las tablas si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI(title="ARBITOR API", version="1.0")

# Configurar CORS (para permitir conexión con frontend)
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrar rutas
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "ARBITOR API funcionando correctamente 🚀"}
