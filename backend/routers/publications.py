from fastapi import APIRouter

router = APIRouter(
    prefix="/api/publications",
    tags=["Publications"]
)

@router.get("")
def list_publications():
    return [
        {
            "id": 1,
            "title": "Primeira noticia",
            "type": "news"
        },
        {
            "id": 2,
            "title": "Primeiro Tutorial",
            "type": "tutorial"
        }
    ]