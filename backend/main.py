from flask import Flask

app = Flask("__main__")

@app.route("/")
def my_index():
    return render_template("index.html", flask_token="Hello World")

app.run(debug=True)