from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
import os
from flask_cors import CORS  # Importer CORS ici

# Charger les variables d'environnement
load_dotenv()

# Initialiser SQLAlchemy et Migrate
db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Configuration de la base de données
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
        'DATABASE_URL',
        'mysql+pymysql://root:secret@db:3306/dbname'  # Modifier localhost par db
    )

    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Appliquer CORS à l'application en autorisant toutes les méthodes et tous les domaines
    CORS(app, origins="*", supports_credentials=True, methods=["GET", "POST", "DELETE"])

    # Initialiser la base de données et les migrations
    db.init_app(app)
    migrate.init_app(app, db)

    # Enregistrer les routes avec un blueprint
    from .routes import user_bp
    app.register_blueprint(user_bp, url_prefix='/users')

    return app
