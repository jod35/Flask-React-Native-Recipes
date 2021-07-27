import os

BASE_DIR = os.path.dirname(os.path.realpath(__file__))

class Config:
    SQLALCHEMY_DATABASE_URI="sqlite:///"+os.path.join(BASE_DIR,'site.db')
    SQLALCHEMY_ECHO=True
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    DEBUG=True