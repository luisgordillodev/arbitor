from sqlalchemy.orm import Session
from app.database import Base, engine, SessionLocal
from app.models.user import User
from app.core.security import hash_password
from sqlalchemy import Column, Integer, String

# ✅ Usa el mismo Base que el resto de la app
class Federacion(Base):
    __tablename__ = "federaciones"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    contacto = Column(String, nullable=True)
    correo = Column(String, nullable=True)

# ✅ Función para borrar y recrear todas las tablas
def reset_database():
    print("⚠️  Eliminando todas las tablas existentes...")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    print("✅ Base de datos reiniciada correctamente.\n")

# ✅ Crear los datos de ejemplo
def init_data():
    db: Session = SessionLocal()

    # Crear federación base
    federacion = Federacion(
        nombre="Federación Canaria de Baloncesto",
        contacto="Carlos Pérez",
        correo="contacto@fcbaloncesto.es",
    )
    db.add(federacion)
    db.commit()
    db.refresh(federacion)

    print(f"🏀 Federación creada: {federacion.nombre}")

    # Crear árbitros
    arbitros_data = [
        {"dni": "12345678A", "name": "Luis García", "categoria": "Autonómica"},
        {"dni": "23456789B", "name": "Marcos Díaz", "categoria": "Autonómica"},
        {"dni": "34567890C", "name": "Sofía López", "categoria": "Preferente"},
        {"dni": "45678901D", "name": "Ana Morales", "categoria": "Nacional"},
        {"dni": "56789012E", "name": "Pedro Torres", "categoria": "Nacional"},
        {"dni": "67890123F", "name": "Laura Herrera", "categoria": "Autonómica"},
        {"dni": "78901234G", "name": "Miguel Sánchez", "categoria": "Autonómica"},
        {"dni": "89012345H", "name": "Lucía Gómez", "categoria": "Preferente"},
        {"dni": "90123456J", "name": "Carlos Rodríguez", "categoria": "Autonómica"},
        {"dni": "01234567K", "name": "Elena Martín", "categoria": "Nacional"},
    ]

    for arb in arbitros_data:
        user = User(
            dni=arb["dni"],
            name=arb["name"],
            email=f"{arb['dni'].lower()}@arbitor.app",
            categoria=arb["categoria"],
            federacion=federacion.nombre,
            password_hash=hash_password("arbitor2025"),
        )
        db.add(user)

    db.commit()
    print("👥 10 árbitros creados correctamente.")
    print("🔐 Contraseña por defecto: arbitor2025")
    print("✅ Inicialización completada.\n")

    db.close()

# ✅ Ejecución principal
if __name__ == "__main__":
    reset_database()
    init_data()
