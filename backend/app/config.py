import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv(
        'DATABASE_URL',
        'mysql+pymysql://root:password@localhost/dbname'
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
