from sqlalchemy import Column, Integer, String
from mulheres_cientistas_api.database import Base


class Mulher(Base):
    __tablename__ = "mulheres"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, index=True)
    descricao = Column(String)
    nascimento = Column(String)
    morte = Column(String)
    imagem = Column(String)
    wikipedia = Column(String)
    frase = Column(String)
