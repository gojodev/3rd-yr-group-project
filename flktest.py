from flask import Flask, render_template, request, make_response, session as flask_session


app = Flask(__name__)

def show():
    return 'testing'

@app.route('/')
def index():
    return render_template('index.html')

def test():
    print("log")
    return 'TEST'

@app.route('/hello')
def hello():
    return 'Hello'

@app.route('/hello/<name>')
def name(name):
    return f'Hello {name}!'

@app.route('/setcookie', methods=['POST', 'GET'])
def setcookie():
    if request.method == 'POST':
        user = request.form['nm']
        resp = make_response(render_template('cookie.html'))
        resp.set_cookie('userID', user)
        return resp
    return render_template('setcookie_form.html')

@app.route('/getcookie')
def getcookie():
    name = request.cookies.get('userID')
    if name:
        return f'<h1>Welcome {name}</h1>'
    return '<h1>No cookie found</h1>'

@app.route('/setsession', methods=['POST', 'GET'])
def setsession():
    if request.method == 'POST':
        user = request.form['nm']
        flask_session['userID'] = user
        return '<h1>Session data set!</h1>'
    return render_template('setsession_form.html')

@app.route('/getsession')
def getsession():
    user = flask_session.get('userID')
    if user:
        return f'<h1>Welcome back, {user}!</h1>'
    return '<h1>No session data found</h1>'

if __name__ == '__main__':
    app.debug = True
    app.run(port=3001)
    app.run(debug=True )
