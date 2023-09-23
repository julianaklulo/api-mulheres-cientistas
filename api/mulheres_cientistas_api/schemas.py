
from typing import Optional
from pydantic import BaseModel


class MulherSchema(BaseModel):
    id: int
    nome: str
    descricao: str
    nascimento: str
    morte: str
    imagem: str
    wikipedia: str
    frase: str

    class Config:
        orm_mode = True


class MulherSchemaCreate(BaseModel):
    nome: str
    descricao: str
    nascimento: str
    morte: str
    imagem: str
    wikipedia: str
    frase: str


class MulherSchemaUpdate(BaseModel):
    nome: Optional[str]
    descricao: Optional[str]
    nascimento: Optional[str]
    morte: Optional[str]
    imagem: Optional[str]
    wikipedia: Optional[str]
    frase: Optional[str]
