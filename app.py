from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Sample data for gold prices (modify as needed)
data = {
    'dates': ['2021-01-01', '2021-01-02', '2021-01-03'],
    'prices': [1800, 1820, 1810]
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data')
def get_data():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
