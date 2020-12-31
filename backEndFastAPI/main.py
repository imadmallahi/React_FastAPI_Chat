  
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

#creation des messages par defaut
messages = [
    {
        "id": "Papilotte",
        "item": "le silence de la nuit est le lac le plus profond de la terre "
    },
    {
        "id": "Marine",
        "item": "+1"
    },
    {
        "id": "Marine",
        "item": "J'adore le PHP"
    }
]
 
#init
app = FastAPI()
org = ['http://localhost:3000']

# associer avec frontEnd
app.add_middleware(
    CORSMiddleware,
    allow_origins=org,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)



# message root
@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Bienvenue ."}

# creation fonction get all message
@app.get("/message", tags=["messages"])
async def getAllMessage() -> dict:
    return { "data": messages }

# creation fonction add message
@app.post("/message", tags=["messages"])
async def addMsg(T: dict) -> dict:
    messages.append(T)
    return {
        "data": { " C bon" }
    }
