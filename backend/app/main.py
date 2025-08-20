from fastapi import FastAPI
from . import routes

app = FastAPI(title="Aegis-ICS API", version="0.1")

app.include_router(routes.router)

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "Aegis-ICS backend running"}