from flask import Flask, render_template

app = Flask(__name__)  

# 创建了网址/show/info和函数index的对应关系，用户访问网址，自动执行index
# Flask内部自动打开文件，文件地址默认为当前项目目录的 templates 文件夹(可修改)
# template_folder='hgf'可修改默认文件夹名为 hgf
@app.route('/show/info')
def index():
    # return '中国联通'
    return render_template('index.html')

@app.route('/get/news')
def get_news():
    return render_template('get_news.html')

@app.route('/goods/list')
def goods_list():
    return render_template('goods_list.html')

@app.route('/register')
def register():
    return render_template('register1.html')

if __name__ == '__main__':
    app.run()
