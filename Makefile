install:
	pip install -r backend/requirements.txt
	npm install --prefix frontend

dev:
	npm run dev --prefix frontend & uvicorn backend.app.main:app --reload
