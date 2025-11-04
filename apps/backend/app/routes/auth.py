from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.user import UserLogin
from app.models.user import User
from app.core.security import verify_password, create_access_token
from app.database import get_db

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.dni == user.dni).first()
    if not db_user or not verify_password(user.password, db_user.password_hash):
        raise HTTPException(status_code=401, detail="DNI o contraseña incorrectos")
    token = create_access_token({"sub": db_user.dni})
    return {"access_token": token, "token_type": "bearer", "dni": db_user.dni, "name": db_user.name}
