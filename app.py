from flask import *
import time
from flask import Flask, request, render_template, redirect, url_for, flash, session
#import database
import sqlite3
import datetime

app = Flask(__name__)
app.secret_key = "szupertitkoskulcs" 


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login')
def login():
    return render_template("login.html")

@app.route('/posztok')
def posztok():
    return render_template("posztok.html")

@app.route('/apps')
def apps():
    return render_template("projektek_apps.html")

@app.route('/web')
def web():
    return render_template("projektek_web.html")

@app.route('/rolam')
def rolam():
    return render_template("rolam.html")




if __name__ == '__main__':
    app.run(debug=True)