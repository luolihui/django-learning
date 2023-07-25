from flask import Flask,render_template,request

app=Flask(__name__)

@app.route('/index',methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/register',methods=['GET','POST'])
def register():
    if request.method=='GET':
       return render_template('register2.html')
    else:
        print(request.form) # 接收用户通过POST方式发送的数据
        return '注册success'
    # user=request.form.get('user')
    # pwd=request.form.get('pwd')
    # skill_list=request.form.getlist('skill')
    # print(user,pwd,skill_list)
    
@app.route('/login')
def login():
    return render_template('login.html')

# @app.route("/do/reg",methods=['GET'])
# def do_register():
#     # 接收用户通过GET方式发送的数据
#     print(request.args)
#     # 给用户返回结果
#     return '注册成功'

# @app.route('/post/reg',methods=['POST'])
# def post_register():
#     # 接收用户通过POST方式发送的数据
#     # user=request.form.get('user')
#     # pwd=request.form.get('pwd')
#     # skill_list=request.form.getlist('skill')
#     # print(user,pwd,skill_list)
#     print(request.form)
#     return '注册success'


if __name__=='__main__':
    app.run()