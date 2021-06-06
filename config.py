from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

class Config:
    SQLALCHEMY_DATABASE_URI             = environ.get('SQLALCHEMY_DATABASE_URI')
    FLASK_ENV                           = environ.get('FLASK_ENV')
    FLASK_APP                           = environ.get('FLASK_APP')
    FLASK_KEY                           = environ.get('FLASK_KEY')
    CORS_HEADERS                        = environ.get('CORS_HEADERS')
    SQLALCHEMY_TRACK_MODIFICATIONS      = environ.get('SQLALCHEMY_TRACK_MODIFICATIONS')