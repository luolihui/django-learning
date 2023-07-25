from flask import Flask,render_template

app2=Flask(__name__)

@app2.route('/cover')
def cover():
    return render_template('cover+posi.html')

@app2.route('/select')
def select():
    return render_template('select.html')

@app2.route('/inline')
def inline():
    return render_template('inline-block.html')

@app2.route('/flex')
def flex():
    return render_template('flex-grow.html')

if __name__=='__main__':
    app2.run()
