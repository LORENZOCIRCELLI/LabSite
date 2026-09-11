from fastapi import FastAPI
from routers.publications import router as publications_router
app = FastAPI()
app.include_router(publications_router)

@app.get("/")
def home():
    return {
        "message": "LIRA CMS API"
    }