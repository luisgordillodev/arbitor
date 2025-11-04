from pydantic import BaseModel

class UserLogin(BaseModel):
    dni: str
    password: str

class UserResponse(BaseModel):
    id: int
    dni: str
    name: str
    email: str | None
    categoria: str | None
    federacion: str | None
    class Config:
        orm_mode = True
