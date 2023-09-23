from mulheres_cientistas_api.schemas import (
    MulherSchemaCreate,
    MulherSchemaUpdate
)
from mulheres_cientistas_api.models import Mulher

from sqlalchemy.orm import Session


def get(db: Session):
    return db.query(Mulher).all()


def get_one(db: Session, mulher_id: int):
    return db.query(Mulher).filter(Mulher.id == mulher_id).first()


def create(db: Session, mulher: MulherSchemaCreate):
    db_mulher = Mulher(**mulher.model_dump())
    db.add(db_mulher)
    db.commit()
    db.refresh(db_mulher)
    return db_mulher


def update(db: Session, mulher_id: int, mulher: MulherSchemaUpdate):
    db_mulher = db.query(Mulher).filter(Mulher.id == mulher_id).first()
    if not db_mulher:
        return None
    
    for key, value in mulher.model_dump().items():
        if value is not None:
            setattr(db_mulher, key, value)
    db.commit()
    db.refresh(db_mulher)
    return db_mulher


def delete(db: Session, mulher_id: int):
    db_mulher = db.query(Mulher).filter(Mulher.id == mulher_id).first()
    if not db_mulher:
        return False

    db.query(Mulher).filter(Mulher.id == mulher_id).delete()
    db.commit()
    return True
