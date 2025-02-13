from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import MySQLdb.cursors, re

app = Flask(__name__)

app.secret_key = 'key'

app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'mydb'

mysql = MySQL(app)

@app.route('/Librarium/', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE email = %s AND password = %s', (email, password,))
        account = cursor.fetchone()
        if account:
            session['loggedin'] = True
            session['id'] = account['user_id']
            session['username'] = account['username']
            return redirect(url_for('home'))
        else:
            msg = '✖ Invalid username or password.'
    return render_template('index.html', msg=msg)

@app.route('/Librarium/logout')
def logout():
   session.pop('loggedin', None)
   session.pop('user_id', None)
   session.pop('username', None)
   return redirect(url_for('login'))

@app.route('/Librarium/register', methods=['GET', 'POST'])
def register():
    msg = ''
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form and 'email' in request.form:
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        account = cursor.fetchone()
        if account:
            msg = '✖ Account already exists!'
        elif not re.match(r'[^@]+@[^@]+\.[^@]+', email):
            msg = '✖ Invalid email address!'
        elif not re.match(r'[A-Za-z0-9]+', username):
            msg = '✖ Username must contain only characters and numbers!'
        elif not username or not password or not email:
            msg = '✖ Please fill out the form!'
        else:
            cursor.execute('INSERT INTO users VALUES (NULL, %s, %s, %s, DEFAULT)', (username, password, email,))
            mysql.connection.commit()
            msg = '✔ Registration success!'
    elif request.method == 'POST':
        msg = '✖ Please fill out the form!'
    return render_template('register.html', msg=msg)

@app.route('/Librarium/home')
def home():
    if 'loggedin' in session:
        return render_template('home.html', username=session['username'])
    return redirect(url_for('login'))

@app.route('/Librarium/profile')
def profile():
    if 'loggedin' in session:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE user_id = %s', (session['id'],))
        account = cursor.fetchone()
        return render_template('profile.html', account=account)
    return redirect(url_for('login'))

'''@app.route('/Librarium/war40k')
def war40k():
    if 'loggedin' in session:
        return render_template('war40k.html', username=session['username'])
    return redirect(url_for('login'))

@app.route('/Librarium/Lionheart')
def Lionheart():
    if 'loggedin' in session:
        return render_template('Lionheart.html', username=session['username'])
    return redirect(url_for('login'))'''