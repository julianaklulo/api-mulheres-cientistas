database = [
    {
        "id": 1,
        "nome": "Ada Lovelace",
        "descricao": "Matemática, escritora e tradutora",
        "nascimento": "10/12/1815",
        "morte": "27/11/1852",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/220px-Ada_Lovelace_portrait.jpg",
        "wikipedia": "https://pt.wikipedia.org/wiki/Ada_Lovelace",
        "frase": "Quanto mais estudo, mais sinto que minha mente nisso é insaciável.",
    },
    {
        "id": 2,
        "nome": "Katherine Johnson",
        "descricao": "Física, cientista espacial e matemática",
        "nascimento": "26/08/1918",
        "morte": "24/02/2020",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/1280px-Katherine_Johnson_1983.jpg",
        "wikipedia": "https://pt.wikipedia.org/wiki/Katherine_Johnson",
        "frase": "Goste do que faz, e então você fará o seu melhor."
    },
    {
        "id": 3,
        "nome": "Marie Curie",
        "descricao": "Física e química",
        "nascimento": "07/11/1867",
        "morte": "04/07/1934",
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/220px-Marie_Curie_c1920.jpg",
        "wikipedia": "https://pt.wikipedia.org/wiki/Marie_Curie",
        "frase": "Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais para temer menos.",
    },
    {
        "id": 4,
        "nome": "Rosalind Franklin",
        "descricao": "Biofísica e cristalógrafa",
        "nascimento": "25/07/1920",
        "morte": "16/04/1958",
        "imagem": "https://upload.wikimedia.org/wikipedia/pt/9/97/Rosalind_Franklin.jpg",
        "wikipedia": "https://pt.wikipedia.org/wiki/Rosalind_Franklin",
        "frase": "A Ciência e a vida cotidiana não podem e não devem ser separados.",
    },
]


from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./mulheres.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
