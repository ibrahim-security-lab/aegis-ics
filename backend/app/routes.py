from fastapi import APIRouter

router = APIRouter(prefix="/api")

@router.get("/demo")
async def demo():
    return {"message": "This will later return anomaly detection results"}