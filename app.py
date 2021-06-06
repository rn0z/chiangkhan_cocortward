from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__, instance_relative_config=False, static_folder='./client/build', static_url_path='/')
app.config.from_object('config.Config')

db = SQLAlchemy(app)
cors = CORS(app)

class RoomModel(db.Model):
    id         = db.Column(db.Integer, primary_key=True)
    docter     = db.Column(db.String(50))
    patient    = db.Column(db.String(50))
    created_on = db.Column(db.DateTime, index=False, unique=False, nullable=True)

def create_app():
    @app.route('/')
    def inbex():
        return app.send_static_file('index.html')

    @app.route('/preferences')
    def preferences():
        return app.send_static_file('index.html')

    @app.route('/api/name', methods=['GET', 'POST'])
    def name_record():
        if request.method == 'POST':
            data = request.get_json()
            new_ = RoomModel(docter=data['docter'], patient=data['patient'], created_on=datetime.utcnow())
            db.session.add(new_)
            db.session.commit()
            print("done")
            return jsonify({'message': 'new state of name is created'})

        record_ = RoomModel.query.order_by(RoomModel.id.desc()).first()
        return jsonify(docter=record_.docter, patient=record_.patient)

    db.create_all()

    return app
