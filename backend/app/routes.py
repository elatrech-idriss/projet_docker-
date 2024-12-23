from flask import Blueprint, request, jsonify
from .models import User
from . import db
import logging

# Configurer le logger
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

user_bp = Blueprint('users', __name__)

@user_bp.route('/', methods=['GET'])
@user_bp.route('', methods=['GET'])  # Accepter aussi sans le "/"
def get_users():
    logger.info("GET /users endpoint hit")
    users = User.query.all()
    logger.info(f"Found {len(users)} users")
    return jsonify([user.to_dict() for user in users])

@user_bp.route('/', methods=['POST'])
@user_bp.route('', methods=['POST'])  # Accepter aussi sans le "/"
def add_user():
    data = request.get_json()
    logger.info(f"POST /users with data: {data}")
    
    try:
        new_user = User(name=data['name'], email=data['email'])
        db.session.add(new_user)
        db.session.commit()
        logger.info(f"User {new_user.name} added successfully.")
        return jsonify(new_user.to_dict()), 201
    except Exception as e:
        logger.error(f"Error adding user: {str(e)}")
        return jsonify({"error": "Error adding user"}), 500

@user_bp.route('/<int:user_id>', methods=['DELETE'])
@user_bp.route('<int:user_id>', methods=['DELETE'])  # Accepter aussi sans le "/"
def delete_user(user_id):
    logger.info(f"DELETE /users/{user_id} endpoint hit")
    user = User.query.get_or_404(user_id)
    try:
        db.session.delete(user)
        db.session.commit()
        logger.info(f"User with ID {user_id} deleted successfully.")
        return jsonify({"message": "User deleted"}), 200
    except Exception as e:
        logger.error(f"Error deleting user {user_id}: {str(e)}")
        return jsonify({"error": "Error deleting user"}), 500
