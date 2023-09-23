from fastapi import FastAPI, HTTPException, Depends
from mulheres_cientistas_api.crud import get, get_one, create, update, delete
from mulheres_cientistas_api.schemas import MulherSchema, MulherSchemaCreate, MulherSchemaUpdate
from fastapi.middleware.cors import CORSMiddleware
from mulheres_cientistas_api.database import Base, get_db
from mulheres_cientistas_api.database import SessionLocal, engine

from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:3000", "http://127.0.0.1:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {"title": "API de Mulheres Cientistas"}


@app.get("/mulheres", response_model=list[MulherSchema], status_code=200)
def get_mulheres(db: Session = Depends(get_db)) -> list[MulherSchema]:
    return get(db=db)


@app.get("/mulheres/{mulher_id}", response_model=MulherSchema, status_code=200)
def get_mulher_by_id(mulher_id: int, db: Session = Depends(get_db)):
    mulher = get_one(db=db, mulher_id=mulher_id)
    if mulher is None:
        return HTTPException(status_code=404, detail="Mulher não encontrada")
    return mulher


@app.post("/mulheres", response_model=MulherSchema, status_code=201)
def create_mulher(mulher: MulherSchemaCreate, db: Session = Depends(get_db)):
    return create(db=db, mulher=mulher)


@app.put("/mulheres/{mulher_id}", response_model=MulherSchema)
def update_mulher(mulher_id: int, mulher: MulherSchemaUpdate, db: Session = Depends(get_db)):
    mulher = update(db=db, mulher_id=mulher_id, mulher=mulher)
    if mulher is None:
        return HTTPException(status_code=404, detail="Mulher não encontrada")
    return mulher


@app.delete("/mulheres/{mulher_id}", status_code=204)
def delete_mulher(mulher_id: int, db: Session = Depends(get_db)):
    if not delete(db=db, mulher_id=mulher_id):
        return HTTPException(status_code=404, detail="Mulher não encontrada")
    return {"detail": "Mulher deletada com sucesso"}
