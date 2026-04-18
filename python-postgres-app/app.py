from flask import Flask, request, jsonify
from db import get_connection

app = Flask(__name__)

@app.route('/users', methods=['GET'])
def get_users():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/users', methods=['POST'])
def add_user():
    data = request.json
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO users (name, email) VALUES (%s, %s)",
        (data['name'], data['email'])
    )
    conn.commit()
    conn.close()
    return {"message": "User added"}

if __name__ == '__main__':
    app.run(debug=True, port=5000)