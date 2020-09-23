# import necessary libraries
import os
import json
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# db_all = create_classes(db)
##############################################


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return render_template("test.html")



# NOT USING YET
# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():

    return render_template("")


@app.route("/api/pals")
def pals():

    return jsonify()







if __name__ == "__main__":
    app.run()
