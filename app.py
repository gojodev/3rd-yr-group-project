from flask import Flask, render_template

app = Flask(__name__)

# Route for the home page (index.html)
@app.route('/')
def index():
    return render_template('index.html')

# Route for the about page (about.html)
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/review')
def review():
    return render_template('review.html')

@app.route('support')
def support():
    return render_template('support.html')

if __name__ == '__main__':
    app.run(debug=True)
