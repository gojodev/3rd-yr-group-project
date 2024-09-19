from flask import Flask, render_template

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/about', methods=["GET", "POST"])
def about():
    return render_template('about.html')

@app.route('/review')
def review():
    return render_template('review.html')

@app.route('/support')
def support():
    return render_template('support.html')

if __name__ == '__main__':
    app.run(debug=True)
    
