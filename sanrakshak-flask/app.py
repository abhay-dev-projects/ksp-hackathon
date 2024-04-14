from flask import Flask, render_template, url_for, request, jsonify
from flask_cors import CORS
from upload.process_csv import process_csv

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello from Flask"

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        # Handle file upload logic here
        file = request.files['file']
        # Process the file as needed
        file.save('temp.csv')
        
        processed_data_json = process_csv('temp.csv')
        
        print('file recieved')
        return jsonify(processed_data_json)

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)  